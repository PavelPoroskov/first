import React from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

import Caption from "../components/Caption";
import Downloads from "../components/Downloads";

export default class extends React.Component {
  static async getInitialProps() {
    const res = await axios.get(
      "https://api.npmjs.org/downloads/point/last-week/next"
    );
    return { nextNpmDownloads: res.data.downloads };
  }
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>About Page</title>
          <link rel="stylesheet" href="static/styles.css" />
        </Head>
        <Caption caption="test caption" />
        <div>
        {`Did you know Next has had ${
          this.props.nextNpmDownloads
        } on npm in the last week?`}
        </div>
        <Link href="/">
          <a>Home page</a>
        </Link>
      </React.Fragment>
    );
  }
}
