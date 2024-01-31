import "../Variables/fonts.scss";
import "./global.scss";

export default function App({
  Component,
  pageProps: { ...pageProps },
}) {
  return (
    <Component {...pageProps} />
  );
}
