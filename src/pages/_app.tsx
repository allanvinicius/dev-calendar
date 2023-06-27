import { GlobalStyle } from "@/styles/global";
import type { AppProps } from "next/app";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600"],
  variable: "--inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500"],
  variable: "--roboto",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${roboto.variable}`}>
      <GlobalStyle />
      <Component {...pageProps} />
    </main>
  );
}
