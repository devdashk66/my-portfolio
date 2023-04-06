import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Review from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/*/////////////////////////////////////
    /////////  Head Information  ////////////
    //////////////////////////////////////*/}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*/////////////////////////////////////
    /////////////  Main Body   //////////////
    //////////////////////////////////////*/}
      <div>
        <div>
          <Hero />

          <About />

          <Services />

          <Works />

          <Review />

          <Contact />

          <Footer />
        </div>
      </div>
    </>
  );
}
