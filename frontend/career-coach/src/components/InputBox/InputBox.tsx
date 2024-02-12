interface InputBoxProps {
    placeholder: string;
    border?: boolean;
    value?: number | string; // added this line
    onChange?: (value: string) => void;
    onBlur?: (value: string) => void;
    required?: boolean;
}

export const InputBox: React.FC<InputBoxProps> = ({ placeholder, border=false, value, onChange, required=false, onBlur }) => {
  const inputClass = border ? "w-full h-10 px-2 rounded-md border-2 border-purpleText" : "w-full h-10 px-2 rounded-md";

  return (
    <>
        <input
          className={inputClass}
          type="text"
          placeholder={placeholder}
          value={value} // added this line
          onChange={(e) => onChange && onChange(e.target.value)}
          onBlur={(e) => onBlur && onBlur(e.target.value)}
          required={required}
        />
    </>
  )
}

