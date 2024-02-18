"use client";

const ProjectDescription = () => {
  return (
    <div className="flex items-center h-full flex-col">
      <div className="w-120">
        <div className="text-5xl mb-10 mt-10">
          miniproject_multi_version_table{" "}
        </div>
        <div className="text-2xl my-2">1. 프로젝트 설명</div>
        <div className="text-xl my-2">
          1.1. 게시물 테이블을 snapshot으로 관리합니다.
        </div>
        <div className="text-xl my-2">
          1.2. 수정 시 테이블을 수정하지 않고 snapshot을 생성하므로 <br /> 이전
          정보를 보관할 수 있습니다.
        </div>
        <div className="text-xl my-2">1.3. ERD</div>
        <img src="miniproject_multi_version_table_erd.png" width={400} />
      </div>
    </div>
  );
};

export default ProjectDescription;
