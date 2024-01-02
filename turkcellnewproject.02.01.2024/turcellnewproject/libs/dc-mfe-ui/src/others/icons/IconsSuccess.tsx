import type { SVGProps } from 'react'
const SvgIconsSuccess = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-success_svg__a' d='M2.293 11.707a1 1 0 0 1 1.414-1.414L10 16.586 20.293 6.293a1 1 0 0 1 1.414 1.414L11.414 18a2 2 0 0 1-2.828 0l-6.293-6.293Z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-success_svg__b' fill='#fff'>
        <use xlinkHref='#icons-success_svg__a' />
      </mask>
      <use xlinkHref='#icons-success_svg__a' fill='#979797' fillRule='nonzero' />
      <g fill='currentColor' mask='url(#icons-success_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsSuccess
