import React, { SVGProps } from "react";

export default function CloudL(
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
        d="M22.8886 32.6923C2.42041 34.9665 -0.801443 45.0111 0.14616 49.7491H146.552C137.455 25.8696 111.49 28.4281 99.6454 32.6923C102.014 21.7949 97.3712 0 59.8461 0C22.321 0 19.5723 21.7949 22.8886 32.6923Z"
        fill={props.fill}

      />
    </svg>
  );
}
