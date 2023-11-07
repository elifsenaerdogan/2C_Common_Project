import type {Meta} from '@storybook/react';
import {MoleculeQuickTransactions} from './molecule-quick-transactions';
import {AtomIcon} from "@atoms";
import {IconsTechSpecs, IconsTl} from "@others/icons";
import {useEffect, useRef, useState} from "react";

const Story: Meta<typeof MoleculeQuickTransactions> = {
  component: MoleculeQuickTransactions,
  title: 'Molecules/QuickTransactions',
};
export default Story;

export const Primary = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);



  return (<div style={{  width: "240px",
    position:'relative',
    padding:'20px',
    boxShadow:'0 8px 10px -5px rgba(0, 0, 0, 0.1), 0 6px 30px 5px rgba(0, 0, 0, 0.1), 0 16px 24px 2px rgba(0, 0, 0, 0.1)',
    backgroundColor:"white",borderRadius:"10px 0 0 10px" }}>
    <MoleculeQuickTransactions loginFn={()=>console.log("login")} refWidth={240} menuRef={menuRef} onLinkPress={(e)=>console.log(e)}   popularTransactionsTitle="EN POPÜLER İŞLEMLER" popularTransactions={[{
      icon: <AtomIcon icon={<IconsTechSpecs width={"100%"} height={"100%"}/>}/>,
      url: '',
      text: 'Fatura Öde',
      variant: 'gradientOrange'
    },
      {
        icon: <AtomIcon icon={<IconsTl width={"100%"} height={"100%"}/>}/>,
        url: '',
        text: 'TL Yükle',
        variant: 'gradientLightBlue'
      },
      {
        icon: <AtomIcon icon={<IconsTl width={"100%"} height={"100%"}/>}/>,
        url: '',
        text: 'Lorem Ipsum',
        variant: 'gradientBlue'
      },
      {
        icon: <AtomIcon icon={<IconsTechSpecs width={"100%"} height={"100%"}/>}/>,
        url: '',
        text: 'Lorem Ipsum',
        variant: 'gradientOrange'
      }]} allQuickTransactionsTitle="TÜM HIZLI İŞLEMLER"
                               quickTransactions={[{url: '', text: 'Faturalı Hatlar',sideMenu:[{url:'',text:'Faturalı Hatlar 1-1'},{url:'',text:'Faturalı Hatlar 1-2'}]}, {
                                 url: '',
                                 text: 'Faturasız Hatlar',
                                 sideMenu:[{url:'',text:'Faturalı Hatlar 2'}]
                               }, {url: '', text: "Turkcell'li ol ",sideMenu:[{url:'',text:'Faturalı Hatlar 3'}]}]}/>
  </div>)
}
