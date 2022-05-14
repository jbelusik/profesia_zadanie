import {
  model,
  Model,
  modelFlow,
  prop,
  tProp,
  types,
  _async,
} from "mobx-keystone";
import { boardsApi, IBoardsResponse } from "../api/boardsApi";

@model("Item")
export class ItemModel extends Model({
  id: prop<string>(),
  name: prop<string>(),
}) {}

@model("List")
export class ListModel extends Model({
  id: prop<string>(),
  name: prop<string>(),
  items: prop<ItemModel[]>(),
}) {
  @modelFlow
  addItem = _async(function* (this: ListModel, boardId: string, name: string) {
    const id = yield boardsApi.postItem(boardId, this.id, name);

    this.items.push(
      new ItemModel({
        id,
        name,
      })
    );
  });
}

@model("Board")
export class BoardModel extends Model({
  id: prop<string>(),
  name: prop<string>(),
  lists: prop<ListModel[]>(),
}) {
  @modelFlow
  addList = _async(function* (this: BoardModel, name: string) {
    const id = yield boardsApi.postList(this.id, name);

    this.lists.push(
      new ListModel({
        id,
        name,
        items: [],
      })
    );
  });
}

@model("Boards")
export class BoardsModel extends Model({
  boards: tProp(types.array(types.model(BoardModel))),
  loaded: tProp(types.boolean, false),
}) {
  @modelFlow
  load = _async(function* (this: BoardsModel) {
    if (this.loaded) {
      return;
    }

    const data: IBoardsResponse = yield boardsApi.get();
    this.boards = data.boards.map((board) => {
      return new BoardModel({
        name: board.name,
        id: board.id,
        lists: board.lists?.map((list) => {
          return new ListModel({
            name: list.name,
            id: list.id,
            items: list.items.map((item) => {
              return new ItemModel({
                id: item.id,
                name: item.name,
              });
            }),
          });
        }),
      });
    });
    this.loaded = true;
  });

  @modelFlow
  addBoard = _async(function* (this: BoardsModel, name: string) {
    const id = yield boardsApi.postBoard(name);

    this.boards.push(
      new BoardModel({
        id,
        name,
        lists: [],
      })
    );
  });
}

export const createStore = (): BoardsModel => {
  return new BoardsModel({
    boards: [],
    loaded: false,
  });
};
