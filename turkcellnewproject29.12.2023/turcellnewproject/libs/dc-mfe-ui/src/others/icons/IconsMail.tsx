import type { SVGProps } from 'react'
const SvgIconsMail = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='icons-mail_svg__a' d='M20 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16Zm0 4.043-6.772 5.269a2 2 0 0 1-2.456 0L4 8.044V18h16V8.043ZM19.37 6H4.629L12 11.733 19.37 6Z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-mail_svg__b' fill='#fff'>
        <use xlinkHref='#icons-mail_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-mail_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsMail
