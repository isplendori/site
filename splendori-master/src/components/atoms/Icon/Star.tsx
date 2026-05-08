export interface StarProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const Star = ({ width = 14, height = 14, color = "#8E90A1", className }: StarProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.65991 0.660156L8.65991 4.66016L12.6599 6.66016L8.65991 8.66016L6.65991 12.6602L4.65991 8.66016L0.659912 6.66016L4.65991 4.66016L6.65991 0.660156Z"
        stroke={color}
        strokeWidth="1.32"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Star;
