import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
export const SEO = ({
  title,
  description,
  image,
}: {
  title?: string;
  description?: string;
  image?: string;
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    image: defaultImage,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle || "",
    description: description || defaultDescription || "",
    image: `${siteUrl}${image || defaultImage}`,
    url: siteUrl || "",
  };

  console.log(siteUrl, defaultImage);

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
    </>
  );
};
