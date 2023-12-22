import type { SVGProps } from 'react';
const SvgIconsFavorite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    viewBox="0 0 25.456 27.728"
    {...props}
  >
    <defs>
      <path
        id="icons-favorite_svg__a"
        d="M5.728 19.728h10.2a3.8 3.8 0 0 0 0-7.6h-2.6v-2.6a3.8 3.8 0 0 0-7.6 0v10.2Zm10.2-9.6a5.8 5.8 0 1 1 0 11.6h-12.2v-12.2a5.8 5.8 0 1 1 11.6 0v.6h.6Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="icons-favorite_svg__b" fill="#fff">
        <use xlinkHref="#icons-favorite_svg__a" />
      </mask>
      <g fill="currentColor" mask="url(#icons-favorite_svg__b)">
        <path d="M.728 3.728h24v24h-24z" />
      </g>
    </g>
  </svg>
);
export default SvgIconsFavorite;
