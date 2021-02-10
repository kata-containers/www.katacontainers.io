import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

import metadata from "../content/site-metadata.json"


const SEO = () => {

  const { siteMetadata: {
    title,
    titleTemplate,
    description,
    url,
    image,
    twitterUsername,
    themeColor } } = metadata;

  return (
    <>
      <Helmet title={title} titleTemplate={titleTemplate}>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta name="theme-color" content={themeColor} />
        {url && <meta property="og:url" content={url} />}
        {title && <meta property="og:title" content={title} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {image && url && <meta property="og:image" content={`${url}${image}`} />}
        <meta name="twitter:card" content="summary" />
        {twitterUsername && (
          <meta name="twitter:creator" content={twitterUsername} />
        )}
        <meta name="twitter:site" content="@katacontainers" />
        {title && <meta name="twitter:title" content={title} />}
        {description && (
          <meta name="twitter:description" content={description} />
        )}
        {image && url && <meta name="twitter:image" content={`${url}${image}`} />}
      </Helmet>
    </>
  )
}

export default SEO
SEO.propTypes = {
  title: PropTypes.string,
  titleTemplate: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  twitterUsername: PropTypes.string,
  themeColor: PropTypes.string
}

SEO.defaultProps = {
  title: null,
  titleTemplate: null,
  description: null,
  url: null,
  image: null,
  twitterUsername: null,
  themeColor: null
}