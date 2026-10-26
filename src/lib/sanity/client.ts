/**
 * Sanity Client Configuration
 *
 * NOTE: Designed to work seamlessly with or without live Sanity credentials.
 * If NEXT_PUBLIC_SANITY_PROJECT_ID is set in your .env.local, it queries Sanity.
 * Otherwise, it gracefully falls back to the rich local data in src/data/blog-posts.ts.
 */

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
};

export const isSanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
);

/**
 * Lightweight fetch wrapper to query Sanity API directly without needing heavy external dependencies.
 */
export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: string;
  params?: Record<string, unknown>;
  revalidate?: number | false;
  tags?: string[];
}): Promise<T | null> {
  if (!isSanityConfigured) {
    return null;
  }

  const { projectId, dataset, apiVersion } = sanityConfig;
  const searchParams = new URLSearchParams();
  searchParams.set("query", query);

  if (params && typeof params === "object") {
    for (const [key, value] of Object.entries(params)) {
      searchParams.set(`$${key}`, JSON.stringify(value));
    }
  }

  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?${searchParams.toString()}`;

  try {
    const res = await fetch(url, {
      next: {
        revalidate: revalidate === false ? undefined : revalidate,
        tags,
      },
    });

    if (!res.ok) {
      console.warn(`[Sanity] Fetch failed: ${res.statusText}`);
      return null;
    }

    const { result } = await res.json();
    return result as T;
  } catch (err) {
    console.error("[Sanity] Network error querying Sanity:", err);
    return null;
  }
}
