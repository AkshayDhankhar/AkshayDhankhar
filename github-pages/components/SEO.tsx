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
    </Head>
  );
};

export default SEO;
