import type { SVGProps } from 'react'
const SvgIconsStarFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-star-filled_svg__a'
        d='M9.233 19.806c-.896.433-2.005.117-2.476-.706a1.561 1.561 0 0 1-.184-1.067l.624-3.338-2.643-2.364c-.725-.648-.74-1.713-.033-2.379.281-.264.65-.437 1.049-.49l3.652-.487 1.634-3.037c.448-.833 1.547-1.175 2.455-.764.362.164.655.432.833.764l1.633 3.037 3.653.487c1.002.134 1.696.987 1.55 1.907a1.638 1.638 0 0 1-.534.962l-2.643 2.364.624 3.338c.171.916-.5 1.785-1.497 1.942a1.979 1.979 0 0 1-1.163-.169L12.5 18.231l-3.267 1.575Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-star-filled_svg__b' fill='#fff'>
        <use xlinkHref='#icons-star-filled_svg__a' />
      </mask>
      <use xlinkHref='#icons-star-filled_svg__a' fill='currentColor' fillRule='nonzero' />
      <g fill='#FFC900' mask='url(#icons-star-filled_svg__b)' opacity={0.5}>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsStarFilled
