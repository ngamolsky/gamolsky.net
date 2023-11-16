import { graphql, useStaticQuery } from "gatsby";
import { useLocation } from "@reach/router";

import React from "react";
import { Helmet } from "react-helmet";
import { getImage } from "gatsby-plugin-image";

const query = graphql`query SEO {
  site {
    siteMetadata {
      defaultTitle: title
      titleTemplate
      defaultDescription: description
      siteUrl: url
    }
  }
  file(relativePath: {eq: "profilePic.jpeg"}) {
    childImageSharp {
      gatsbyImageData(layout: FIXED)
    }
  }
}`;

const SEO = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  const { site, file } = useStaticQuery(query);
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    twitterUsername,
    siteUrl,
  } = site.siteMetadata;

  const location = useLocation();
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${location.pathname}`,
  };


  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && (
        <meta property="og:title" content={`Nikita Gamolsky | ${seo.title}`} />
      )}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      <meta property="og:image" content={file.childImageSharp.gatsbyImageData.src} />
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
    </Helmet>
  );
};

export default SEO;
