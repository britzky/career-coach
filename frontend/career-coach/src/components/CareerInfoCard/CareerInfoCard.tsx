interface CareerInfoCardProps {
  text: string;
  tag: string;
  years?: string;
  onCardClick: (tag: string) => void;
  selected?: boolean
}

export const CareerInfoCard: React.FC<CareerInfoCardProps> = ({ text, tag, years, onCardClick, selected }) => {
  const customClass = selected ? 'bg-purpleText text-white w-[250px] h-[200px] rounded-[10px] cursor-pointer flex flex-col justify-center items-center min-h-[200px] text-base font-medium text-center' : 'border-2 border-purpleText hover:bg-cardHover w-[250px] h-[200px] rounded-[10px] cursor-pointer flex flex-col justify-center items-center min-h-[200px] text-purpleText text-base font-medium text-center'
  return (
      <div className={customClass} onClick={() => onCardClick(tag)}>
        <p>{text}</p>
        {years && <p>{years}</p>}
      </div>
  )
}


