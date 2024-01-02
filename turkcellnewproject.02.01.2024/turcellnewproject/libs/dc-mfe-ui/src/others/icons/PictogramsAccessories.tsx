import type { SVGProps } from 'react'
const SvgPictogramsAccessories = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 64 64' {...props}>
    <g fill='none' fillRule='evenodd'>
      <circle cx={32} cy={32} r={32} fill='#2855AC' />
      <g transform='translate(15 15)'>
        <rect width={10} height={3} x={24} y={6} fill='#FFC900' rx={1.5} />
        <rect width={10} height={3} x={24} y={13} fill='#FFC900' rx={1.5} />
        <path stroke='#FFC900' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.818 11H3.46A3.46 3.46 0 0 0 0 14.46v11.414a3.46 3.46 0 0 0 3.46 3.46h11.08A3.46 3.46 0 0 1 18 32.792V37h0' />
        <rect width={21} height={22} x={7} fill='currentColor' rx={3.459} />
        <path
          fill='#2855AC'
          d='M20.987 10.896a.473.473 0 0 0-.329-.327l-2.453-.743 1.742-3.168a.43.43 0 0 0-.155-.572.538.538 0 0 0-.646.047l-5 4.546a.428.428 0 0 0-.133.425c.04.154.164.277.329.327l2.453.744-1.742 3.167a.43.43 0 0 0 .155.572c.199.13.471.111.646-.047l5-4.546a.428.428 0 0 0 .133-.425Z'
        />
      </g>
    </g>
  </svg>
)
export default SvgPictogramsAccessories
