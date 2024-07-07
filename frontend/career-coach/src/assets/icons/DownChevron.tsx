interface DownChevronProps {
    height: string;
    width: string;
}

export const DownChevron: React.FC<DownChevronProps> = ({height, width}) => {
  return (
        <svg height={height} width={width} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330.002 330.002" xmlSpace="preserve">
            <defs>
                <linearGradient id="downChevronGradient" x1="0%" y1="0%" x2='100%' y2="0%">
                    <stop offset="3.21%" stopColor="#448FD9" />
                    <stop offset="33.63%" stopColor="#A270C0" />
                    <stop offset="65.59%" stopColor="#D76573" />
                    <stop offset="96.17%" stopColor="#F0944C" />
                </linearGradient>
            </defs>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path fill="url(#downChevronGradient)" stroke="url(#downChevronGradient)" strokeWidth="25" d="M327.001,99.751c-4.971-6.628-14.374-7.971-21-3l-140.997,105.75L24.001,96.751 c-6.628-4.971-16.029-3.626-21,3c-4.971,6.627-3.627,16.03,3,21l150.004,112.5c2.667,2,5.833,3,9,3c3.166,0,6.333-1,9-3 l149.996-112.5C330.628,115.781,331.972,106.379,327.001,99.751z"></path>
            </g>
        </svg>
  )
}

