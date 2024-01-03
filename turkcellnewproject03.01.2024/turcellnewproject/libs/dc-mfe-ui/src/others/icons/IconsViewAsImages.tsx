import type { SVGProps } from 'react'
const SvgIconsViewAsImages = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-view-as-images_svg__a'
        d='M3.053 4h17.894C21.53 4 22 4.448 22 5s-.471 1-1.053 1H3.053C2.47 6 2 5.552 2 5s.471-1 1.053-1ZM4 10v4h16v-4H4Zm0-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Zm-.947 10h17.894c.582 0 1.053.448 1.053 1s-.471 1-1.053 1H3.053C2.47 20 2 19.552 2 19s.471-1 1.053-1Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-view-as-images_svg__b' fill='#fff'>
        <use xlinkHref='#icons-view-as-images_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-view-as-images_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsViewAsImages
