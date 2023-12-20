import type { SVGProps } from 'react'
const SvgIconsMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-menu_svg__a' d='M3 4h18a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2Zm0 7h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm0 7h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-menu_svg__b' fill='#fff'>
        <use xlinkHref='#icons-menu_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-menu_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsMenu
