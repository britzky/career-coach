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
    <div className="flex flex-col justify-between items-center border-2 border-purpleText rounded-md  p-5 w-[350px] h-[300px] lg:min-h-[30rem] lg:max-w-[24rem]">
      <img src={image} alt="Hard-working individual" className="rounded-md w-[100px] h-[100px] lg:w-48 lg:h-48 object-cover"/>
      <div>
        <h5 className="font-bold text-sm text-purpleText text-center">{name}</h5>
        <h6 className="text-[16px] text-purpleText text-center">{title}</h6>
      </div>
      <p className="font-medium text-xxs leading-5 lg:text-sm text-center max-w-[17rem]">Fun Fact: {fact}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="Hard-working individual" />
      </a>
    </div>
  )
}
