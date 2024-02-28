import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  back?: boolean;
  to?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const NavButton: React.FC<ButtonProps> = ({ children, back, to, onClick, disabled=false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (to !== undefined){
      navigate(to);
    }
  }

  const disabledClass = disabled ? 'text-disabled bg-buttonWhite font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center shadow-md' : 'text-buttonText bg-buttonWhite hover:bg-hoverButton focus:bg-clickedButton font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center shadow-md'

  return (
    <>
    {back ? (
      <button type="button" onClick={handleClick} disabled={disabled} className={disabledClass}>
        <WestIcon className="mr-2" />
        {children}
      </button>
    ):(
      <button type="button" onClick={handleClick} disabled={disabled} className={disabledClass}>
        {children}
        <EastIcon className="ml-2" />
      </button>
    )}
    </>
  );
};