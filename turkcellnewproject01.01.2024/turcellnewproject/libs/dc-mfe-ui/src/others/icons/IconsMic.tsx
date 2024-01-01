import type { SVGProps } from 'react'
const SvgIconsMic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-mic_svg__a'
        d='M19 11a1 1 0 0 1 1 1 8.001 8.001 0 0 1-6.999 7.938L13 21a1 1 0 0 1-2 0v-1.062A8.001 8.001 0 0 1 4 12a1 1 0 0 1 2 0 6 6 0 1 0 12 0 1 1 0 0 1 1-1Zm-7-9a4 4 0 0 1 4 4v6a4 4 0 1 1-8 0V6a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-mic_svg__b' fill='#fff'>
        <use xlinkHref='#icons-mic_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-mic_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsMic
