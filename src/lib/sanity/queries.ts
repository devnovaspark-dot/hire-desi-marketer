/**
 * Pre-configured GROQ Queries for Sanity
 */

// Query all published posts with author and category expanded
export const ALL_POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  _updatedAt,
  "coverImage": mainImage.asset->url,
  "coverImageAlt": coalesce(mainImage.alt, title),
  "coverBadge": coalesce(coverBadge, "Verified Strategic Guide"),
  readTimeMinutes,
  featured,
  tags,
  keyTakeaways,
  faqs,
  "category": category->{
    "id": _id,
    title,
    "slug": slug.current,
    description,
    color
  },
  "author": author->{
    "id": _id,
    name,
    role,
    "slug": slug.current,
    "image": image.asset->url,
    bio,
    linkedin,
    twitter
  }
}`;

// Query single post by slug
export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  _updatedAt,
  "coverImage": mainImage.asset->url,
  "coverImageAlt": coalesce(mainImage.alt, title),
  "coverBadge": coalesce(coverBadge, "Verified Strategic Guide"),
  readTimeMinutes,
  featured,
  tags,
  keyTakeaways,
  faqs,
  "category": category->{
    "id": _id,
    title,
    "slug": slug.current,
    description,
    color
  },
  "author": author->{
    "id": _id,
    name,
    role,
    "slug": slug.current,
    "image": image.asset->url,
    bio,
    linkedin,
    twitter
  },
  body
}`;

// Query all post slugs for generateStaticParams
export const POST_SLUGS_QUERY = `*[_type == "post" && defined(slug.current)][].slug.current`;

// Query all categories
export const CATEGORIES_QUERY = `*[_type == "category"] | order(title asc) {
  "id": _id,
  title,
  "slug": slug.current,
  description
}`;
