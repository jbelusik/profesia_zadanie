import axios from "axios";

interface IItem {
  id: string;
  name: string;
}

interface IList {
  id: string;
  name: string;
  items: IItem[];
}

interface IBoard {
  id: string;
  name: string;
  lists: IList[];
}

export interface IBoardsResponse {
  boards: IBoard[];
}

const url = "http://localhost:3001/boards";

export const boardsApi = {
  get: async (): Promise<IBoardsResponse> => {
    return (await axios.get(url)).data;
  },
  postBoard: async (name: string): Promise<string> => {
    return (await axios.post(url, { name })).data;
  },
  postList: async (boardId: string, name: string): Promise<string> => {
    return (await axios.post(`${url}/${boardId}/lists`, { name })).data;
  },
  postItem: async (
    boardId: string,
    listId: string,
    name: string
  ): Promise<string> => {
    return (
      await axios.post(`${url}/${boardId}/lists/${listId}/items`, { name })
    ).data;
  },
};
