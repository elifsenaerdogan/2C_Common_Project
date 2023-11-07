import Base from '@others/interfaces/base-props';
import { navigationPaths } from '@others/constants/breadcrumb/navigations-paths';
import { usePathname } from 'next/navigation';
import { Breadcrumb } from 'antd';
import { Children } from '@others/typeDeclarations/children';
import NavText from '../footer/nav/nav-text';
import Seperator from './seperator/seperator';
import styles from './breadcrumb.module.scss';

interface BreadCrumbElement {
  key: string;
  title: Children;
}

interface PropTypes extends Base {}

const BreadCrumb = (props: PropTypes) => {
  const { className = '', ...breadcrumbProps } = props;
  const pathname = usePathname();
  const pathSnippets = pathname!.split('/').filter((i) => i);

  const extraBreadcrumbItems: BreadCrumbElement[] = pathSnippets.reduce<
    BreadCrumbElement[]
  >((extraCrumbs, _, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;

    if (!navigationPaths[url]) return extraCrumbs;

    const newCrumb = {
      key: url,
      title: <NavText link={url} text={navigationPaths[url]} />,
    };

    return [...extraCrumbs, newCrumb];
  }, []);

  const breadcrumbItems = [
    {
      title: <NavText link="/" text="Anasayfa" />,
      key: 'home',
    },
    ...extraBreadcrumbItems,
  ];

  if (breadcrumbItems.length === 1) return <></>;

  return (
    <Breadcrumb
      separator={<Seperator />}
      items={breadcrumbItems}
      className={`text-captions-regular ${styles.trkclAppBreadCrumbWrapper} ${className}`}
      {...breadcrumbProps}
    />
  );
};

export default BreadCrumb;
