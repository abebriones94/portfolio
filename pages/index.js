import Projects from "../components/Projects";
import Head from "next/head";
import About from "../components/About";
import Main from "../components/Main";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abe | Front-End Developer</title>
        <meta
          name="description"
          content="Im a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
