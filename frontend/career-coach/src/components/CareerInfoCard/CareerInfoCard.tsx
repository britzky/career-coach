interface CareerInfoCardProps {
  text: string;
  tag: string;
  onCardClick: (tag: string) => void;
}

export const CareerInfoCard: React.FC<CareerInfoCardProps> = ({ text, tag, onCardClick }) => {
  return (
      <div
        className="border-2 border-purpleText w-[250px] h-[200px] rounded-[10px] cursor-pointer"
        onClick={() => onCardClick(tag)}
      >
        <div className="flex justify-center items-center min-h-[200px]">
          <p className="text-purpleText text-base font-medium text-center">{text}</p>
        </div>
      </div>
  )
}


