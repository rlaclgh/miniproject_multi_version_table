"use client";
import Boards from "@/components/boards";
import Header from "@/components/header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Header
        renderCenter={() => <div>메인 페이지</div>}
        renderRight={() => (
          <button
            className="bg-blue h-8 pr-2 pl-2 rounded-xl"
            onClick={() => {
              router.push("/board/new");
            }}
          >
            <span className="text-white text-base">생성</span>
          </button>
        )}
      />

      <Boards />
    </div>
  );
}
