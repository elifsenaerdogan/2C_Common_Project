import { Children, Style } from '../typeDeclarations/children'

interface Base {
  children?: Children
  id?: string
  className?: string | ''
  style?: Style
}

export default Base
