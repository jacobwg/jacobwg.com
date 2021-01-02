import React from 'react'

import Head from 'next/head'

export const SEO = ({description, title}) => {
  return (
    <Head>
      <title>{title === 'Jacob Gillespie' ? title : `${title} | Jacob Gillespie`}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="jacobwgillespie" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <link rel="apple-touch-icon" sizes="57x57" href="/favicon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/favicon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/favicon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/favicon-144x144.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#000000" />
    </Head>
  )
}
