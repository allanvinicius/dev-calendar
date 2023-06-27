import Head from "next/head";

interface TitleProps {
  title: string;
  description: string;
}

export function Seo({ title, description }: TitleProps) {
  return (
    <Head key={title}>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="/share-img.png" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/share-img.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="/share-img.png"></meta>
    </Head>
  );
}
