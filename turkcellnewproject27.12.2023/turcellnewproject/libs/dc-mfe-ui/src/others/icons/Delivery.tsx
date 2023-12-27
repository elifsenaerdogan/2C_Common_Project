import type { SVGProps } from 'react'
const SvgDelivery = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='delivery_svg__a'
        d='M18 9h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2v-2h2v-5h-5V6H3v10h1v2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v3zm-3.83 9H8.83a3.001 3.001 0 1 1 0-2h5.34a3.001 3.001 0 1 1 0 2zM6 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm11 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM6 8h7a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='delivery_svg__b' fill='#fff'>
        <use xlinkHref='#delivery_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#delivery_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgDelivery
