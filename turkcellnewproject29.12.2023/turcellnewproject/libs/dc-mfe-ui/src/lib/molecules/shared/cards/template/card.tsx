import styles from './card.module.scss'
import { Card as CardTemplate } from 'antd'
import classNames from 'classnames'
import { CardProps as AntCardProps } from 'antd/lib/card'

export interface CardProps extends AntCardProps {
    actions?: React.ReactNode[]
    redirectUrl?: string
    className?: string
    wrapperClassName?: string
  }

const Card = (props: CardProps) => {
    
  const { children } = props

  const cardTemplateClasses = classNames(styles['m-trkclAppCard'])
  return (
    <CardTemplate bordered={false} className={cardTemplateClasses} {...props}>
      {children}
    </CardTemplate>
  )
}

export default Card
