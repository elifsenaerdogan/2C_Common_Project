import type { SVGProps } from 'react'
const SvgIconsBasket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-basket_svg__a'
        d='M10.707 3.293a1 1 0 0 1 0 1.414L7.413 8h9.172l-3.292-3.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.414 0L19.414 8h.406a2 2 0 0 1 1.972 2.329l-1.527 9.164A3 3 0 0 1 17.305 22H6.696a3 3 0 0 1-2.96-2.507L2.208 10.33A2 2 0 0 1 4.18 8h.404l4.709-4.707a1 1 0 0 1 1.414 0zM19.82 10H4.18l1.528 9.164a1 1 0 0 0 .986.836h10.612a1 1 0 0 0 .986-.836L19.82 10zM8 12a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-basket_svg__b' fill='#fff'>
        <use xlinkHref='#icons-basket_svg__a' />
      </mask>
      <use xlinkHref='#icons-basket_svg__a' fill='#979797' fillRule='nonzero' />
      <g fill='currentColor' mask='url(#icons-basket_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsBasket
