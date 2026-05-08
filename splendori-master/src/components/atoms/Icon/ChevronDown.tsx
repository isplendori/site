export interface ChevronDownProps {
  className?: string;
  stroke?: string;
}

const ChevronDown = ({ className, stroke = "#8E90A1" }: ChevronDownProps) => {
  return (
    <div className={className || "h-[4.5px] w-2.25"}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.32 5.82">
        <path
          d="M1.32 1.32L5.16 5.16L9 1.32"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.32"
        />
      </svg>
    </div>
  );
};

export default ChevronDown;
