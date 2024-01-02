import type { SVGProps } from 'react'
const SvgIconsCreditCard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-credit-card_svg__a' d='M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14Zm1 7H4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6Zm-10 3a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h3Zm9-8H5a1 1 0 0 0-1 1v2h16V7a1 1 0 0 0-1-1Z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-credit-card_svg__b' fill='#fff'>
        <use xlinkHref='#icons-credit-card_svg__a' />
      </mask>
      <use xlinkHref='#icons-credit-card_svg__a' fill='#979797' fillRule='nonzero' />
      <g fill='currentColor' mask='url(#icons-credit-card_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsCreditCard
