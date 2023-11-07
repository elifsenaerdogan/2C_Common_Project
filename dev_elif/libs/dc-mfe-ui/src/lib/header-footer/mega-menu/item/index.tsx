import styles from './index.module.scss'

interface Props {
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  text: string
}

const MegaMenuListItem = (props: Props) => {
  const { text, onMouseEnter, onMouseLeave } = props
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={styles.trkclAppMegaMenuItem}>
      <span>{text}</span>
    </div>
  )
}

export default MegaMenuListItem
