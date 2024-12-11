import {useRouter} from 'next/router';

// 동적 라우팅을 사용하는 페이지 컴포넌트이다.
// [id]는 동적 라우팅을 위한 파일명이다.
// Catch All Segment [...id]는 동적 라우팅을 위한 파일명이다. 여러 개의 쿼리스트링을 처리할 수 있다.
// Optional Catch All Segment [[...id]]는 동적 라우팅을 위한 파일명이다. 대괄호 2개로 감싼다면 쿼리스트링이 없어도 페이지가 출력된다.

export default function Page(){

  const router = useRouter();

  const {id} = router.query;

  return <h1>Book id = {id}</h1>
}