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
  "coverImage": mainImage.asset->url + "?auto=format&fit=max&fm=webp",
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
    "image": image.asset->url + "?auto=format&fit=max&fm=webp",
    bio,
    linkedin
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
  "coverImage": mainImage.asset->url + "?auto=format&fit=max&fm=webp",
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
    "image": image.asset->url + "?auto=format&fit=max&fm=webp",
    bio,
    linkedin
  },
  body[]{
    ...,
    _type == "richImage" => {
      ...,
      "url": select(
        asset->extension == "gif" => asset->url,
        asset->url + "?auto=format&fit=max&fm=webp"
      )
    },
    _type == "gifBlock" => {
      ...,
      "uploadedUrl": gifFile.asset->url,
      "fileUrl": gifFile.asset->url
    },
    _type == "carousel" => {
      ...,
      items[]{
        ...,
        "image": coalesce(
          select(
            image.asset->extension == "gif" => image.asset->url,
            asset->extension == "gif" => asset->url,
            image.asset->url != null => image.asset->url + "?auto=format&fit=max&fm=webp",
            asset->url != null => asset->url + "?auto=format&fit=max&fm=webp"
          ),
          image.asset->url,
          asset->url,
          image.url,
          url
        ),
        "alt": coalesce(alt, image.alt, title, "Carousel slide"),
        "isGif": coalesce(
          image.asset->extension == "gif",
          asset->extension == "gif",
          false
        )
      }
    }
  }
}`;

// Query all post slugs for generateStaticParams
export const POST_SLUGS_QUERY = `*[_type == "post" && defined(slug.current)][].slug.current`;

// Query all categories
export const CATEGORIES_QUERY = `*[_type == "category"] | order(coalesce(order, 999) asc, title asc) {
  "id": _id,
  title,
  "slug": slug.current,
  description,
  order
}`;
