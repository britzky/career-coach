import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

interface ButtonProps {
  onClick?: () => void;
  back?: boolean;
  children?: React.ReactNode;
}

export const NavButton: React.FC<ButtonProps> = ({ onClick, children, back }) => {
  return (
    <>
    {back ? (
      <button type="button" onClick={onClick} className="text-buttonText bg-buttonWhite hover:bg-hoverButton focus:ring-1 focus:bg-clickedButton font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 shadow-md">
        <WestIcon className="mr-2" />
        {children}
      </button>
    ):(
      <button type="button" onClick={onClick} className="text-buttonText bg-buttonWhite hover:bg-hoverButton focus:ring-1 focus:bg-clickedButton font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 shadow-md">
        <EastIcon className="ml-2" />
        {children}
      </button>
    )}
    </>
  );
};
