import type { SVGProps } from 'react';
const SvgIconsFavoriteFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="heart"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 36 32"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="nonzero"
      stroke="currentColor"
      className="heart-line"
      d="M3.058 2.738l-.104.104C-.983 6.779-.985 13.165 2.95 17.1l12.678 12.678c.847.847 2.213.849 3.062 0L31.368 17.1c3.938-3.938 3.938-10.317-.004-14.258l-.104-.104c-3.654-3.654-9.578-3.65-13.237.009l-.614.614c-.137.137-.363.137-.5 0l-.614-.614C12.638-.91 6.709-.913 3.058 2.738zM15.89 4.38c.7.7 1.836.7 2.536 0l.614-.614c3.097-3.097 8.11-3.1 11.201-.009l.104.104c3.379 3.38 3.38 8.846.004 12.221L17.671 28.76c-.285.285-.74.285-1.024 0L3.968 16.08C.596 12.71.598 7.235 3.972 3.86l.104-.104c3.088-3.088 8.106-3.085 11.2.009l.615.614z"
      transform="translate(-1254 -352) translate(1255 353)"
    />
    <path
      fill="currentColor"
      className="heart-fill"
      d="M15.994 3.47C12.784.213 7.577.215 4.368 3.47l-.258.262C.48 7.412.48 13.379 4.107 17.056l12.445 12.619c.556.563 1.462.558 2.013 0L31.01 17.056c3.628-3.679 3.629-9.642-.002-13.324l-.26-.263c-3.21-3.255-8.413-3.256-11.625 0l-1.057 1.073c-.28.284-.736.282-1.014 0l-1.058-1.073z"
      transform="translate(-1254 -352) translate(1239 328) translate(16 25)"
    />
  </svg>
);
export default SvgIconsFavoriteFill;
