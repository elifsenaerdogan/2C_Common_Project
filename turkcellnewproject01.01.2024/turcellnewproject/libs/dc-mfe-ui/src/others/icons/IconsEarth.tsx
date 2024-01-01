import type { SVGProps } from 'react'
const SvgIconsEarth = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-earth_svg__a'
        d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a7.964 7.964 0 0 0-3.877 1h1.759a1.691 1.691 0 0 1 1.512 2.447l-.394.79v1.349A2 2 0 0 1 10.414 11l-1.592 1.592a2 2 0 0 1-.52.375L7 13.618v.882l3.2 2.4a2 2 0 0 1 .8 1.6v1.438a7.998 7.998 0 0 0 8-4.061v-1.342l-2.334-1.556a2 2 0 0 1-.68-.77l-.715-1.43a2 2 0 0 1-.151-1.38l.72-2.884c.112-.446.369-.826.712-1.093A7.956 7.956 0 0 0 12 4ZM9.382 7H5.754A8.003 8.003 0 0 0 9 19.418V18.5l-3.2-2.4a2 2 0 0 1-.8-1.6v-.882a2 2 0 0 1 1.106-1.789l1.302-.65L9 9.585v-1.35a2 2 0 0 1 .211-.894L9.382 7Zm8.864 0h-.465l-.721 2.884.716 1.431 2.187 1.459A7.966 7.966 0 0 0 18.246 7Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-earth_svg__b' fill='#fff'>
        <use xlinkHref='#icons-earth_svg__a' />
      </mask>
      <g fill='currentColor' mask='url(#icons-earth_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsEarth
