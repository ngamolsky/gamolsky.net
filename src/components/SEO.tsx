import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
export const SEO = ({
  title,
  description,
  image,
  path,
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
  } = useSiteMetadata();

  const url = path ? `${siteUrl}/${path}` : siteUrl;

  const seo = {
    title: title || defaultTitle || "",
    description: description || defaultDescription || "",
    image: `${siteUrl}/${image || defaultImage}`,
    url: url || "",
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
    </>
  );
};
