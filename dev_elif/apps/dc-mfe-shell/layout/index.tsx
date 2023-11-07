import { Footer, Modal, AtomButton, HeaderStatusBar, Header } from '@dc-mfe-ui';
import { footerNavData } from '@others/dummy/footer-nav';
import { HeaderType } from '@others/enums/headerType';
import Head from 'next/head';

export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer navData={footerNavData} />
    </>
  );
}
