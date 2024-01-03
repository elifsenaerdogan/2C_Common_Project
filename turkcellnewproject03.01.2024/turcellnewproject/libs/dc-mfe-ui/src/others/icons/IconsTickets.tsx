import type { SVGProps } from 'react'
const SvgIconsTickets = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-tickets_svg__a'
        d='M6.441 11.887a2.744 2.744 0 0 1-1.743 2.556v1.675H19.26v-1.675a2.744 2.744 0 0 1 0-5.111V7.657H4.698v1.675a2.744 2.744 0 0 1 1.743 2.555Zm-3.743-1.743V6.657a1 1 0 0 1 1-1H20.26a1 1 0 0 1 1 1v3.487a1 1 0 0 1-1 1 .743.743 0 0 0 0 1.487 1 1 0 0 1 1 1v3.487a1 1 0 0 1-1 1H3.698a1 1 0 0 1-1-1V13.63a1 1 0 0 1 1-1 .743.743 0 1 0 0-1.487 1 1 0 0 1-1-1Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-tickets_svg__b' fill='#fff'>
        <use xlinkHref='#icons-tickets_svg__a' />
      </mask>
      <use xlinkHref='#icons-tickets_svg__a' fill='currentColor' fillRule='nonzero' transform='rotate(-135 11.98 11.887)' />
      <g fill='currentColor' mask='url(#icons-tickets_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsTickets
