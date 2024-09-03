import React, { SVGProps } from "react";

export default function CloudR(
  props: SVGProps<SVGSVGElement>
): React.ReactElement {
  return (
    <svg
      width="147"
      height="50"
      viewBox="0 0 147 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M123.663 32.6923C144.131 34.9665 147.353 45.0111 146.406 49.7491H0C9.09698 25.8696 35.0613 28.4281 46.9063 32.6923C44.5373 21.7949 49.1806 0 86.7056 0C124.231 0 126.979 21.7949 123.663 32.6923Z"
        fill={props.fill}
      />
    </svg>
  );
}
