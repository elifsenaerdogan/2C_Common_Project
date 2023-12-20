import type { SVGProps } from 'react'
const SvgIconsArrowTail = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-arrow-tail_svg__a' d='M10.325 5.327a1 1 0 0 1-.066 1.412L5.583 11H21a1 1 0 0 1 0 2H5.583l4.676 4.26a1 1 0 0 1-1.347 1.48l-5.774-5.262a2 2 0 0 1 0-2.956L8.912 5.26a1 1 0 0 1 1.413.066z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-arrow-tail_svg__b' fill='#fff'>
        <use xlinkHref='#icons-arrow-tail_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-arrow-tail_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsArrowTail
