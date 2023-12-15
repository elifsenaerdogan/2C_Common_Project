import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';
import useCustomRouter from "./../../routeHook";

const Test = (props) => {


  const router = useRouter();
  const customRouter = useCustomRouter(props)
//  const { id } = router.query;
//console.log(id,router,'router',query)
console.log(props);

  console.log(customRouter,'customRouter')

  useEffect(()=>{

    const test = async () => {
      const res = await fetch('https://api.github.com/repos/vercel/next.js')
      const repo = await res.json()
      console.log(repo,'client')
    }

    test();
  },[]);
  return (
    <>
      asdasdtest2 se347 {/*props.params.id*/}

      <Link href="/a/5">asdasdas</Link>
      <button onClick={()=>{
        router.push('/test/login')
      }}>
       son 4 {props?.repo?.full_name} {props?.test}
      </button>
    </>
  );
};

Test.getInitialProps = async (props) => {
  return props;
};

Test.getServerSideProps = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()
  return { props: { repo ,test:"test"} }
}
export default Test;
