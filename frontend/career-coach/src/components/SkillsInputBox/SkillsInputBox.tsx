interface SkillsInputBoxProps {
    placeholder: string;
    border?: boolean;
    onChange?: (value: string) => void;
    onBlur?: (value: string) => void;
    required?: boolean;
}

export const SkillsInputBox: React.FC<SkillsInputBoxProps> = ({ placeholder, border=false, onChange, required=false, onBlur }) => {
  const inputClass = border ? "w-60 h-10 px-2 rounded-md border-2 border-purpleText" : "w-full h-10 px-2 rounded-md";

  return (
    <>
        <input
          className={inputClass}
          type="text"
          placeholder={placeholder}
          onChange={(e) => onChange && onChange(e.target.value)}
          onBlur={(e) => onBlur && onBlur(e.target.value)}
          required={required}
        />
    </>
  )
}

