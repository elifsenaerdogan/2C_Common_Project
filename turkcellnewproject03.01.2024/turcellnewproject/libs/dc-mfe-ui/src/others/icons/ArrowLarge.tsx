import type { SVGProps } from 'react'
const SvgArrowLarge = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='arrow-large_svg__a' d='M13.427 5.26a1 1 0 0 1 1.347 1.48L9 12l5.774 5.26a1 1 0 0 1-1.347 1.48l-5.774-5.262a2 2 0 0 1 0-2.956l5.774-5.261z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='arrow-large_svg__b' fill='#fff'>
        <use xlinkHref='#arrow-large_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#arrow-large_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgArrowLarge
