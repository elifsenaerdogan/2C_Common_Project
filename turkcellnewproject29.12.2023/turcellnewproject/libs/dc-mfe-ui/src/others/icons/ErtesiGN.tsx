import type { SVGProps } from 'react'
const SvgErtesiGN = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 48 48' {...props}>
    <defs>
      <path id='ertesi-g-n_svg__a' d='M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14Zm1 7H4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6Zm-10 3a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h3Zm9-8H5a1 1 0 0 0-1 1v2h16V7a1 1 0 0 0-1-1Z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <circle cx={24} cy={24} r={24} fill='#ECF0F2' opacity={0.5} />
      <g transform='translate(12 12)'>
        <mask id='ertesi-g-n_svg__b' fill='#fff'>
          <use xlinkHref='#ertesi-g-n_svg__a' />
        </mask>
        <use xlinkHref='#ertesi-g-n_svg__a' fill='#979797' fillRule='nonzero' />
        <g fill='currentColor' mask='url(#ertesi-g-n_svg__b)'>
          <path d='M0 0h24v24H0z' />
        </g>
      </g>
    </g>
  </svg>
)
export default SvgErtesiGN
