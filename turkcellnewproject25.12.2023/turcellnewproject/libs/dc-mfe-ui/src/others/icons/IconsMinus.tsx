import type { SVGProps } from 'react'
const SvgIconsMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <rect id='icons-minus_svg__a' width={2} height={16} x={11} y={4} rx={1} />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-minus_svg__b' fill='#fff'>
        <use xlinkHref='#icons-minus_svg__a' transform='rotate(-90 12 12)' />
      </mask>
      <g fill='currentColor' mask='url(#icons-minus_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsMinus
