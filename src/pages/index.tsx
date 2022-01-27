import * as React from "react";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>gamolsky.net</title>
        <link rel="canonical" href="http://gamolsky.net" />
      </Helmet>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default IndexPage;
