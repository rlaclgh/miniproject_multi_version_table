"use client";

import Board from "@/components/board";
import BoardSnapshot from "@/components/board_snapshot";
import Header from "@/components/header";
import { useGetBoard } from "@/query/board";
import { useParams, useRouter } from "next/navigation";

const BoardPage = () => {
  const params = useParams();
  const boardId = params.boardId.toString();
  const { data: board } = useGetBoard(boardId);
  const router = useRouter();

  if (!board) return <></>;

  return (
    <>
      <Header
        renderCenter={() => <div>게시물</div>}
        renderRight={() => (
          <button
            className="bg-blue h-8 pr-2 pl-2 rounded-xl"
            onClick={() => {
              router.push(`/board/${boardId}/update`);
            }}
          >
            <span className="text-white text-base">수정</span>
          </button>
        )}
      />

      <div className="p-4">
        <Board
          id={board.id}
          writer={board?.writer}
          title={board.title}
          description={board.description}
          createdAt={board.createdAt}
        />

        <div>snapshots(수정 사항)</div>
        <div className="pl-4">
          {board.snapshots.map((snapshot) => {
            return <BoardSnapshot {...snapshot} key={snapshot.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default BoardPage;
