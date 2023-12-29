import type { SVGProps } from 'react'
const SvgIconsSreenSize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-sreen-size_svg__a' d='M4 12a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3h7a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v7Zm16 0a1 1 0 0 1 2 0v7a3 3 0 0 1-3 3h-7a1 1 0 0 1 0-2h7a1 1 0 0 0 1-1v-7Z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-sreen-size_svg__b' fill='#fff'>
        <use xlinkHref='#icons-sreen-size_svg__a' />
      </mask>
      <use xlinkHref='#icons-sreen-size_svg__a' fill='#979797' fillRule='nonzero' />
      <g fill='currentColor' mask='url(#icons-sreen-size_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsSreenSize
