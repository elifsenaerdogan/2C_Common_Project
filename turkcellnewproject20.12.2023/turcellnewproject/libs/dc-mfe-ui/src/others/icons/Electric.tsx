import type { SVGProps } from 'react'
const SvgElectric = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='electric_svg__a' d='m13.156 9.994 3.73-.01a1 1 0 0 1 .897 1.449l-4.84 9.636a1 1 0 0 1-1.894-.449V14H7.534a1 1 0 0 1-.915-1.403l4.337-9.838a1 1 0 0 1 1.915.362l.285 6.873z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='electric_svg__b' fill='#fff'>
        <use xlinkHref='#electric_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#electric_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgElectric
