import type { SVGProps } from 'react'
const SvgIconsCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-check_svg__a' d='M6.293 13.707a1 1 0 0 1 1.414-1.414L10 14.586l6.293-6.293a1 1 0 0 1 1.414 1.414L11.414 16a2 2 0 0 1-2.828 0l-2.293-2.293Z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-check_svg__b' fill='#fff'>
        <use xlinkHref='#icons-check_svg__a' />
      </mask>
      <use xlinkHref='#icons-check_svg__a' fill='#979797' fillRule='nonzero' />
      <g fill='currentColor' mask='url(#icons-check_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsCheck
