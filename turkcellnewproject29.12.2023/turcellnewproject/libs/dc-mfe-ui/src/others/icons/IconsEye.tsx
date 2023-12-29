import type { SVGProps } from 'react'
const SvgIconsEye = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-eye_svg__a'
        d='M12 6c3.009 0 5.997 1.244 8.948 3.69a3 3 0 0 1 0 4.62C17.997 16.756 15.008 18 12 18c-3.009 0-5.997-1.244-8.948-3.69a3 3 0 0 1 0-4.62C6.003 7.244 8.992 6 12 6Zm0 2c-2.504 0-5.057 1.063-7.672 3.23a1 1 0 0 0 0 1.54C6.943 14.937 9.496 16 12 16c2.504 0 5.057-1.063 7.672-3.23a1 1 0 0 0 0-1.54C17.057 9.063 14.504 8 12 8Zm0 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-eye_svg__b' fill='#fff'>
        <use xlinkHref='#icons-eye_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-eye_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsEye
