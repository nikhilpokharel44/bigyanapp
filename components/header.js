/** @format */

import Head from "next/head";

export default function Header({ pageTitle, pageDescription, pageBanner }) {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name='title' content={pageTitle} />
        <meta name='description' content={pageDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://metatags.io/' />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={pageDescription} />
        <meta property='og:image' content={pageBanner} />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://metatags.io/' />
        <meta property='twitter:title' content={pageTitle} />
        <meta property='twitter:description' content={pageDescription} />

        <meta property='twitter:image' content={pageBanner} />

        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
}
