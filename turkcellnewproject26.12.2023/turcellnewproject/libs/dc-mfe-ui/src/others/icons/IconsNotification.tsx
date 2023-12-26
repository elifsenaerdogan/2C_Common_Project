import type { SVGProps } from 'react'
const SvgIconsNotification = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <circle id='icons-notification_svg__a' cx={12} cy={12} r={4} />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-notification_svg__b' fill='#fff'>
        <use xlinkHref='#icons-notification_svg__a' />
      </mask>
      <g fill='#FFC900' mask='url(#icons-notification_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsNotification
