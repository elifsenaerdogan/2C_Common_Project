import type { SVGProps } from 'react'
const SvgIconsSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-search_svg__a' d='M11 2a9 9 0 0 1 7.032 14.617l3.675 3.676a1 1 0 0 1-1.414 1.414l-3.676-3.675A9 9 0 1 1 11 2Zm0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-search_svg__b' fill='#fff'>
        <use xlinkHref='#icons-search_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-search_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsSearch
