import { DATE_FORMAT, formatDate } from "@/utils/date";

interface BoardProps {
  id: number;
  writer: string;
  title: string;
  description: string;
  createdAt: string;
}
const Board = (props: BoardProps) => {
  const { id, writer, title, description, createdAt } = props;
  return (
    <>
      <div
        className="border-gray-light border p-4 mb-4 rounded"
        id={id.toString()}
      >
        <div className="mb-2">작성자: {writer}</div>
        <div className="flex justify-between mb-2">
          <div>{title}</div>
          <div className="text-sm text-gray">
            {formatDate(createdAt, DATE_FORMAT.FULL_DATE_WITH_TIME)}
          </div>
        </div>
        <div className="text-sm">{description}</div>
      </div>
    </>
  );
};

export default Board;
