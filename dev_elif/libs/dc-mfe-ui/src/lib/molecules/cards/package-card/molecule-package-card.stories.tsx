import type { Meta } from '@storybook/react';
import { MoleculePackageCard } from './molecule-package-card';
import { IconsCellular, IconsTelephone } from '@others/icons';
import Bip from '@others/assets/images/bip.png';
import Fizy from '@others/assets/images/fizy.png';
import Abroad from '@others/assets/images/abroad.png';
import LifeBox from '@others/assets/images/lifebox.png';
import Tv from '@others/assets/images/tv.png';
import { PackageDetails } from './enums/package-card-enums';
import { RadioChangeEvent } from 'antd';
import styles from './molecule-package-card.module.scss';

const Story: Meta<typeof MoleculePackageCard> = {
  component: MoleculePackageCard,
  title: 'Molecules/PackageCard',
};
export default Story;

export const PackageDesktop = () => {
  const onChangePackage = (e: RadioChangeEvent) => {
    console.log(e);
  };
  const clickStatusPackage = (item: any) => {
    console.log(item);
  };
  const packageData = [
    {
      id: 1,
      title: 'Turbo 6 GB',
      price: 199,
      value: 'Turbo',
      packageProduct: [
        {
          icon: <IconsCellular />,
          packageTotal: 6,
          packageType: 'İnternet',
          packageDetail: 'GB',
        },
        {
          icon: <IconsTelephone />,
          packageTotal: 1500,
          packageType: 'Her Yöne',
          packageDetail: 'DK',
        },
      ],
      advantages: [
        {
          icon: Bip,
        },
        {
          icon: Fizy,
        },
        {
          icon: Abroad,
        },
        {
          icon: LifeBox,
        },
        {
          icon: Tv,
        },
      ],
    },
    {
      id: 1,
      title: 'Turbo 6 GB',
      price: 199,
      value: 'Turbo 2',
      packageProduct: [
        {
          icon: <IconsCellular />,
          packageTotal: 6,
          packageType: 'İnternet',
          packageDetail: 'GB',
        },
        {
          icon: <IconsTelephone />,
          packageTotal: 1500,
          packageType: 'Her Yöne',
          packageDetail: 'DK',
        },
      ],
      advantages: [
        {
          icon: Bip,
        },
        {
          icon: Fizy,
        },
        {
          icon: Abroad,
        },
        {
          icon: LifeBox,
        },
        {
          icon: Tv,
        },
      ],
    },
  ];

  return (
    <MoleculePackageCard
      headerVariant={PackageDetails.PERSONAL_PACKAGE}
      packageList={packageData}
      onChange={onChangePackage}
      outClickStatus={clickStatusPackage}
      className={styles.storybookClasses}
    />
  );
};
