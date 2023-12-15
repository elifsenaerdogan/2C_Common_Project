import type { SVGProps } from 'react'
const SvgTl = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='tl_svg__a'
        d='M12 19.886A5.002 5.002 0 0 0 15.933 15a1 1 0 0 1 2 0 7 7 0 0 1-7 7A1 1 0 0 1 10 20.64v-7.063l-1.567.905a1 1 0 1 1-1-1.732L10 11.268v-1.69l-1.567.904a1 1 0 1 1-1-1.732L10 7.268V3a1 1 0 0 1 2 0v3.113l2.361-1.363a1 1 0 0 1 1 1.732L12 8.422v1.691l2.361-1.363a1 1 0 0 1 1 1.732L12 12.422v7.464z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='tl_svg__b' fill='#fff'>
        <use xlinkHref='#tl_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#tl_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgTl
