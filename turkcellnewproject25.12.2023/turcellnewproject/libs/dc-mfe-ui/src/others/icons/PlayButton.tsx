import type { SVGProps } from 'react'
const SvgPlayButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 64 64' {...props}>
    <defs>
      <path id='play-button_svg__a' d='M7.53 2.76A1 1 0 0 0 6 3.608v12.784a1 1 0 0 0 1.53.848l10.226-6.392a1 1 0 0 0 0-1.696L7.53 2.76Zm1.06-1.695 10.226 6.391a3 3 0 0 1 0 5.088L8.59 18.935A3 3 0 0 1 4 16.392V3.608a3 3 0 0 1 4.59-2.543Z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <circle cx={32} cy={32} r={32} fill='#FACA00' />
      <g transform='translate(23 22)'>
        <mask id='play-button_svg__b' fill='#fff'>
          <use xlinkHref='#play-button_svg__a' />
        </mask>
        <use xlinkHref='#play-button_svg__a' fill='#979797' fillRule='nonzero' />
        <g fill='#D8D8D8' mask='url(#play-button_svg__b)'>
          <path d='M-2-2h24v24H-2z' />
        </g>
      </g>
    </g>
  </svg>
)
export default SvgPlayButton
