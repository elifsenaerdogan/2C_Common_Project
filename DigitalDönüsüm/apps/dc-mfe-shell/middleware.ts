import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getRestrictedPages, getUserSession, setRestrictedPages } from './restrictedPages';

async function fetchRestrictedPage() {
  return ['/authorized'];
}

const checkUrl = (pathname: string, pages: Array<string>) => {
  return pages.includes(pathname);
};

export async function middleware(request: NextRequest) {
  let restrictedPages = getRestrictedPages();

  const session = getUserSession();
  //const isUserExist = useUser();
  const { pathname } = request.nextUrl;

  if (!restrictedPages) {
    restrictedPages = await fetchRestrictedPage();
    setRestrictedPages(restrictedPages);
  } else {
    if (checkUrl(pathname, restrictedPages)) {
      if (!session.isLoggedIn) {
        return NextResponse.redirect(new URL('/login', request.url));
      }

      const response = NextResponse.next();
      response.cookies.set('session', JSON.stringify(session));

      return response;
    }
  }

  return NextResponse.next();
}
