import type { Meta } from '@storybook/react';
import { TransactionSummary } from './transaction-summary';

const Story: Meta<typeof TransactionSummary> = {
  component: TransactionSummary,
  title: 'Molecules/TransactionSummary',
};
export default Story;

export const Primary = () => {
  return (
    <TransactionSummary
      handleContractTypes={(index) => console.log('first', index)}
      onClick={() => console.log('first')}
      contractText={{
        preliminaryInformation:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat tortor, faucibus et leo ut, accumsan scelerisque augue. Vestibulum volutpat rhoncus faucibus',
        distanceSelling:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat tortor, faucibus et leo ut, accumsan scel',
        inform:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat tortor, faucibus et leo ut, accumsan sceleris',
      }}
      contracts={[
        {
          contractTypes: 'Mesafeli Satış Sözleşmesini, ',
        },
        {
          contractTypes: 'Ön Bilgilendirme Sözleşmesini, ',
        },
        {
          contractTypes: 'Bilgilendirme Formunu',
        },
      ]}
      contractContent={[
        {
          text: 'Yıldız 6 Paketine geçmeniz durumunda kullanımlarınız son faturalandırma tarihinden itibaren yeni paketinizden hesaplanacaktır. Güncel fatura bilginiz en geç 3 gün içerisinde yansıyacaktır.',
        },
        {
          text: 'Yıldız 6 Paketine geçmeniz durumunda kullanımlarınız son faturalandırma tarihinden itibaren yeni paketinizden hesaplanacaktır. Güncel fatura bilginiz en geç 3 gün içerisinde yansıyacaktır.',
        },
      ]}
      transactionObj={{
        transactionSummary: 'İşlem Özeti',
        packageName: 'Paket Adı',
        packageNameDetail: 'Platinium Black Eşsiz 80',
        packageIncluded: 'Paket İçeriği',
        packageCampaignDetail: '80 GB İnternet • 2000 dk konuşma • 1000 SMS',
        packageAmount: 'Paket Tutarı',
        packageAmountDetail: '545 TL',
        packageCampaign: 'Paket / Kampanya Geçerlilik Süresi',
        packageContentDetail:
          'paketinizin geçerliliği mevcut kontrol tarihinizin sonuna kadar olacaktır',
        buttonText: 'İşlemi Tamamla',
      }}
    />
  );
};
