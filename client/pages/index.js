import Categories from "@/components/Categories";
import Contact from "@/components/Contact";
import FeaturedProducts from "@/components/FeaturedProducts";
import Slider from "@/components/Slider";
import Head from "next/head";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>My Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Slider />
        <FeaturedProducts type="featured" data={data} />
        <Categories />
        <FeaturedProducts type="trending" data={data} />
        <Contact />
      </main>
    </>
  );
}
