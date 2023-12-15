import type { SVGProps } from 'react'
const SvgIconsHome = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-home_svg__a'
        d='m12 1.662 9.664 8.59a1 1 0 1 1-1.328 1.495L19 10.56V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9.441l-1.336 1.188a1 1 0 0 1-1.328-1.494L12 1.662Zm0 2.676L7 8.782V20h10V8.782l-5-4.444ZM14 11a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4Zm-1 2h-2v2h2v-2Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-home_svg__b' fill='#fff'>
        <use xlinkHref='#icons-home_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-home_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsHome
