import type { SVGProps } from 'react'
const SvgIconsStore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-store_svg__a' d='M21 2a1 1 0 0 1 0 2h-1v17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4H3a1 1 0 1 1 0-2h18Zm-3 2H6v16h2v-8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8h2V4Zm-4 9h-4v7h4v-7Zm1-7a1 1 0 0 1 0 2H9a1 1 0 1 1 0-2h6Z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-store_svg__b' fill='#fff'>
        <use xlinkHref='#icons-store_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-store_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsStore
