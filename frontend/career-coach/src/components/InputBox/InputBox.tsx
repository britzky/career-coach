interface InputBoxProps {
    placeholder: string;
    border?: boolean;
}

export const InputBox: React.FC<InputBoxProps> = ({ placeholder, border=false }) => {
  const inputClass = border ? "w-full h-10 px-2 rounded-md border-2 border-purpleText" : "w-full h-10 px-2 rounded-md";

  return (
    <>
        <input className={inputClass} type="text" placeholder={placeholder} required/>
    </>
  )
}

