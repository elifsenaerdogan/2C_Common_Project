import type { SVGProps } from 'react'
const SvgIconsTagFeatured = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-tag-featured_svg__a' d='m12 15-3.527 1.854.674-3.927-2.853-2.781 3.943-.573L12 6l1.763 3.573 3.943.573-2.853 2.781.674 3.927z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-tag-featured_svg__b' fill='#fff'>
        <use xlinkHref='#icons-tag-featured_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-tag-featured_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsTagFeatured
