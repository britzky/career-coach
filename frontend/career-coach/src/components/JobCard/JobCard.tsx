interface JobCardProps {
    selected: boolean;
    tag: string;
    onCardClick: (tag: string) => void;
    text: string;
}

export const JobCard: React.FC<JobCardProps> = ({ selected, onCardClick, tag, text }) => {
    const customClass = selected ? 'bg-purpleText text-white w-full rounded-[10px] cursor-pointer flex items-center text-base font-medium text-center pl-2' : 'border-2 border-purpleText w-full rounded-[10px] cursor-pointer flex items-center text-purpleText text-base font-medium text-center pl-2'
    return (
        <div className={customClass} onClick={() => onCardClick(tag)}>
          <p>{text}</p>
        </div>
    )
}
