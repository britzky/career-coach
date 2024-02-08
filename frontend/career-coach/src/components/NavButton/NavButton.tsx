import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  back?: boolean;
  to?: string;
  children?: React.ReactNode;
}

export const NavButton: React.FC<ButtonProps> = ({ children, back, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to !== undefined){
      navigate(to);
    }
  }
  return (
    <>
    {back ? (
      <button type="button" onClick={handleClick} className="text-buttonText bg-buttonWhite hover:bg-hoverButton focus:ring-1 focus:bg-clickedButton font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 shadow-md">
        <WestIcon className="mr-2" />
        {children}
      </button>
    ):(
      <button type="button" onClick={handleClick} className="text-buttonText bg-buttonWhite hover:bg-hoverButton focus:ring-1 focus:bg-clickedButton font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 shadow-md">
        {children}
        <EastIcon className="ml-2" />
      </button>
    )}
    </>
  );
};
