import { DATE_FORMAT, formatDate } from "@/utils/date";

interface BoardSnapshotProps {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}
const BoardSnapshot = (props: BoardSnapshotProps) => {
  const { id, title, description, createdAt } = props;
  return (
    <>
      <div className="border-gray-light border p-4 mb-4 rounded">
        <div className="">
          {formatDate(createdAt, DATE_FORMAT.FULL_DATE_WITH_TIME)} 수정
        </div>
        <div className="flex justify-between">
          <div>{title}</div>
        </div>
        <div className="text-sm">{description}</div>
      </div>
    </>
  );
};

export default BoardSnapshot;
