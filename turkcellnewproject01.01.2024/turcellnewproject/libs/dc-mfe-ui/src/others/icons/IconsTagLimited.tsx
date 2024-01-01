import type { SVGProps } from 'react'
const SvgIconsTagLimited = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-tag-limited_svg__a' d='M12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 1a1 1 0 0 1 1 1v1.586l.707.707a1 1 0 0 1-1.414 1.414L11.586 13A2 2 0 0 1 11 11.586V10a1 1 0 0 1 1-1Z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-tag-limited_svg__b' fill='#fff'>
        <use xlinkHref='#icons-tag-limited_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-tag-limited_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsTagLimited
