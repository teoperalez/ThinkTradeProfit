import Head from "next/head";

const MainMeta = ({ title, description, tags }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name={description} content={tags} />
            <link rel="icon" href="/TTP-Logo-1.ico" />
        </Head>
    )
}

export default MainMeta