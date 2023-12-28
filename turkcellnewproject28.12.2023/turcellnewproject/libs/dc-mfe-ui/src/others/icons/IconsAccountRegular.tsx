import type { SVGProps } from 'react'
const SvgIconsAccountRegular = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-account-regular_svg__a'
        d='M10 0c5.523 0 10 4.477 10 10a9.958 9.958 0 0 1-2.17 6.22L18 16a10.044 10.044 0 0 1-3.457 2.91l-.112.057A9.958 9.958 0 0 1 10 20h-.004l-.276-.004a10.13 10.13 0 0 1-2.365-.35 9.906 9.906 0 0 1-1.786-.679l-.112-.056a9.972 9.972 0 0 1-2.763-2.083 10.054 10.054 0 0 1-.524-.608A9.957 9.957 0 0 1 0 10C0 4.477 4.477 0 10 0zm0 2a8 8 0 0 0-6.615 12.501A9.958 9.958 0 0 1 10 12c2.536 0 4.852.944 6.615 2.5A8 8 0 0 0 10 2zm0 2c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3z'
      />
    </defs>
    <g fill='none' fillRule='evenodd' transform='translate(2 2)'>
      <mask id='icons-account-regular_svg__b' fill='#fff'>
        <use xlinkHref='#icons-account-regular_svg__a' />
      </mask>
      <use xlinkHref='#icons-account-regular_svg__a' fill='currentColor' fillRule='nonzero' />
      <g fill='currentColor' mask='url(#icons-account-regular_svg__b)'>
        <path d='M-2-2h24v24H-2z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsAccountRegular
