import type { SVGProps } from 'react'
const SvgIconsLike = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-like_svg__a'
        d='M17.806 19a1 1 0 0 0 .946-.676l2.396-7A1 1 0 0 0 20.202 10H14V3.75a.75.75 0 0 0-.75-.75.952.952 0 0 0-.943.822c-.452 3.277-1.339 5.312-2.86 6.072l-.21.106H9v9h8.806ZM13.25 1A2.75 2.75 0 0 1 16 3.75V8h4.202a3 3 0 0 1 2.838 3.971l-2.396 7A3 3 0 0 1 17.806 21l-9.074.001A2 2 0 0 1 7 22H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3a2 2 0 0 1 1.985 1.75c.563-.66 1.045-2.055 1.341-4.202A2.952 2.952 0 0 1 13.25 1ZM7 8H4v12h3V8Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-like_svg__b' fill='#fff'>
        <use xlinkHref='#icons-like_svg__a' />
      </mask>
      <use xlinkHref='#icons-like_svg__a' fill='currentColor' fillRule='nonzero' />
      <g fill='currentColor' mask='url(#icons-like_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsLike
