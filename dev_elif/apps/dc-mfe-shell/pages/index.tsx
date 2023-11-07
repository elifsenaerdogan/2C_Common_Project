import styles from './index.module.scss';
import { useState } from 'react';

import {useSelector, useDispatch} from 'react-redux'
import {deneme} from './../store';
export function Index() {
  const [open, setOpen] = useState(false);

  const count = useSelector((state:any) => {
    return state?.deneme?.value
  })
  const dispatch = useDispatch()
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   
  return (
    <div className={styles.page}>
    Shell
    </div>
  );
        */
  return (
    <>
      <div style={{ height: '100vh', backgroundColor: 'aquamarine' }}>
        <div>Hızlı İşlemler</div>
      </div>
    </>
  );
}

export default Index;
