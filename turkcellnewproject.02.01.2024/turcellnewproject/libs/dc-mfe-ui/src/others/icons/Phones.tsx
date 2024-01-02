import type { SVGProps } from 'react'
const SvgPhones = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 64 64' {...props}>
    <g fill='none' fillRule='evenodd'>
      <circle cx={32} cy={32} r={32} fill='#2855AC' />
      <path fill='currentColor' d='M25 13h14a4 4 0 0 1 4 4v30a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V17a4 4 0 0 1 4-4zm7 35a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' />
    </g>
  </svg>
)
export default SvgPhones
