import styles from './index.module.scss'

type Props = {
  title: string
}

const MegaMenuListItemTitle = (props: Props) => {
  return <div className={styles.trkclAppLeftSideMenuItemTitle}>{props.title}</div>
}

export default MegaMenuListItemTitle
