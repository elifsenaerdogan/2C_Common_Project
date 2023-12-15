import type { SVGProps } from 'react'
const SvgIconsPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-play_svg__a' d='M9.53 4.76A1 1 0 0 0 8 5.608v12.784a1 1 0 0 0 1.53.848l10.226-6.392a1 1 0 0 0 0-1.696L9.53 4.76Zm1.06-1.695 10.226 6.391a3 3 0 0 1 0 5.088L10.59 20.935A3 3 0 0 1 6 18.392V5.608a3 3 0 0 1 4.59-2.543Z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-play_svg__b' fill='#fff'>
        <use xlinkHref='#icons-play_svg__a' />
      </mask>
      <use xlinkHref='#icons-play_svg__a' fill='#979797' fillRule='nonzero' />
      <g fill='currentColor' mask='url(#icons-play_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsPlay
