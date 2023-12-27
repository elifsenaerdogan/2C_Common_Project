import type { SVGProps } from 'react'
const SvgIconsStar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-star_svg__a'
        d='m11.5 16.84 4.12 2.253-.787-4.77 3.333-3.38-4.606-.695-2.06-4.341-2.06 4.34-4.607.697 3.334 3.378-.787 4.771 4.12-2.252Zm-3.267 3.94c-.896.49-2.005.132-2.476-.8a1.973 1.973 0 0 1-.184-1.21l.624-3.782-2.643-2.68a1.96 1.96 0 0 1-.033-2.695c.281-.3.65-.496 1.049-.556l3.652-.552 1.634-3.442c.448-.944 1.547-1.332 2.455-.866.362.186.655.49.833.866l1.633 3.442 3.653.552c1.002.151 1.696 1.119 1.55 2.16a1.934 1.934 0 0 1-.534 1.092l-2.643 2.679.624 3.783c.171 1.038-.5 2.023-1.497 2.201-.398.071-.806.004-1.163-.191L11.5 18.995 8.233 20.78Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-star_svg__b' fill='#fff'>
        <use xlinkHref='#icons-star_svg__a' />
      </mask>
      <use xlinkHref='#icons-star_svg__a' fill='currentColor' fillRule='nonzero' />
      <g fill='#FFC900' mask='url(#icons-star_svg__b)' opacity={0.5}>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsStar
