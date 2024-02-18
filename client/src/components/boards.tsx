"use client";
import { useGetBoards } from "@/query/board";
import Board from "./board";
import { useRouter } from "next/navigation";

const Boards = () => {
  const { data: boards } = useGetBoards();

  const router = useRouter();

  if (!boards) return <div className="p-4">loading....</div>;
  if (boards.length === 0) return <div className="p-4">게시물이 없습니다.</div>;
  return (
    <div className="p-4">
      {boards.map((board) => {
        return (
          <div
            onClick={() => {
              router.push(`/board/${board.id}`);
            }}
            key={board.id}
          >
            <Board {...board} key={board.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Boards;
