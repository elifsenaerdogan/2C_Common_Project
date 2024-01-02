import type { SVGProps } from 'react'
const SvgIconsOffer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-offer_svg__a'
        d='M8.657 0a3 3 0 0 1 2.121.879l8.758 8.757a3 3 0 0 1 0 4.243l-5.657 5.657a3 3 0 0 1-4.243 0L.879 10.778A3 3 0 0 1 0 8.657V2a2 2 0 0 1 2-2h6.657ZM2 2v6.657a1 1 0 0 0 .293.707l8.757 8.757a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0 0-1.414L9.364 2.293A1 1 0 0 0 8.657 2H2Zm5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd' transform='translate(2 2)'>
      <mask id='icons-offer_svg__b' fill='#fff'>
        <use xlinkHref='#icons-offer_svg__a' />
      </mask>
      <use xlinkHref='#icons-offer_svg__a' fill='#979797' fillRule='nonzero' />
      <g fill='currentColor' mask='url(#icons-offer_svg__b)'>
        <path d='M-2-2h24v24H-2z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsOffer
