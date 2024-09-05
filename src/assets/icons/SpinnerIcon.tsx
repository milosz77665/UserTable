import { FC } from "react";

interface SpinnerIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const SpinnerIcon: FC<SpinnerIconProps> = ({ className, size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={className}
      width={size}
      height={size}
      color={color}
      strokeWidth="1.5"
    >
      <rect width="256" height="256" fill="none" />
      <path
        d="M168,40a97,97,0,0,1,56,88,96,96,0,0,1-192,0A97,97,0,0,1,88,40"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  );
};

export default SpinnerIcon;
