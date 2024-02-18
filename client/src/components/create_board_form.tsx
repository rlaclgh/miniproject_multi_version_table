"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import TextInput from "./text_input";
import TextButton from "./text_button";
import TextareaInput from "./textarea_input";
import { RULES } from "@/constants/rules";
import { useCreateBoard } from "@/query/board";

interface FormProps {
  title: string;
  description: string;
}

const CreateBoardForm = () => {
  const router = useRouter();
  const { mutate: createBoard } = useCreateBoard({
    onSuccess: ({ data }) => {
      toast.success("게시물을 생성했습니다.");
      router.push("/");
    },
    onError: (data) => {
      toast.error(data?.response?.data?.message);
    },
  });

  const { control, formState, getValues } = useForm<FormProps>({
    defaultValues: {
      title: "",
      description: "",
    },

    mode: "onChange",
    reValidateMode: "onChange",
  });

  const userId =
    typeof window !== "undefined"
      ? sessionStorage?.getItem("userId") || ""
      : "";

  return (
    <div>
      <TextInput
        label="제목"
        name="title"
        type="text"
        control={control}
        disabled={false}
        rules={RULES.REQUIRED}
      />

      <TextareaInput
        label="본문"
        name="description"
        control={control}
        disabled={false}
        rules={RULES.REQUIRED}
      />

      <div className="h-10" />

      <TextButton
        text="생성"
        onClick={() => {
          createBoard({
            writer: userId,
            title: getValues("title"),
            description: getValues("description"),
          });
        }}
        disabled={!formState.isValid}
      />
    </div>
  );
};

export default CreateBoardForm;
