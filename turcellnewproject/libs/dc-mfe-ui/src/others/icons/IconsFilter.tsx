import type { SVGProps } from 'react'
const SvgIconsFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-filter_svg__a'
        d='M16 21a1 1 0 0 1-2 0v-1H3a1 1 0 0 1 0-2h11v-1a1 1 0 0 1 2 0v4Zm5-3a1 1 0 0 1 0 2h-3v-2h3ZM9 9a1 1 0 0 1 1 1v1h11a1 1 0 0 1 0 2H10v1a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1Zm-3 2v2H3a1 1 0 0 1 0-2h3Zm9-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V6H3a1 1 0 1 1 0-2h11V3a1 1 0 0 1 1-1Zm6 2a1 1 0 0 1 0 2h-3V4h3Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-filter_svg__b' fill='#fff'>
        <use xlinkHref='#icons-filter_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-filter_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsFilter
