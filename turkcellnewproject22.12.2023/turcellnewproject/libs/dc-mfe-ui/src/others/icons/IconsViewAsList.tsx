import type { SVGProps } from 'react'
const SvgIconsViewAsList = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-view-as-list_svg__a' d='M4 6v3h16V6H4Zm0-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 11v3h16v-3H4Zm0-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-view-as-list_svg__b' fill='#fff'>
        <use xlinkHref='#icons-view-as-list_svg__a' />
      </mask>
      <use xlinkHref='#icons-view-as-list_svg__a' fill='#000' fillRule='nonzero' />
      <g fill='currentColor' mask='url(#icons-view-as-list_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsViewAsList
