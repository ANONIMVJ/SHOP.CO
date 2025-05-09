import * as React from "react"
const LeftArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 20}
    height={props.height ?? 20}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.67}
      d="M15.833 10H4.167m0 0L10 15.833M4.167 10 10 4.167"
    />
  </svg>
)
export default LeftArrowIcon
