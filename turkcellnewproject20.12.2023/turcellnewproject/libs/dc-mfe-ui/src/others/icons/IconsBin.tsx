import type { SVGProps } from 'react'
const SvgIconsBin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-bin_svg__a' d='M8 8v12h8V8H8zm11-2a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8H5a1 1 0 1 1 0-2h14zm-9-4h4a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-bin_svg__b' fill='#fff'>
        <use xlinkHref='#icons-bin_svg__a' />
      </mask>
      <use xlinkHref='#icons-bin_svg__a' fill='#D8D8D8' fillRule='nonzero' />
      <g fill='currentColor' mask='url(#icons-bin_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsBin
