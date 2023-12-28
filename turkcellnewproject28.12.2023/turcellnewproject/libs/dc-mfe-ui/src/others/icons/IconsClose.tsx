import type { SVGProps } from 'react'
const SvgIconsClose = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-close_svg__a'
        d='M5.707 4.293 12 10.585l6.293-6.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414L13.415 12l6.292 6.293a1 1 0 0 1-1.414 1.414L12 13.415l-6.293 6.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1 0-1.414L10.585 12 4.293 5.707a1 1 0 0 1 1.414-1.414Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-close_svg__b' fill='#fff'>
        <use xlinkHref='#icons-close_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-close_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsClose
