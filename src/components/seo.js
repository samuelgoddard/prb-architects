import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const SEO = ({ pathname, titleOverride, descriptionOverride, pathnameOverride, imageOverride, noIndex }) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
    datoCmsSite: {
      globalSeo: { 
        siteName,
        titleSuffix,
        twitterAccount,
        fallbackSeo: {
          title,
          description,
          image: {
            url
          }
        }
      }
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
        }
      }
      datoCmsSite {
        globalSeo {
          siteName
          titleSuffix
          twitterAccount
          fallbackSeo {
            title
            description
            twitterCard
            image {
              url
            }
          }
        }
      }
    }
  `)  
  return (
    <Helmet defer={false} titleTemplate={`%s${titleSuffix}`}>
      <html lang="en" />
      <link rel="canonical" href={`${siteUrl}${pathnameOverride ? pathnameOverride : pathname}`}/>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <title>{titleOverride ? titleOverride : title }</title>
      <meta name="description" content={descriptionOverride ? descriptionOverride : description} />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={`${imageOverride ? imageOverride : url}`} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitterAccount} />
      
      {/* Gross polyfills for Loco */}
      <script crossorigin="anonymous" src="//polyfill.io/v3/polyfill.min.js?features=Array.prototype.forEach%2CNodeList.prototype.forEach%2CArray.from%2CString.prototype.startsWith%2CObject.assign%2CArray.prototype.entries%2CObject.entries%2CObject.fromEntries%2CDocumentFragment.prototype.append%2CElement.prototype.append%2CPromise%2CPromise.prototype.finally%2CArray.prototype.includes%2Ces6%2CEvent%2CElement.prototype.matches%2Cfetch%2CElement.prototype.remove"></script>



      { noIndex && (
        <meta name="robots" content="noindex" />
      )}
      
    </Helmet>
  )
}

export default SEO