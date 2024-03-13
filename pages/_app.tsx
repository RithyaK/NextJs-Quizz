import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { InfoContextProvider } from "@/components/InfoContext";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <InfoContextProvider>
      <Component {...pageProps} />
    </InfoContextProvider>
  );
}
