import type { SVGProps } from 'react'
const SvgIconsCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-camera_svg__a'
        d='M15 2a2 2 0 0 1 2 2v2h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2V4a2 2 0 0 1 2-2h6zm4 6H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm3-8H9v2h6V4z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-camera_svg__b' fill='#fff'>
        <use xlinkHref='#icons-camera_svg__a' />
      </mask>
      <use xlinkHref='#icons-camera_svg__a' fill='#979797' fillRule='nonzero' />
      <g fill='currentColor' mask='url(#icons-camera_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsCamera
