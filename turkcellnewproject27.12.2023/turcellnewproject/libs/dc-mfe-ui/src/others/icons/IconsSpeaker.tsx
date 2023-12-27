import type { SVGProps } from 'react'
const SvgIconsSpeaker = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-speaker_svg__a'
        d='M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14Zm0 2H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm-9 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-speaker_svg__b' fill='#fff'>
        <use xlinkHref='#icons-speaker_svg__a' />
      </mask>
      <use xlinkHref='#icons-speaker_svg__a' fill='#979797' fillRule='nonzero' transform='rotate(-90 12 12)' />
      <g fill='currentColor' mask='url(#icons-speaker_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsSpeaker
