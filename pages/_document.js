/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { mono900 } from 'themes/colors';

class StoreenDoc extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <link rel="icon" type="image/png" href="/static/images/favicon.png" />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                body {
                  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont,
                    'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
                    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                  font-size: 14px;
                  margin: 0;
                  color: ${mono900};
                }

                *, :after, :before {
                  box-sizing: border-box;
                }
              `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default StoreenDoc;
