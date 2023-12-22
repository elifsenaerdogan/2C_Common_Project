import type { SVGProps } from 'react'
const SvgIconsComment = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-comment_svg__a'
        d='M12 20c-5.476 0-10-3.519-10-8s4.524-8 10-8 10 3.519 10 8a6.66 6.66 0 0 1-.8 3.15c-.132.247-.241 1.388-.232 3.19a2 2 0 0 1-2.852 1.819c-1.277-.601-2.124-.816-2.364-.738C14.57 19.8 13.302 20 12 20Zm0-2c1.094 0 2.155-.166 3.138-.483.89-.287 2.108.022 3.83.833-.01-2.175.113-3.478.467-4.141.373-.7.565-1.444.565-2.209 0-3.25-3.535-6-8-6s-8 2.75-8 6 3.535 6 8 6Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-comment_svg__b' fill='#fff'>
        <use xlinkHref='#icons-comment_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-comment_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsComment
