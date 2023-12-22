import type { SVGProps } from 'react'
const SvgIconsLaptop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-laptop_svg__a' d='M19.2 17.5v-10H4.8v10h14.4ZM1 20a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1h1.4v-10C2.4 6.12 3.475 5 4.8 5h14.4c1.325 0 2.4 1.12 2.4 2.5v10H23a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H1Z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-laptop_svg__b' fill='#fff'>
        <use xlinkHref='#icons-laptop_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-laptop_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsLaptop
