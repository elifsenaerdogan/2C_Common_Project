import type { SVGProps } from 'react'
const SvgHelpTools = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 64 64' {...props}>
    <defs>
      <path id='help-tools_svg__a' d='M19 38C8.507 38 0 29.493 0 19S8.507 0 19 0s19 8.507 19 19-8.507 19-19 19zm0-8c6.075 0 11-4.925 11-11S25.075 8 19 8 8 12.925 8 19s4.925 11 11 11z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <circle cx={32} cy={32} r={32} fill='#2855AC' />
      <g transform='translate(13 13)'>
        <mask id='help-tools_svg__b' fill='#fff'>
          <use xlinkHref='#help-tools_svg__a' />
        </mask>
        <use xlinkHref='#help-tools_svg__a' fill='currentColor' />
        <path fill='#FFC900' d='M18.5 16.379 31.935 2.944l2.828 2.828-13.435 13.435 12.728 12.728-2.828 2.828L18.5 22.036 5.772 34.763l-2.828-2.828 12.728-12.728L2.237 5.772l2.828-2.828z' mask='url(#help-tools_svg__b)' />
      </g>
    </g>
  </svg>
)
export default SvgHelpTools
