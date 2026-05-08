export interface ArrowUpLeftProps {
  className?: string;
  stroke?: string;
}

const ArrowUpLeft = ({ className, stroke = "#1A1A20" }: ArrowUpLeftProps) => {
  return (
    <div className={className || "size-2"}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.32 9.32">
        <path
          d="M8.65991 0.660156L0.659912 8.66016M8.65991 0.660156H1.45991M8.65991 0.660156V7.86016"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.32"
          className="transition-colors"
        />
      </svg>
    </div>
  );
};

export default ArrowUpLeft;
