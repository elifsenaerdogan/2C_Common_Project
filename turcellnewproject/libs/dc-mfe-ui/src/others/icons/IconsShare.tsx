import type { SVGProps } from 'react'
const SvgIconsShare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-share_svg__a'
        d='M8 9a1 1 0 1 1 0 2H7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-1a1 1 0 0 1 0-2h1a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h1Zm5.414-6 2.293 2.293a1 1 0 1 1-1.414 1.414L13 5.414V13a1 1 0 0 1-2 0V5.414L9.707 6.707a1 1 0 0 1-1.414-1.414L10.586 3a2 2 0 0 1 2.828 0Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-share_svg__b' fill='#fff'>
        <use xlinkHref='#icons-share_svg__a' />
      </mask>
      <use xlinkHref='#icons-share_svg__a' fill='#979797' fillRule='nonzero' />
      <g fill='currentColor' mask='url(#icons-share_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsShare
