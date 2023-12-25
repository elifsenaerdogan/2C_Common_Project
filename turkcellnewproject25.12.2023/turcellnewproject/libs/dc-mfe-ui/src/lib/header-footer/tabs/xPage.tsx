import { useState } from 'react'
import Tab from './tab'
import { xPageTabSettings } from 'src/client/constants/xPage/xPage-constants'
import styles from './xPage.module.scss'
import { dummyTabs, dummyTabsContent } from 'src/client/dummy/tabData'

const XPage = () => {
  const [active, setActive] = useState<number | undefined>(0)

  const dummyTabsData = dummyTabs.map((item, index) => (
    <div className={`text-body-large-regular ${styles.trkclAppTabItem}  ${active == index ? styles.active : ''}   `} onClick={() => setActive(index)} key={index}>
      <div id={index.toString()}>{item}</div>
    </div>
  ))

  const dummyTabsContentData = dummyTabsContent.map((item, index) => (
    <div key={index} id={item.toString()}>
      <div>{item}</div>
    </div>
  ))

  return (
    <>
      <div>Paket / TL Yükle</div>

      <Tab
        tabsSettings={xPageTabSettings}
        tabsData={dummyTabsData}
        tabsContentData={dummyTabsContentData}
        tabsWrapperClassName={styles.tabsWrapper}
        tabsContentWrapperClassName={styles.tabsContentWrapper}
        tabsNextArrowClass={styles.trkclAppXPageNextArrow}
        tabsPrevArrowClass={styles.trkclAppXPagePrevArrow}
        hasBorderBottom={true}
        activeTab={active}
      />
    </>
  )
}

export default XPage
