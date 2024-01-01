import type { SVGProps } from 'react'
const SvgIconsAccountLoggedinPlaceholderActive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-account-loggedin-placeholder-active_svg__a' d='M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2a9.978 9.978 0 0 1 7.599 3.499A9.972 9.972 0 0 1 10 20a9.978 9.978 0 0 1-7.6-3.5A9.978 9.978 0 0 1 10 13z' />
    </defs>
    <g fill='none' fillRule='evenodd' transform='translate(2 2)'>
      <circle cx={10} cy={10} r={11} fill='currentColor' stroke='#FFC900' strokeWidth={2} />
      <mask id='icons-account-loggedin-placeholder-active_svg__b' fill='#fff'>
        <use xlinkHref='#icons-account-loggedin-placeholder-active_svg__a' />
      </mask>
      <use xlinkHref='#icons-account-loggedin-placeholder-active_svg__a' fill='currentColor' fillRule='nonzero' />
      <g fill='currentColor' mask='url(#icons-account-loggedin-placeholder-active_svg__b)'>
        <path d='M-2-2h24v24H-2z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsAccountLoggedinPlaceholderActive
