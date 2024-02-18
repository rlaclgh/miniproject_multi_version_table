import {
  MutationFunction,
  UseMutationOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import Axios, { CustomError } from ".";

/**
 * 게시물 생성
 */

interface CreateBoardProps {
  title: string;
  description: string;
  writer: string;
}

const createBoard: MutationFunction<AxiosResponse, CreateBoardProps> = (
  props
) => {
  const { title, description, writer } = props;
  return Axios({
    method: "post",
    url: `/board`,
    data: {
      title,
      description,
      writer,
    },
  });
};

export const useCreateBoard = (
  options?: UseMutationOptions<
    AxiosResponse,
    AxiosError<CustomError>,
    CreateBoardProps
  >
) => {
  return useMutation({
    mutationFn: createBoard,
    ...options,
  });
};

interface UpdateBoardProps {
  boardId: string;
  title: string;
  description: string;
}

const updateBoard: MutationFunction<AxiosResponse, UpdateBoardProps> = (
  props
) => {
  const { title, description, boardId } = props;
  return Axios({
    method: "patch",
    url: `/board/${boardId}`,
    data: {
      title,
      description,
    },
  });
};

export const useUpdateBoard = (
  options?: UseMutationOptions<
    AxiosResponse,
    AxiosError<CustomError>,
    UpdateBoardProps
  >
) => {
  return useMutation({
    mutationFn: updateBoard,
    ...options,
  });
};

/**
 * 게시물 리스트
 */

interface GetBoardsResponse {
  id: number;
  writer: string;
  title: string;
  description: string;
  createdAt: string;
}

const getBoards = async () => {
  const data = await Axios({
    method: "get",
    url: `/board`,
  });

  return data.data;
};

export const useGetBoards = () => {
  return useQuery<GetBoardsResponse[]>({
    queryKey: ["board"],
    queryFn: getBoards,
  });
};

/**
 * 게시물 리스트
 */

interface GetBoardResponse {
  id: number;
  writer: string;
  title: string;
  description: string;
  createdAt: string;

  snapshots: any[];
}

const getBoard = async (boardId: string) => {
  const data = await Axios({
    method: "get",
    url: `/board/${boardId}`,
  });

  return data.data;
};

export const useGetBoard = (boardId: string) => {
  return useQuery<GetBoardResponse>({
    queryKey: ["board", boardId],
    queryFn: () => getBoard(boardId),
  });
};
