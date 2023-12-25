import { PriceBoxContainer } from '@molecules';
import styles from './index.module.scss';
import classNames from 'classnames';
import useMobile from '@others/hooks/useMobile';
import React, { useEffect, useState } from 'react';
import { selectPackage } from './types/index-types';
import { AtomButton } from '@atoms';
import MoleculePackageCard from 'libs/dc-mfe-ui/src/lib/molecules/shared/cards/package-card/molecule-package-card';
import { RadioChangeEvent } from 'antd/lib';
import Tabs from '../../../../libs/dc-mfe-ui/src/lib/molecules/shared/tabs/molecule-tab';

import { HomePageEnums } from 'apps/dc-mfe-tl-topup/layout/types/index-enums';
import { SelectPackageEnums } from './types/index-enums';
import { PackageTabSettings } from './types/index-tabSettings';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentAmount } from 'apps/dc-mfe-tl-topup/store';

interface TabNames {
  categoryName: string;
  id: string;
}

const SelectPackage = () => {
  const currentType = useSelector((state) => state.tlTopupAppSlice.currentType);
  const dispatch = useDispatch();

  const [value, setValue] = useState('YAPI KREDİ KARTIM');
  const [value2, setValue2] = useState('Bakiye İle Öde');
  const [showAdditionalDivs, setShowAdditionalDivs] = useState(false);
  const [activeTab, setActiveTab] = useState({});
  const [tabsNames, setTabsNames] = useState<TabNames[]>();
  const [matchingProducts, setMatchingProducts] = useState([]);

  const isMobile = useMobile();
  const priceBoxContainerData = [
    { id: 1, price: 50, isActive: false },
    { id: 2, price: 60, isActive: false },
    { id: 3, price: 70, isActive: false },
    { id: 4, price: 80, isActive: false },
    { id: 5, price: 80, isActive: false },
    { id: 6, price: 10, isActive: false },
  ]; //tl deki yenilenmesi gereken datalar

  const handlePriceBox = (item: any) => {
    console.log(item);
    dispatch(setCurrentAmount(item.price)); //price boxlara click olunduğunda içindeki price değerini veren fn.
  };
  const onChangePackage = (e: RadioChangeEvent) => {
    console.log(e);
  };
  const clickStatusPackage = (item?: any) => {
    dispatch(setCurrentAmount(item.price)); // paketlerin fiyatını click olunca veren fn.
  };

  const packageListRealData = {
    activeCategoryTab: true,
    productWithCategory: [
      {
        categoryTabName: 'YURTDIŞI PAKETLERİ',
        product: [
          {
            packageId: 324060,
            price: '300',
            priceUnit: 'TL',
            priceTime: '4',
            priceTimeUnit: 'AY',
            packageName: 'Mutlu Mega Mgega 10 GB',
            packageDescription: 'Mutlu Mega 15 GB',
            value: value2,
            companies: [
              {
                companyId: '448',
                companyName: 'bip',
              },
              {
                companyId: '1506',
                companyName: 'TV+',
              },
              {
                companyId: '532',
                companyName: 'abroad',
              },
              {
                companyId: '532',
                companyName: 'lifebox',
              },
              {
                companyId: '532',
                companyName: 'fizy',
              },
              {
                companyId: '532',
                companyName: 'fizy',
              },
              // {
              //   companyId: '532',
              //   companyName: 'turkcell',
              // },
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
            packageName: 'Platinium 12 GB',
            packageDescription: 'Mutlu Mega 15 GB',
            value: value,
            companies: [
              {
                companyId: '448',
                companyName: 'bip',
              },
              {
                companyId: '1506',
                companyName: 'TV+',
              },
              {
                companyId: '532',
                companyName: 'abroad',
              },
              {
                companyId: '532',
                companyName: 'lifebox',
              },
              {
                companyId: '532',
                companyName: 'fizy',
              },
              {
                companyId: '532',
                companyName: 'fizy',
              },
              // {
              //   companyId: '532',
              //   companyName: 'turkcell',
              // },
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
            packageName: 'Mutlu Can Mega 12 GB',
            packageDescription: 'Mutlu Mega 15 GB',
            value: 'can',
            companies: [
              {
                companyId: '448',
                companyName: 'bip',
              },
              {
                companyId: '1506',
                companyName: 'TV+',
              },
              {
                companyId: '532',
                companyName: 'abroad',
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
              {
                name: 'HER YÖNE',
                value: '3000',
                unitValue: 'SMS',
                type: 'SMS',
                icon: 'sms',
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
            packageName: 'Mutlu Can Mega 12 GB',
            packageDescription: 'Mutlu Mega 15 GB',
            value: 'n',
            companies: [
              {
                companyId: '448',
                companyName: 'bip',
              },
              {
                companyId: '1506',
                companyName: 'TV+',
              },
              {
                companyId: '532',
                companyName: 'abroad',
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
              {
                name: 'HER YÖNE',
                value: '3000',
                unitValue: 'SMS',
                type: 'SMS',
                icon: 'sms',
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
      },
      {
        categoryTabName: 'YURTİÇİ PAKETLERİ',
        product: [
          {
            packageId: 324060,
            price: '300',
            priceUnit: 'TL',
            priceTime: '4',
            priceTimeUnit: 'AY',
            packageName: 'Mutsuz Mega 12 GB',
            packageDescription: 'Mutlu Mega 15 GB',
            value: value2,
            companies: [
              {
                companyId: '448',
                companyName: 'bip',
              },
              {
                companyId: '1506',
                companyName: 'TV+',
              },
              {
                companyId: '532',
                companyName: 'abroad',
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
              {
                name: 'HER YÖNE',
                value: '3000',
                unitValue: 'SMS',
                type: 'SMS',
                icon: 'sms',
              },
            ],
            paymentTypes: ['A', 'C'],
            style:
              'background:rgb(36, 75, 177) radial-gradient(circle at 40px 0, rgb(39, 53, 111) 40%, rgba(39, 53, 111, 0.75) 40%, rgba(39, 53, 111, 0.75) 60%, rgba(39, 53, 111, 0.5) 60%, rgba(39, 53, 111, 0.5) 85%, rgba(0, 0, 0, 0) 85%); color: #fff;',
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
            packageName: 'Mutlu Mega 12 GB',
            packageDescription: 'Mutlu Mega 15 GB',
            value: value,
            companies: [
              {
                companyId: '448',
                companyName: 'bip',
              },
              {
                companyId: '1506',
                companyName: 'TV+',
              },
              {
                companyId: '532',
                companyName: 'abroad',
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
              {
                name: 'HER YÖNE',
                value: '3000',
                unitValue: 'SMS',
                type: 'SMS',
                icon: 'sms',
              },
            ],
            paymentTypes: ['A', 'C'],
            style:
              'background:rgb(36, 75, 177) radial-gradient(circle at 40px 0, rgb(39, 53, 111) 40%, rgba(39, 53, 111, 0.75) 40%, rgba(39, 53, 111, 0.75) 60%, rgba(39, 53, 111, 0.5) 60%, rgba(39, 53, 111, 0.5) 85%, rgba(0, 0, 0, 0) 85%); color: #fff;',
            categoryName: 'ANA PAKETLER',
            productType: 'STANDART',
            offerId: 468996,
            aeOfferId: 0,
            offerName: null,
            campaignName: null,
          },
        ],
      },
      {
        categoryTabName: 'Ferhat paketleri',
        product: [
          {
            packageId: 324060,
            price: '300',
            priceUnit: 'TL',
            priceTime: '4',
            priceTimeUnit: 'AY',
            packageName: 'Mutsuz Mega 12 GB',
            packageDescription: 'Mutlu Mega 15 GB',
            value: value2,
            companies: [
              {
                companyId: '448',
                companyName: 'bip',
              },
              {
                companyId: '1506',
                companyName: 'TV+',
              },
              {
                companyId: '532',
                companyName: 'abroad',
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
              {
                name: 'HER YÖNE',
                value: '3000',
                unitValue: 'SMS',
                type: 'SMS',
                icon: 'sms',
              },
            ],
            paymentTypes: ['A', 'C'],
            style:
              'background:rgb(36, 75, 177) radial-gradient(circle at 40px 0, rgb(39, 53, 111) 40%, rgba(39, 53, 111, 0.75) 40%, rgba(39, 53, 111, 0.75) 60%, rgba(39, 53, 111, 0.5) 60%, rgba(39, 53, 111, 0.5) 85%, rgba(0, 0, 0, 0) 85%); color: #fff;',
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
            packageName: 'Mutlu Mega 12 GB',
            packageDescription: 'Mutlu Mega 15 GB',
            value: value,
            companies: [
              {
                companyId: '448',
                companyName: 'bip',
              },
              {
                companyId: '1506',
                companyName: 'TV+',
              },
              {
                companyId: '532',
                companyName: 'abroad',
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
              {
                name: 'HER YÖNE',
                value: '3000',
                unitValue: 'SMS',
                type: 'SMS',
                icon: 'sms',
              },
            ],
            paymentTypes: ['A', 'C'],
            style:
              'background:rgb(36, 75, 177) radial-gradient(circle at 40px 0, rgb(39, 53, 111) 40%, rgba(39, 53, 111, 0.75) 40%, rgba(39, 53, 111, 0.75) 60%, rgba(39, 53, 111, 0.5) 60%, rgba(39, 53, 111, 0.5) 85%, rgba(0, 0, 0, 0) 85%); color: #fff;',
            categoryName: 'ANA PAKETLER',
            productType: 'STANDART',
            offerId: 468996,
            aeOfferId: 0,
            offerName: null,
            campaignName: null,
          },
        ],
      },
      {
        categoryTabName: 'fb paketleri',
        product: [
          {
            packageId: 324060,
            price: '300',
            priceUnit: 'TL',
            priceTime: '4',
            priceTimeUnit: 'AY',
            packageName: 'Mutsuz Mega 12 GB',
            packageDescription: 'Mutlu Mega 15 GB',
            value: value2,
            companies: [
              {
                companyId: '448',
                companyName: 'bip',
              },
              {
                companyId: '1506',
                companyName: 'TV+',
              },
              {
                companyId: '532',
                companyName: 'abroad',
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
              {
                name: 'HER YÖNE',
                value: '3000',
                unitValue: 'SMS',
                type: 'SMS',
                icon: 'sms',
              },
            ],
            paymentTypes: ['A', 'C'],
            style:
              'background:rgb(36, 75, 177) radial-gradient(circle at 40px 0, rgb(39, 53, 111) 40%, rgba(39, 53, 111, 0.75) 40%, rgba(39, 53, 111, 0.75) 60%, rgba(39, 53, 111, 0.5) 60%, rgba(39, 53, 111, 0.5) 85%, rgba(0, 0, 0, 0) 85%); color: #fff;',
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
            packageName: 'Mutlu Mega 12 GB',
            packageDescription: 'Mutlu Mega 15 GB',
            value: value,
            companies: [
              {
                companyId: '448',
                companyName: 'bip',
              },
              {
                companyId: '1506',
                companyName: 'TV+',
              },
              {
                companyId: '532',
                companyName: 'abroad',
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
              {
                name: 'HER YÖNE',
                value: '3000',
                unitValue: 'SMS',
                type: 'SMS',
                icon: 'sms',
              },
            ],
            paymentTypes: ['A', 'C'],
            style:
              'background:rgb(36, 75, 177) radial-gradient(circle at 40px 0, rgb(39, 53, 111) 40%, rgba(39, 53, 111, 0.75) 40%, rgba(39, 53, 111, 0.75) 60%, rgba(39, 53, 111, 0.5) 60%, rgba(39, 53, 111, 0.5) 85%, rgba(0, 0, 0, 0) 85%); color: #fff;',
            categoryName: 'ANA PAKETLER',
            productType: 'STANDART',
            offerId: 468996,
            aeOfferId: 0,
            offerName: null,
            campaignName: null,
          },
        ],
      },
      {
        categoryTabName: 'fb paketleri',
        product: [
          {
            packageId: 324060,
            price: '300',
            priceUnit: 'TL',
            priceTime: '4',
            priceTimeUnit: 'AY',
            packageName: 'Mutsuz Mega 12 GB',
            packageDescription: 'Mutlu Mega 15 GB',
            value: value2,
            companies: [
              {
                companyId: '448',
                companyName: 'bip',
              },
              {
                companyId: '1506',
                companyName: 'TV+',
              },
              {
                companyId: '532',
                companyName: 'abroad',
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
              {
                name: 'HER YÖNE',
                value: '3000',
                unitValue: 'SMS',
                type: 'SMS',
                icon: 'sms',
              },
            ],
            paymentTypes: ['A', 'C'],
            style:
              'background:rgb(36, 75, 177) radial-gradient(circle at 40px 0, rgb(39, 53, 111) 40%, rgba(39, 53, 111, 0.75) 40%, rgba(39, 53, 111, 0.75) 60%, rgba(39, 53, 111, 0.5) 60%, rgba(39, 53, 111, 0.5) 85%, rgba(0, 0, 0, 0) 85%); color: #fff;',
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
            packageName: 'Mutlu Mega 12 GB',
            packageDescription: 'Mutlu Mega 15 GB',
            value: value,
            companies: [
              {
                companyId: '448',
                companyName: 'bip',
              },
              {
                companyId: '1506',
                companyName: 'TV+',
              },
              {
                companyId: '532',
                companyName: 'abroad',
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
              {
                name: 'HER YÖNE',
                value: '3000',
                unitValue: 'SMS',
                type: 'SMS',
                icon: 'sms',
              },
            ],
            paymentTypes: ['A', 'C'],
            style:
              'background:rgb(36, 75, 177) radial-gradient(circle at 40px 0, rgb(39, 53, 111) 40%, rgba(39, 53, 111, 0.75) 40%, rgba(39, 53, 111, 0.75) 60%, rgba(39, 53, 111, 0.5) 60%, rgba(39, 53, 111, 0.5) 85%, rgba(0, 0, 0, 0) 85%); color: #fff;',
            categoryName: 'ANA PAKETLER',
            productType: 'STANDART',
            offerId: 468996,
            aeOfferId: 0,
            offerName: null,
            campaignName: null,
          },
        ],
      },
      {
        categoryTabName: 'fb paketleri',
        product: [
          {
            packageId: 324060,
            price: '300',
            priceUnit: 'TL',
            priceTime: '4',
            priceTimeUnit: 'AY',
            packageName: 'Mutsuz Mega 12 GB',
            packageDescription: 'Mutlu Mega 15 GB',
            value: value2,
            companies: [
              {
                companyId: '448',
                companyName: 'bip',
              },
              {
                companyId: '1506',
                companyName: 'TV+',
              },
              {
                companyId: '532',
                companyName: 'abroad',
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
              {
                name: 'HER YÖNE',
                value: '3000',
                unitValue: 'SMS',
                type: 'SMS',
                icon: 'sms',
              },
            ],
            paymentTypes: ['A', 'C'],
            style:
              'background:rgb(36, 75, 177) radial-gradient(circle at 40px 0, rgb(39, 53, 111) 40%, rgba(39, 53, 111, 0.75) 40%, rgba(39, 53, 111, 0.75) 60%, rgba(39, 53, 111, 0.5) 60%, rgba(39, 53, 111, 0.5) 85%, rgba(0, 0, 0, 0) 85%); color: #fff;',
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
            packageName: 'Mutlu Mega 12 GB',
            packageDescription: 'Mutlu Mega 15 GB',
            value: value,
            companies: [
              {
                companyId: '448',
                companyName: 'bip',
              },
              {
                companyId: '1506',
                companyName: 'TV+',
              },
              {
                companyId: '532',
                companyName: 'abroad',
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
              {
                name: 'HER YÖNE',
                value: '3000',
                unitValue: 'SMS',
                type: 'SMS',
                icon: 'sms',
              },
            ],
            paymentTypes: ['A', 'C'],
            style:
              'background:rgb(36, 75, 177) radial-gradient(circle at 40px 0, rgb(39, 53, 111) 40%, rgba(39, 53, 111, 0.75) 40%, rgba(39, 53, 111, 0.75) 60%, rgba(39, 53, 111, 0.5) 60%, rgba(39, 53, 111, 0.5) 85%, rgba(0, 0, 0, 0) 85%); color: #fff;',
            categoryName: 'ANA PAKETLER',
            productType: 'STANDART',
            offerId: 468996,
            aeOfferId: 0,
            offerName: null,
            campaignName: null,
          },
        ],
      },
      {
        categoryTabName: 'fb paketleri',
        product: [
          {
            packageId: 324060,
            price: '300',
            priceUnit: 'TL',
            priceTime: '4',
            priceTimeUnit: 'AY',
            packageName: 'Mutsuz Mega 12 GB',
            packageDescription: 'Mutlu Mega 15 GB',
            value: value2,
            companies: [
              {
                companyId: '448',
                companyName: 'bip',
              },
              {
                companyId: '1506',
                companyName: 'TV+',
              },
              {
                companyId: '532',
                companyName: 'abroad',
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
              {
                name: 'HER YÖNE',
                value: '3000',
                unitValue: 'SMS',
                type: 'SMS',
                icon: 'sms',
              },
            ],
            paymentTypes: ['A', 'C'],
            style:
              'background:rgb(36, 75, 177) radial-gradient(circle at 40px 0, rgb(39, 53, 111) 40%, rgba(39, 53, 111, 0.75) 40%, rgba(39, 53, 111, 0.75) 60%, rgba(39, 53, 111, 0.5) 60%, rgba(39, 53, 111, 0.5) 85%, rgba(0, 0, 0, 0) 85%); color: #fff;',
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
            packageName: 'Mutlu Mega 12 GB',
            packageDescription: 'Mutlu Mega 15 GB',
            value: value,
            companies: [
              {
                companyId: '448',
                companyName: 'bip',
              },
              {
                companyId: '1506',
                companyName: 'TV+',
              },
              {
                companyId: '532',
                companyName: 'abroad',
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
              {
                name: 'HER YÖNE',
                value: '3000',
                unitValue: 'SMS',
                type: 'SMS',
                icon: 'sms',
              },
            ],
            paymentTypes: ['A', 'C'],
            style:
              'background:rgb(36, 75, 177) radial-gradient(circle at 40px 0, rgb(39, 53, 111) 40%, rgba(39, 53, 111, 0.75) 40%, rgba(39, 53, 111, 0.75) 60%, rgba(39, 53, 111, 0.5) 60%, rgba(39, 53, 111, 0.5) 85%, rgba(0, 0, 0, 0) 85%); color: #fff;',
            categoryName: 'ANA PAKETLER',
            productType: 'STANDART',
            offerId: 468996,
            aeOfferId: 0,
            offerName: null,
            campaignName: null,
          },
        ],
      },
      {
        categoryTabName: 'fb paketleri',
        product: [
          {
            packageId: 324060,
            price: '300',
            priceUnit: 'TL',
            priceTime: '4',
            priceTimeUnit: 'AY',
            packageName: 'Mutsuz Mega 12 GB',
            packageDescription: 'Mutlu Mega 15 GB',
            value: value2,
            companies: [
              {
                companyId: '448',
                companyName: 'bip',
              },
              {
                companyId: '1506',
                companyName: 'TV+',
              },
              {
                companyId: '532',
                companyName: 'abroad',
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
              {
                name: 'HER YÖNE',
                value: '3000',
                unitValue: 'SMS',
                type: 'SMS',
                icon: 'sms',
              },
            ],
            paymentTypes: ['A', 'C'],
            style:
              'background:rgb(36, 75, 177) radial-gradient(circle at 40px 0, rgb(39, 53, 111) 40%, rgba(39, 53, 111, 0.75) 40%, rgba(39, 53, 111, 0.75) 60%, rgba(39, 53, 111, 0.5) 60%, rgba(39, 53, 111, 0.5) 85%, rgba(0, 0, 0, 0) 85%); color: #fff;',
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
            packageName: 'Mutlu Mega 12 GB',
            packageDescription: 'Mutlu Mega 15 GB',
            value: value,
            companies: [
              {
                companyId: '448',
                companyName: 'bip',
              },
              {
                companyId: '1506',
                companyName: 'TV+',
              },
              {
                companyId: '532',
                companyName: 'abroad',
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
              {
                name: 'HER YÖNE',
                value: '3000',
                unitValue: 'SMS',
                type: 'SMS',
                icon: 'sms',
              },
            ],
            paymentTypes: ['A', 'C'],
            style:
              'background:rgb(36, 75, 177) radial-gradient(circle at 40px 0, rgb(39, 53, 111) 40%, rgba(39, 53, 111, 0.75) 40%, rgba(39, 53, 111, 0.75) 60%, rgba(39, 53, 111, 0.5) 60%, rgba(39, 53, 111, 0.5) 85%, rgba(0, 0, 0, 0) 85%); color: #fff;',
            categoryName: 'ANA PAKETLER',
            productType: 'STANDART',
            offerId: 468996,
            aeOfferId: 0,
            offerName: null,
            campaignName: null,
          },
        ],
      },
    ],
  }; //package card data

  function assignCategoryIds(data) {
    const categories = data.productWithCategory;
    const result = [];
    for (let i = 0; i < categories?.length; i++) {
      const categoryName = categories[i]?.categoryTabName;
      result.push({ categoryName, id: String(i + 1) }); //paket dataları içinden gelen tabların dinamik olarak oluşturulması.
    }
    return result;
  }
  useEffect(() => {
    const filterTabs = assignCategoryIds(packageListRealData);

    setTabsNames(filterTabs);
    console.log('ft', filterTabs);

    setActiveTab({
      id: '1',
      categoryName: assignCategoryIds(packageListRealData)[0]?.categoryName, //default tab seçimi
    });
  }, []);

  useEffect(() => {}, [tabsNames]);

  useEffect(() => {
    if (activeTab) {
      const foundProducts = packageListRealData.productWithCategory.find(
        (category) => category.categoryTabName === activeTab.categoryName //paketlerin tablara göre filtrelenmesi
      );

      if (foundProducts) {
        setMatchingProducts(foundProducts.product); //bulunan filtrelerin derlenmesi
      } else {
        setMatchingProducts([]);
      }
    }
  }, [activeTab]);

  //classes
  const packageCardContainerClasses = classNames(
    styles['selectPackage__packageCards--container']
  );
  const packageCardContentClasses = classNames(
    styles['selectPackage__packageCards']
  );
  const packageCardWrapperClasses = classNames(
    styles['selectPackage__packageCards--wrapper']
  );
  const dummyTabsContentData = [
    //tabların içinde basılacak package cardlar. dinamikleştirmek için vakit yetmedi dün. bi logic bu kaldı bu tarafta. maplanmasi gerek.
    <div key={1} className={packageCardContainerClasses}>
      <MoleculePackageCard
        packageListRealData={
          showAdditionalDivs === false
            ? matchingProducts.slice(0, 3)
            : matchingProducts
        }
        onChange={onChangePackage}
        outClickStatus={clickStatusPackage}
        className={packageCardContentClasses}
        wrapperClassName={packageCardWrapperClasses}
      />
    </div>,
    <div key={2} className={packageCardContainerClasses}>
      <MoleculePackageCard
        packageListRealData={
          showAdditionalDivs === false
            ? matchingProducts.slice(0, 3)
            : matchingProducts
        }
        onChange={onChangePackage}
        outClickStatus={clickStatusPackage}
        className={packageCardContentClasses}
        wrapperClassName={packageCardWrapperClasses}
      />
    </div>,
    <div key={3} className={packageCardContainerClasses}>
      <MoleculePackageCard
        packageListRealData={
          showAdditionalDivs === false
            ? matchingProducts.slice(0, 3)
            : matchingProducts
        }
        onChange={onChangePackage}
        outClickStatus={clickStatusPackage}
        className={packageCardContentClasses}
        wrapperClassName={packageCardWrapperClasses}
      />
    </div>,
    <div key={4} className={packageCardContainerClasses}>
      <MoleculePackageCard
        packageListRealData={
          showAdditionalDivs === false
            ? matchingProducts.slice(0, 3)
            : matchingProducts
        }
        onChange={onChangePackage}
        outClickStatus={clickStatusPackage}
        className={packageCardContentClasses}
        wrapperClassName={packageCardWrapperClasses}
      />
    </div>,
  ];
  const selectPackageClasses = classNames(styles['selectPackage']);
  const selectPackageTlContainerClasses = classNames(
    styles['selectPackage__tlContainer']
  );
  const selectPackageTlPriceBoxContentClasses = classNames(
    styles['selectPackage__tlContainer--tlPriceBoxContent']
  );
  const selectPackageTlPriceBox = isMobile
    ? classNames(styles['selectPackage__tlContainer--tlPriceBox-priceBox'])
    : '';

  const selectPackageTabsClasses = classNames(styles['selectPackage__tabs']);
  const selectPackageTabsButtonClasses = classNames(
    styles['selectPackage__tabs--button']
  );

  console.log('tn', tabsNames);

  return (
    <div className={selectPackageClasses}>
      {currentType == HomePageEnums.TL ? (
        <div className={selectPackageTlContainerClasses}>
          <div className={selectPackageTlPriceBoxContentClasses}>
            <PriceBoxContainer
              data={priceBoxContainerData}
              title={selectPackage.PICK_AMOUNT}
              onClick={handlePriceBox}
              wrapperClassName={selectPackageTlPriceBox}
            />
          </div>
        </div>
      ) : (
        <div className={selectPackageTabsClasses}>
          <Tabs
            tabsSettings={{
              ...PackageTabSettings,
              slidesToShow: isMobile
                ? tabsNames?.length > 3 //desktopda ve mobilde tabların kaç tane gösterileceği.
                  ? 3
                  : tabsNames?.length
                : tabsNames?.length > 6
                ? 6
                : tabsNames?.length,
            }}
            tabItems={tabsNames}
            tabsContents={dummyTabsContentData}
            defaultActiveTab={SelectPackageEnums.TabDefaultActiveElement}
            getActiveTab={(e) => setActiveTab(e)}
          />

          <AtomButton
            text={
              showAdditionalDivs
                ? SelectPackageEnums.TabButtonHideText
                : SelectPackageEnums.TabButtonShowText
            }
            variant="default"
            className={selectPackageTabsButtonClasses}
            onClick={() => setShowAdditionalDivs(!showAdditionalDivs)}
          />
        </div>
      )}
    </div>
  );
};

export default SelectPackage;
