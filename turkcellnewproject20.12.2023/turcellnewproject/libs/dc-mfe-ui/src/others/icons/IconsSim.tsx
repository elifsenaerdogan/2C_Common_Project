import type { SVGProps } from 'react'
const SvgIconsSim = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-sim_svg__a' d='M15.414 2 20 6.586V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.414Zm-.828 2H6v16h12V7.414L14.586 4ZM14 10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4Zm0 2h-4v4h4v-4Z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-sim_svg__b' fill='#fff'>
        <use xlinkHref='#icons-sim_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-sim_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsSim
