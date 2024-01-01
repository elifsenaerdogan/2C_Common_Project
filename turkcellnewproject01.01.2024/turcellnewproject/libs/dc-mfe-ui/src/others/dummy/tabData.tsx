import styles from 'src/client/components/molecules/tabs/xPage.module.scss'

export const dummyTabsContent = ['Content Data 1', 'Content Data 2', 'Content Data 3', 'Content Data 4', 'Content Data 5', 'Content Data 6', 'Content Data 7', 'Content Data 8', 'Content Data 9']

export const dummyTabs = ['Yeni Turkcelliler', 'Faturalı Paketler', 'Turkcell Kolay Paketler', 'Turkcell Rahat Paketler', 'Hazırkart Paketleri', 'Hazır Faturalıya Geçiş', 'Yurt Dışında Kullanım', 'Yurt Dışını Arama', 'Akıllı Telefon 8']

export const dummyTabsData = dummyTabs.map((item, index) => (
  <div className={`text-body-large-regular ${styles.trkclAppTabItem}  ${0 == index ? styles.active : ''}     `} key={index}>
    <div id={index.toString()}>{item}</div>
  </div>
))

export const dummyTabsContentData = dummyTabsContent.map((item, index) => (
  <div key={index} id={item.toString()}>
    <div>{item}</div>
  </div>
))
