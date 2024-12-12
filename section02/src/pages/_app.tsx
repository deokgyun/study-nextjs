import "@/styles/globals.css";
import type {AppProps} from "next/app";
import GlobalLayout from "@/components/global-layout";

// 루트 컴포넌트이다. 모든 페이지에 공통으로 적용되는 컴포넌트이다.
// Component는 페이지 컴포넌트이다.
// pageProps는 페이지 컴포넌트에 전달되는 props이다. props는 페이지 컴포넌트의 getServerSideProps, getStaticProps 함수에서 반환된다.

// prefetch는 사전
export default function App({Component, pageProps}: AppProps) {

  return (
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
  )
}
