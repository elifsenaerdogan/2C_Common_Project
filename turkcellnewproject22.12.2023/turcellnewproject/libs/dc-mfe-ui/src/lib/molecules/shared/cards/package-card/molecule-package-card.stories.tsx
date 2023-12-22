import type { Meta } from '@storybook/react';
import { MoleculePackageCard } from './molecule-package-card';
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
  const packageListRealData = {
    product: [
      {
        packageId: 324060,
        price: '300',
        priceUnit: 'TL',
        priceTime: '4',
        priceTimeUnit: 'AY',
        packageName: 'Platinium 12 GB',
        packageDescription: 'Mutlu Mega 15 GB',
        value: 'simple',
        companies: [
          {
            companyId: '448',
            companyName: 'BIP',
          },
          {
            companyId: '1506',
            companyName: 'TV+',
          },
          {
            companyId: '532',
            companyName: 'ABROAD',
          },
        ],
        benefits: [
          {
            name: 'İNTERNET',
            value: '15',
            unitValue: 'GB',
            type: 'INTERNET',
            icon: 'internet',
          },
          {
            name: 'HER YÖNE',
            value: '6000',
            unitValue: 'Dk',
            type: 'VOICE',
            icon: 'telefon',
          },
        ],
        paymentTypes: ['A', 'C'],
        style:
          'background: #009ed8 radial-gradient(circle at -2.5rem 0,#00b3e3 40%,rgba(0,179,227,.75) 40%,rgba(0,179,227,.75) 60%,rgba(0,179,227,.5) 60%,rgba(0,179,227,.5) 85%,rgba(0,0,0,0) 85%);\n    color: #fff;',
        categoryName: 'ANA PAKETLER',
        productType: 'STANDART',
        offerId: 468996,
        aeOfferId: 0,
        offerName: null,
        campaignName: null,
      },
      {
        packageId: 324061,
        price: '400',
        priceUnit: 'TL',
        priceTime: '5',
        priceTimeUnit: 'AY',
        packageName: 'Platinium 13 GB',
        packageDescription: 'Mutlu Mega 15 GB',
        value: 'simple2',
        companies: [
          {
            companyId: '448',
            companyName: 'BIP',
          },
          {
            companyId: '1506',
            companyName: 'TV+',
          },
          {
            companyId: '532',
            companyName: 'ABROAD',
          },
        ],
        benefits: [
          {
            name: 'İNTERNET',
            value: '15',
            unitValue: 'GB',
            type: 'INTERNET',
            icon: 'internet',
          },
          {
            name: 'HER YÖNE',
            value: '6000',
            unitValue: 'Dk',
            type: 'VOICE',
            icon: 'telefon',
          },
        ],
        paymentTypes: ['A', 'C'],
        style:
          'background: #009ed8 radial-gradient(circle at -2.5rem 0,#00b3e3 40%,rgba(0,179,227,.75) 40%,rgba(0,179,227,.75) 60%,rgba(0,179,227,.5) 60%,rgba(0,179,227,.5) 85%,rgba(0,0,0,0) 85%);\n    color: #fff;',
        categoryName: 'ANA PAKETLER',
        productType: 'STANDART',
        offerId: 468996,
        aeOfferId: 0,
        offerName: null,
        campaignName: null,
      },
    ],
  };

  return (
    <MoleculePackageCard
      dataList={packageListRealData.product}
      onChange={onChangePackage}
      outClickStatus={clickStatusPackage}
      className={styles.storybookClasses}
    />
  );
};
