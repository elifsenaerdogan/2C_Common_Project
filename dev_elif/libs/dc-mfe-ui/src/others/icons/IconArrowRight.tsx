import type { SVGProps } from 'react';
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M14.427 5.26a1 1 0 0 1 1.347 1.48L10 12l5.774 5.26a1 1 0 0 1-1.347 1.48l-5.774-5.262a2 2 0 0 1 0-2.956l5.774-5.261z"
        id="auiq9z0aka"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <mask id="al9ncf35jb" fill="#fff">
        <use xlinkHref="#auiq9z0aka" transform="rotate(-180 12.05 12)" />
      </mask>
      <g mask="url(#al9ncf35jb)" fill="#253342">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);
export default ArrowRight;
