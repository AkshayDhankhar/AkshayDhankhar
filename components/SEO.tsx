import { NextSeo } from "next-seo";
import Head from "next/head";
import profile from "../data/profile";

export const getMeta = () => {
  const { header } = profile;
  const title = `${header.name} - ${header.title}`;
  return { title, description: header.description, keywords: header.keywords };
};

const SEO = () => {
  const meta = getMeta();
  return (
    <Head>
      <style>{`
        body {
          background: rgb(242, 245, 250) !important;
        }
      `}</style>
      <NextSeo {...meta} />
    </Head>
  );
};

export default SEO;
