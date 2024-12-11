import "@/styles/globals.css";
import type {AppProps} from "next/app";
import Link from "next/link";
import {useRouter} from "next/router";

// 루트 컴포넌트이다. 모든 페이지에 공통으로 적용되는 컴포넌트이다.
// Component는 페이지 컴포넌트이다.
// pageProps는 페이지 컴포넌트에 전달되는 props이다. props는 페이지 컴포넌트의 getServerSideProps, getStaticProps 함수에서 반환된다.
export default function App({Component, pageProps}: AppProps) {

  const router = useRouter();

  const onClickButton = () => {
    router.push("/test");
  }


  return (
      <>
        <header>
          <Link href={"/"}>index</Link>
          &nbsp;
          <Link href={"/search"}>search</Link>
          &nbsp;
          <Link href={"/book/1"}>book/1</Link>
          <div>
            <button onClick={onClickButton}>/test 페이지로 이동</button>
          </div>
        </header>
        <Component {...pageProps} />
      </>
  )
}
