import { AppProps } from "next/app";
import "../index.css";
import "../App.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { trpc } from "../utils/trpc";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="pagesBackground">
      <Header />
      <div className="pages">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default trpc.withTRPC(CustomApp);
