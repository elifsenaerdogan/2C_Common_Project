import type { SVGProps } from 'react'
const SvgIconsCancel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-cancel_svg__a'
        d='M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16zM9.707 8.293a1 1 0 0 0-1.414 1.414L10.585 12l-2.292 2.293a1 1 0 0 0-.083 1.32l.083.094a1 1 0 0 0 1.414 0L12 13.415l2.293 2.292a1 1 0 0 0 1.32.083l.094-.083a1 1 0 0 0 0-1.414L13.415 12l2.292-2.293a1 1 0 0 0 .083-1.32l-.083-.094a1 1 0 0 0-1.414 0L12 10.585z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-cancel_svg__b' fill='#fff'>
        <use xlinkHref='#icons-cancel_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-cancel_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsCancel
