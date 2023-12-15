import type { SVGProps } from 'react'
const SvgMobile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='mobile_svg__a' d='M9 2h6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9zm3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='mobile_svg__b' fill='#fff'>
        <use xlinkHref='#mobile_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#mobile_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgMobile
