import "../Variables/fonts.scss";
import "./global.scss";
import "semantic-ui-css/semantic.min.css";

export default function App({
  Component,
  pageProps: { ...pageProps },
}) {
  return (
    <Component {...pageProps} />
  );
}
