import {
  model,
  Model,
  modelAction,
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
}) {}

@model("Board")
export class BoardModel extends Model({
  id: prop<string>(),
  name: prop<string>(),
  lists: prop<ListModel[]>(),
}) {}

@model("Boards")
export class BoardsModel extends Model({
  boards: tProp(types.array(types.model(BoardModel))),
  loaded: tProp(types.boolean, false),
}) {
  @modelFlow
  load = _async(function* (this: BoardsModel) {
    console.log("laod");
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

  @modelAction
  add(board: BoardModel) {
    this.boards.push(board);
  }

  @modelFlow
  save = _async(function* (this: BoardsModel, name: string) {
    yield boardsApi.post(name);
    this.loaded = false;
  });
}

export const createStore = (): BoardsModel => {
  return new BoardsModel({
    boards: [],
    loaded: false,
  });
};
