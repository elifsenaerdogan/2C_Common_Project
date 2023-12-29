import type { SVGProps } from 'react'
const SvgIconsElectric = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-electric_svg__a' d='M12.275 2.247a1 1 0 0 1 .596.874l.284 6.872 3.732-.01a1 1 0 0 1 .896 1.45l-4.84 9.636a1 1 0 0 1-1.894-.449V14H7.534a1 1 0 0 1-.915-1.403l4.337-9.838a1 1 0 0 1 1.319-.512Z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-electric_svg__b' fill='#fff'>
        <use xlinkHref='#icons-electric_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-electric_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsElectric
