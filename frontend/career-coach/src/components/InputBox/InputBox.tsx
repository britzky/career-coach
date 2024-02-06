interface InputBoxProps {
    placeholder: string;
}


export const InputBox: React.FC<InputBoxProps> = ({placeholder}) => {
  return (
    <>
        <input className="w-full h-10" type="text" placeholder={placeholder} required/>
    </>
  )
}

