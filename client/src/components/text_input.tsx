import { Control, Controller, RegisterOptions } from "react-hook-form";
import InputLabel from "./input_label";

interface TextInputProps {
  // input 상단에 보일 텍스트
  label: string;

  // react-hook-form 으로 관리하는 key 값
  name: string;

  // input 의 타입
  type: "password" | "text" | "number";

  // react-hook-form 의 controller
  control: Control<any>;

  // 입력가능 여부
  disabled: boolean;

  // placeholder
  placeholder?: string;

  // input validation
  rules?: Omit<
    RegisterOptions<any, any>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}
const TextInput = (props: TextInputProps) => {
  const { label, name, type, control, disabled, rules, placeholder } = props;

  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => {
          const hasError = !!fieldState?.error;
          const errorMessage = fieldState?.error?.message;

          return (
            <>
              <InputLabel label={label} name={name} />

              <div className="h-1" />
              <input
                className={`w-full h-12 px-3 border-solid border rounded outline-none text-sm  
                ${hasError ? "border-red" : "border-gray-light"}`}
                id={name}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                {...field}
              />

              {!hasError && <div className="h-4" />}
              {hasError && (
                <>
                  <div className="h-1" />
                  <div className="text-right h-3 text-sm text-red">
                    {errorMessage}
                  </div>
                </>
              )}
            </>
          );
        }}
      />
    </div>
  );
};

export default TextInput;
