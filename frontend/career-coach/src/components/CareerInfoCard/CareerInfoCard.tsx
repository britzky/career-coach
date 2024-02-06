interface CareerInfoCardProps {
  text: string;
}

export const CareerInfoCard: React.FC<CareerInfoCardProps> = ({text}) => {
  return (
      <div className="border-2 border-purple-400 w-64 h-40 p-10 rounded-md">
        <p className="text-purple-700">{text}</p>
      </div>
  )
}
