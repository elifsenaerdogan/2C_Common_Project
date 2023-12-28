import type { SVGProps } from 'react'
const SvgIconsWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-wallet_svg__a'
        d='M19 2a3 3 0 0 1 3 3v10a3.001 3.001 0 0 1-2 2.829V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14Zm-1 16H4v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1Zm1-14H5a1 1 0 0 0-1 1v11h15a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-3 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-wallet_svg__b' fill='#fff'>
        <use xlinkHref='#icons-wallet_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-wallet_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsWallet
