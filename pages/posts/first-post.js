import Head from "next/head";
import Link from "next/link";
import Script from 'next/script';
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
                <script src="https://connect.facebook.net/en_US/sdk.js" />
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => console.log(`Script loaded correctly, windos.FB has been successfully updated`)} />
            <h1> First Post </h1>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>

        </Layout>
    )
}