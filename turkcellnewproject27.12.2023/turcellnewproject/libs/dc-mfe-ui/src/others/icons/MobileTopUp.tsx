import type { SVGProps } from 'react'
const SvgMobileTopUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='mobile-top-up_svg__a'
        d='M18 4h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0V6h-1a1 1 0 0 1 0-2h1V3a1 1 0 0 1 2 0v1zm-6 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4-7a1 1 0 0 1 2 0v8a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='mobile-top-up_svg__b' fill='#fff'>
        <use xlinkHref='#mobile-top-up_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#mobile-top-up_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgMobileTopUp
