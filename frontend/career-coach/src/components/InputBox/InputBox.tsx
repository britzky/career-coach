interface InputBoxProps {
    placeholder: string;
    border?: boolean;
    onChange?: (value: string) => void;
}

export const InputBox: React.FC<InputBoxProps> = ({ placeholder, border=false, onChange }) => {
  const inputClass = border ? "w-full h-10 px-2 rounded-md border-2 border-purpleText" : "w-full h-10 px-2 rounded-md";

  return (
    <>
        <input
          className={inputClass}
          type="text"
          placeholder={placeholder}
          onChange={(e) => onChange && onChange(e.target.value)}
          // required # it says (optional) so I think we disable this?
        />
    </>
  )
}

