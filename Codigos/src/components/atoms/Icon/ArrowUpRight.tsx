export interface ArrowUpRightProps {
  className?: string;
  stroke?: string;
  strokeDasharray?: string;
}

const ArrowUpRight = ({
  className,
  stroke = "#1A1A20",
  strokeDasharray,
}: ArrowUpRightProps) => {
  return (
    <div className={className || "size-2"}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.32 9.32">
        <path
          d="M1.32 8L8 1.32M8 1.32H1.32M8 1.32V8"
          stroke={stroke}
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.32"
          className="transition-colors"
        />
      </svg>
    </div>
  );
};

export default ArrowUpRight;
