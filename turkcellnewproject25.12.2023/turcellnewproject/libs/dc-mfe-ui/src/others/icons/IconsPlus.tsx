import type { SVGProps } from 'react'
const SvgIconsPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-plus_svg__a' d='M8 0a1 1 0 0 1 1 1v6h6a1 1 0 0 1 0 2H9v6a1 1 0 0 1-2 0V9H1a1 1 0 1 1 0-2h6V1a1 1 0 0 1 1-1Z' />
    </defs>
    <g fill='none' fillRule='evenodd' transform='translate(4 4)'>
      <mask id='icons-plus_svg__b' fill='#fff'>
        <use xlinkHref='#icons-plus_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-plus_svg__b)'>
        <path d='M-4-4h24v24H-4z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsPlus
