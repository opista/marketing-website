import clsx from "clsx";

import { IconProps } from "./icon.types";

export const CheckCircleIcon = ({
  className,
  strokeWidth = 1.5,
}: IconProps) => (
  <svg
    className={clsx("size-4", className)}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
