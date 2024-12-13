import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalLayout from '@/components/global-layout'
import { ReactNode } from 'react'
import { NextPage } from 'next'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode
}

// 루트 컴포넌트이다. 모든 페이지에 공통으로 적용되는 컴포넌트이다.
// Component는 페이지 컴포넌트이다.
// pageProps는 페이지 컴포넌트에 전달되는 props이다. props는 페이지 컴포넌트의 getServerSideProps, getStaticProps 함수에서 반환된다.

// prefetch는 사전 렌더링
export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) {
  // getLayout 함수가 존재하면 getLayout 함수를 호출하고, 그렇지 않으면 페이지 컴포넌트를 그대로 반환한다.
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page)

  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
}
