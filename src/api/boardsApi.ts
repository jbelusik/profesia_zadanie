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
  put: async (): Promise<void> => {
    return await axios.put(url);
  },
};