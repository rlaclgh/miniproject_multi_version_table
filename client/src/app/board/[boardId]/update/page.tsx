import Header from "@/components/header";
import UpdateBoardForm from "@/components/update_board_form";

const UpdateBoardPage = () => {
  return (
    <>
      <Header renderCenter={() => <div>게시물 수정</div>} />
      <div className="p-4">
        <UpdateBoardForm />
      </div>
    </>
  );
};

export default UpdateBoardPage;
