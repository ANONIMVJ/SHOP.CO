import * as React from "react"
const RightArrowIcon = (props) => (
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
      d="M4.167 10h11.666m0 0L10 4.167M15.833 10 10 15.833"
    />
  </svg>
)
export default RightArrowIcon
