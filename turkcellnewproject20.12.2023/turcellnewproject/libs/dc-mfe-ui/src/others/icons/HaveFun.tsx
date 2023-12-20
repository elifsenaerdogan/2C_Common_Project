import type { SVGProps } from 'react'
const SvgHaveFun = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 64 64' {...props}>
    <g fill='none' fillRule='evenodd'>
      <circle cx={32} cy={32} r={32} fill='#2855AC' />
      <path fill='#FFC900' d='M16 22h32a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V24a2 2 0 0 1 2-2z' />
      <path fill='currentColor' d='M19.641 41.247 32 46l12.359-4.753a1 1 0 0 0 .641-.934V18.456a1 1 0 0 0-1.359-.933L32 22l-11.641-4.477a1 1 0 0 0-1.359.933v21.857a1 1 0 0 0 .641.934z' />
      <path
        fill='#2855AC'
        d='M23.149 27.436a1 1 0 0 1 .702-1.872l4.251 1.594a1 1 0 0 1-.702 1.872l-4.251-1.594zm0 7a1 1 0 1 1 .702-1.872l4.251 1.594a1 1 0 0 1-.702 1.872l-4.251-1.594zm17.89-7-4.252 1.594a1 1 0 0 1-.702-1.872l4.251-1.594a1 1 0 1 1 .702 1.872zm0 7-4.252 1.594a1 1 0 0 1-.702-1.872l4.251-1.594a1 1 0 1 1 .702 1.872z'
      />
    </g>
  </svg>
)
export default SvgHaveFun
