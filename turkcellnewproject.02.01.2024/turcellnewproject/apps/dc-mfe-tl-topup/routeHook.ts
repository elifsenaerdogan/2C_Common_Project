import { useRouter } from 'next/router';

function useCustomRouter(props) {
  const router = useRouter();

  const pathParser = () => {
    const parsed = Object.keys(props.params).map((key) => {
      return `/[${key}]`;
    }).join('');

    return {
      pathname: parsed,
      route: parsed
    };
  };
  return router.pathname === '/[...slug]' ? { ...router, query: props.params, ...pathParser() } : router;
}

export default useCustomRouter;
