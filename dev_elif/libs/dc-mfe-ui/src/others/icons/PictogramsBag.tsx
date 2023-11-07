import type { SVGProps } from 'react'
const SvgPictogramsBag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 64 64' {...props}>
    <g fill='none' fillRule='evenodd'>
      <circle cx={32} cy={32} r={32} fill='#2855AC' />
      <path fill='#FFC900' d='M32 13a8 8 0 0 1 8 8v6a8 8 0 1 1-16 0v-6a8 8 0 0 1 8-8Zm0 3c-2.761 0-5 2.388-5 5.333V24h10v-2.667C37 18.388 34.761 16 32 16Z' />
      <path fill='currentColor' d='M41.435 23a4 4 0 0 1 3.974 3.542l2.077 18A4 4 0 0 1 43.512 49H20.488a4 4 0 0 1-3.974-4.458l2.077-18A4 4 0 0 1 22.565 23h18.87ZM37 41H27a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z' />
    </g>
  </svg>
)
export default SvgPictogramsBag
