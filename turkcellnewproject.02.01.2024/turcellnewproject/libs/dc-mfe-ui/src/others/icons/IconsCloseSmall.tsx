import type { SVGProps } from 'react'
const SvgIconsCloseSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-close-small_svg__a'
        d='M8.707 7.293 12 10.585l3.293-3.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414L13.415 12l3.292 3.293a1 1 0 0 1-1.414 1.414L12 13.415l-3.293 3.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1 0-1.414L10.585 12 7.293 8.707a1 1 0 0 1 1.414-1.414Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-close-small_svg__b' fill='#fff'>
        <use xlinkHref='#icons-close-small_svg__a' />
      </mask>
      <use xlinkHref='#icons-close-small_svg__a' fill='#979797' fillRule='nonzero' />
      <g fill='currentColor' mask='url(#icons-close-small_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsCloseSmall
