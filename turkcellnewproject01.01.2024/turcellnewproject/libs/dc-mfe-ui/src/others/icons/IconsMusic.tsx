import type { SVGProps } from 'react'
const SvgIconsMusic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-music_svg__a'
        d='M5.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM22 18c0 .059-.005.116-.015.172a3.5 3.5 0 1 1-1.984-2.835L20 8H9v10c0 .059-.005.116-.015.172a3.5 3.5 0 1 1-1.984-2.835L7 4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v14Zm-3.5-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM20 4H9v2h11V4Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-music_svg__b' fill='#fff'>
        <use xlinkHref='#icons-music_svg__a' />
      </mask>
      <use xlinkHref='#icons-music_svg__a' fill='#979797' fillRule='nonzero' />
      <g fill='currentColor' mask='url(#icons-music_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsMusic
