import linkedin from '../../assets/images/Linkedin.png'

interface TeamCardProps {
    image: string;
    name: string;
    title: string;
    fact: string;
    link: string;
}
export const TeamCard: React.FC<TeamCardProps> = ({image, name, title, fact, link}) => {
  return (
    <div className="flex flex-col items-center border-2 border-purpleText rounded-md gap-7 p-5 max-w-[24rem]">
      <img src={image} alt="Hard-working individual" />
      <h5 className="font-bold text-sm text-purpleText">{name}</h5>
      <h6 className="font-bold text-sm text-purpleText">{title}</h6>
      <p className="font-medium text-sm text-center">Fun Fact: {fact}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="Hard-working individual" />
      </a>
    </div>
  )
}
