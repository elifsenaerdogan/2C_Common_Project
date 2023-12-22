import type { SVGProps } from 'react'
const SvgIconsCompare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-compare_svg__a'
        d='M8.207 4.408a1 1 0 0 1 0 1.415L7.03 7H19a1 1 0 0 1 0 2H7.029l1.178 1.177a1 1 0 0 1-1.414 1.415L4.616 9.414a2 2 0 0 1 0-2.828l2.177-2.178a1 1 0 0 1 1.414 0Zm7.586 8a1 1 0 0 1 1.414 0l2.177 2.178a2 2 0 0 1 0 2.828l-2.177 2.178a1 1 0 0 1-1.414-1.415L16.97 17H5a1 1 0 0 1 0-2h11.97l-1.177-1.177a1 1 0 0 1-.083-1.32Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-compare_svg__b' fill='#fff'>
        <use xlinkHref='#icons-compare_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-compare_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsCompare
