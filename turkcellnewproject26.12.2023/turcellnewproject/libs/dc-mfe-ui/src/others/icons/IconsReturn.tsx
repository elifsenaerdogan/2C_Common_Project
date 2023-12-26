import type { SVGProps } from 'react'
const SvgIconsReturn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-return_svg__a'
        d='M17.657 6.343a1 1 0 0 1-1.414 1.414A6 6 0 0 0 6 12a1 1 0 0 1-2 0 8 8 0 0 1 13.657-5.657Zm2.757 3.243 1.293 1.293a1 1 0 1 1-1.414 1.414L20 11.999a8 8 0 0 1-13.657 5.658 1 1 0 1 1 1.414-1.414A6 6 0 0 0 18 12l-.293.293a1 1 0 0 1-1.414-1.414l1.293-1.293a2 2 0 0 1 2.828 0ZM2.293 11.707a1 1 0 0 1 1.414 0L5 13l1.293-1.293a1 1 0 0 1 1.414 1.414l-1.293 1.293a2 2 0 0 1-2.828 0l-1.293-1.293a1 1 0 0 1 0-1.414Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-return_svg__b' fill='#fff'>
        <use xlinkHref='#icons-return_svg__a' />
      </mask>
      <use xlinkHref='#icons-return_svg__a' fill='#979797' fillRule='nonzero' />
      <g fill='currentColor' mask='url(#icons-return_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsReturn
