import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thank-you", "/thank-you-get-a-quote", "/api/"],
      },
    ],
    sitemap: "https://www.hiredesimarketer.com/sitemap.xml",
  };
}
