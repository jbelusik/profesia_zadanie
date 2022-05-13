import { idProp, model, Model, modelFlow, prop, _async } from "mobx-keystone";
import { boardsApi, IBoardsResponse } from "../api/boardsApi";

@model("Item")
export class Item extends Model({
  id: idProp,
  name: prop<string>(),
}) {}

@model("List")
export class List extends Model({
  id: idProp,
  name: prop<string>(),
  items: prop<Item[]>(),
}) {}

@model("Board")
export class Board extends Model({
  id: idProp,
  name: prop<string>(),
  lists: prop<List[]>(),
}) {}

@model("Boards")
export class Boards extends Model({
  boards: prop<Board[]>(),
  loaded: prop<boolean>(false),
}) {
  @modelFlow
  load = _async(function* (this: Boards) {
    if (this.loaded) {
      return;
    }

    const data: IBoardsResponse = yield boardsApi.get();
    this.boards = data.boards.map((board) => {
      return new Board({
        name: board.name,
        id: board.id,
        lists: board.lists?.map((list) => {
          return new List({
            name: list.name,
            id: list.id,
            items: list.items.map((item) => {
              return new Item({
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
}

export const createStore = (): Boards => {
  return new Boards({
    boards: [],
    loaded: false,
  });
};
