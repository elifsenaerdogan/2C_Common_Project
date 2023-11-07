import Link from 'next/link';

function Page404(props) {
  return <div><Link href="/a/5">asdasdas</Link></div>
}
/*
Page404.getServerSideProps = async (props) => {
  return {props:{}}
}
 */
export default Page404;
