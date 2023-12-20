import type { SVGProps } from 'react'
const SvgIconsBagNotification = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 30 30' {...props}>
    <defs>
      <circle id='icons-bag-notification_svg__c' cx={12} cy={12} r={4} />
      <path
        id='icons-bag-notification_svg__a'
        d='M13 2a3 3 0 0 1 3 3v1h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1V5a3 3 0 0 1 3-3h2zm4 6H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-2 8a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2h6zM13 4h-2a1 1 0 0 0-1 1v1h4V5a1 1 0 0 0-1-1z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-bag-notification_svg__b' fill='#fff'>
        <use xlinkHref='#icons-bag-notification_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-bag-notification_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
      <g transform='translate(6 6)'>
        <mask id='icons-bag-notification_svg__d' fill='#fff'>
          <use xlinkHref='#icons-bag-notification_svg__c' />
        </mask>
        <g fill='#FFC900' mask='url(#icons-bag-notification_svg__d)'>
          <path d='M0 0h24v24H0z' />
        </g>
      </g>
    </g>
  </svg>
)
export default SvgIconsBagNotification
