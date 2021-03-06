import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

export default function WorkPrinciples() {
  return (
    <Layout>
      <Head>
        <title>How I work</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
