import Head from "next/head";
import profile from "../data/profile";

const SEO = () => {
  const { header } = profile;
  const title = `${header.name} - ${header.title}`;
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta
        property="og:description"
        content={header.description}
        key="description"
      />
      <style>{`
        body {
          background: rgb(242, 245, 250) !important;
        }
      `}</style>
    </Head>
  );
};

export default SEO;
