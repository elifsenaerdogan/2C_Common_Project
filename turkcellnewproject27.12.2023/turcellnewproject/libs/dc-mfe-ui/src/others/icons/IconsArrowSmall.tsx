import type { SVGProps } from 'react'
const SvgIconsArrowSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-arrow-small_svg__a' d='M13.08 8.26a1 1 0 0 1 1.347 1.48L12 11.95l2.427 2.212a1 1 0 1 1-1.347 1.478l-2.427-2.211a2 2 0 0 1 0-2.957L13.08 8.26z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-arrow-small_svg__b' fill='#fff'>
        <use xlinkHref='#icons-arrow-small_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-arrow-small_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsArrowSmall
