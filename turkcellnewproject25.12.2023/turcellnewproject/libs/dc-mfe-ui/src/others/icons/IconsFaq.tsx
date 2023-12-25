import type { SVGProps } from 'react'
const SvgIconsFaq = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='icons-faq_svg__a'
        d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-.449 11.58c.666 0 1.215.532 1.215 1.198a1.21 1.21 0 0 1-1.215 1.214 1.21 1.21 0 0 1-1.214-1.214c0-.666.55-1.198 1.214-1.198ZM11.834 6c1.963 0 3.742 1.264 3.742 3.143 0 1.564-.831 2.445-2.894 3.46l-.116 1.447c-.017.15-.1.25-.25.25H11.02c-.15 0-.233-.1-.25-.25l-.149-2.345c-.017-.15.066-.233.216-.283 1.963-.615 2.428-1.23 2.428-1.98 0-.814-.798-1.247-1.58-1.247-.914 0-1.63.45-2.245.998-.183.167-.366.183-.516 0l-.815-.98c-.133-.167-.15-.334-.016-.5C8.89 6.748 10.22 6 11.834 6Z'
      />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='icons-faq_svg__b' fill='#fff'>
        <use xlinkHref='#icons-faq_svg__a' />
      </mask>
      <use xlinkHref='#icons-faq_svg__a' fill='#979797' fillRule='nonzero' />
      <g fill='currentColor' mask='url(#icons-faq_svg__b)'>
        <path d='M0 0h24v24H0z' />
      </g>
    </g>
  </svg>
)
export default SvgIconsFaq
