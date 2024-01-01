import type { SVGProps } from 'react'
const SvgIconYenilikciHizmet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 48 48' {...props}>
    <defs>
      <path
        id='icon-yenilikci-hizmet_svg__a'
        d='M12 2c2.822 0 5.644.478 8.466 1.433a2 2 0 0 1 1.341 2.157C20.361 16.53 17.092 22 12 22c-5.092 0-8.361-5.47-9.807-16.41a2 2 0 0 1 1.341-2.157C6.356 2.478 9.178 2 12 2Zm0 2c-2.6 0-5.206.441-7.824 1.328C5.505 15.384 8.263 20 12 20s6.495-4.616 7.824-14.672C17.206 4.44 14.601 4 12 4Zm0 2a1 1 0 0 1 1 1v9a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <circle cx={24} cy={24} r={24} fill='#ECF0F2' opacity={0.5} />
      <g transform='translate(12 12)'>
        <mask id='icon-yenilikci-hizmet_svg__b' fill='#fff'>
          <use xlinkHref='#icon-yenilikci-hizmet_svg__a' />
        </mask>
        <use xlinkHref='#icon-yenilikci-hizmet_svg__a' fill='#979797' fillRule='nonzero' />
        <g fill='currentColor' mask='url(#icon-yenilikci-hizmet_svg__b)'>
          <path d='M0 0h24v24H0z' />
        </g>
      </g>
    </g>
  </svg>
)
export default SvgIconYenilikciHizmet
