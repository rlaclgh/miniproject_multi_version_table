"use client";

import { useGetBoard, useUpdateBoard } from "@/query/board";
import { toast } from "react-toastify";
import TextInput from "./text_input";
import TextareaInput from "./textarea_input";
import { RULES } from "@/constants/rules";
import TextButton from "./text_button";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

interface FormProps {
  title: string;
  description: string;
}

const UpdateBoardForm = () => {
  const params = useParams();
  const boardId = params.boardId.toString();

  const { data: board } = useGetBoard(boardId);
  const router = useRouter();

  const { mutate: updateBoard } = useUpdateBoard({
    onSuccess: ({ data }) => {
      toast.success("게시물을 수정했습니다.");
      router.push("/");
    },
    onError: (data) => {
      //   toast.error(data?.response?.data?.message);
    },
  });

  const { control, formState, getValues, setValue } = useForm<FormProps>({
    defaultValues: {
      title: board?.title,
      description: board?.description,
    },

    mode: "onChange",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    if (!board) return;
    setValue("title", board?.title);
    setValue("description", board?.description);
  }, [board]);

  return (
    <>
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
          text="수정"
          onClick={() => {
            updateBoard({
              boardId,
              title: getValues("title"),
              description: getValues("description"),
            });
          }}
          disabled={!formState.isValid}
        />
      </div>
    </>
  );
};

export default UpdateBoardForm;
