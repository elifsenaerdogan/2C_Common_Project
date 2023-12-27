import type { SVGProps } from 'react'
const SvgWearables = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 20 38' {...props}>
    <g fill='none' fillRule='evenodd'>
      <path fill='#FFC900' d='M9 0a4 4 0 0 1 4 4v30a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4z' />
      <circle cx={9} cy={6} r={1} fill='#FAFAFA' />
      <circle cx={9} cy={32} r={1} fill='#FAFAFA' />
      <path fill='#FFC900' d='M17 16h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v-6z' />
      <path fill='currentColor' d='M4 9h10a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V13a4 4 0 0 1 4-4z' />
    </g>
  </svg>
)
export default SvgWearables
