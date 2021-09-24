import Head from "next/head";
import Header from "../components/Header.js";
import CollectionsList from "../components/CollectionsList";

export default function Home() {
  return (
    <div className="bg-purple-200 min-h-screen md:min-w-full sm:min-w-full container mx-auto pt-24">
      <Head>
        <title>SeaSpot</title>
        <meta name="description" content="User Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <CollectionsList />
      <footer></footer>
    </div>
  );
}
