import "@/styles/globals.css";
import Header from "@/components/Herader";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
