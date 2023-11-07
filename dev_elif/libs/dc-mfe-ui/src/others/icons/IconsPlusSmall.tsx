import type { SVGProps } from 'react'
const SvgIconsPlusSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-plus-small_svg__a' d='M13 11h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4Z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-plus-small_svg__b' fill='#fff'>
        <use xlinkHref='#icons-plus-small_svg__a' />
      </mask>
      <use xlinkHref='#icons-plus-small_svg__a' fill='#979797' fillRule='nonzero' />
      <g fill='currentColor' mask='url(#icons-plus-small_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsPlusSmall
