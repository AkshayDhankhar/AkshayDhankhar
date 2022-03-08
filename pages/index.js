import Header from "../components/Header";
import Details from "../components/Details";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import SEO from "./../components/SEO";

export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      <Details />
      <Skills />
      <Experience />
    </>
  );
}
