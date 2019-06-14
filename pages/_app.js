import React from "react";
import App, { Container } from "next/app";

class Intermediate extends React.Component {
  componentWillUnmount() {
    console.log("unmounting Intermediate!");
  }

  render() {
    console.log("rendering Intermediate.");
    return this.props.children;
  }
}

export default class TestApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentWillUnmount() {
    console.log("unmounting TestApp!");
  }

  render() {
    console.log("rendering App.");
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Intermediate>
          <Component {...pageProps} />
        </Intermediate>
      </Container>
    );
  }
}
