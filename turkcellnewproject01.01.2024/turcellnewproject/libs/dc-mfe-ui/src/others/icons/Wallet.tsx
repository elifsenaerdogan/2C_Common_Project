import type { SVGProps } from 'react'
const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='wallet_svg__a'
        d='M20 17.83V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3.001 3.001 0 0 1-2 2.83zM4 16h15a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v11zm0 2v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1H4zm12-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='wallet_svg__b' fill='#fff'>
        <use xlinkHref='#wallet_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#wallet_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgWallet
