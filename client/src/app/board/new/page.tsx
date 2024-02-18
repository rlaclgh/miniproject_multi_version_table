import CreateBoardForm from "@/components/create_board_form";
import Header from "@/components/header";

const CreateBoardPage = () => {
  return (
    <>
      <Header renderCenter={() => <div>게시물 생성</div>} />

      <div className="p-4">
        <CreateBoardForm />
      </div>
    </>
  );
};

export default CreateBoardPage;
