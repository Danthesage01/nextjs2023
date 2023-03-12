import Head from "next/head";

export const Layout = (title, keywords, description, children) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        <meta
          name="keywords"
          content={keywords}
        />
      </Head>
      {children}
    </div>
  );
};

Layout.defaultProps = {
  title: "DJ watimagbo",
  description: "Hello one two DJ is here",
  keywords: "music, dj, edm",
};
