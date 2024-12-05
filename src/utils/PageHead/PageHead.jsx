import Head from "next/head";

export const PageHead = ({ data }) => {
  const pageTitle = data?.pageTitle;
  const metaTitle = data?.metaTitle;
  const metaDescription = data?.metaDescription;
  const metaImage = data?.openGraphImage;
  const metaKeywords = data?.keywords;

  return (
    <Head>
      {/* Basic Meta Tags */}
      {metaTitle && <title>{pageTitle}</title>}
      {metaDescription && <meta name="description" content={metaDescription} />}
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}

      {/* Open Graph Meta Tags */}
      {metaTitle && <meta property="og:title" content={metaTitle} />}
      {metaDescription && (
        <meta property="og:description" content={metaDescription} />
      )}
      {metaImage && <meta property="og:image" content={metaImage} />}
      <meta property="og:locale" content={data?.locale || "en"} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {metaTitle && <meta name="twitter:title" content={metaTitle} />}
      {metaDescription && (
        <meta name="twitter:description" content={metaDescription} />
      )}
      {metaImage && <meta name="twitter:image" content={metaImage} />}
      {data?.twitterUsername && (
        <meta name="twitter:creator" content={data.twitterUsername} />
      )}

      {/* Image Meta Tags */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {metaTitle && <meta property="og:image:alt" content={metaTitle} />}

      {/* Viewport */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />

      {/* Character Set */}
      <meta charSet="utf-8" />

      {/* X-UA-Compatible */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* #region */}
      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href="/favicon/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href="/favicon/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href="/favicon/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="/favicon/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="60x60"
        href="/favicon/apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href="/favicon/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href="/favicon/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="/favicon/apple-touch-icon-152x152.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-196x196.png"
        sizes="196x196"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-128.png"
        sizes="128x128"
      />
      <meta name="application-name" content="&nbsp;" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/mstile-144x144.png"
      />
      <meta
        name="msapplication-square70x70logo"
        content="/favicon/mstile-70x70.png"
      />
      <meta
        name="msapplication-square150x150logo"
        content="mstile-150x150.png"
      />
      <meta
        name="msapplication-wide310x150logo"
        content="/favicon/mstile-310x150.png"
      />
      <meta
        name="msapplication-square310x310logo"
        content="mstile-310x310.png"
      />
      {/* #endregion */}
    </Head>
  );
};

