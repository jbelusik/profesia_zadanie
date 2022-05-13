import { idProp, model, Model, modelAction, prop } from "mobx-keystone";
import { boardsApi } from "../api/boardsApi";

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
  loaded: prop<false>(),
}) {
  @modelAction
  load() {
    boardsApi.get().then((data) => {
      console.log(data);
    });
  }
}

export const createStore = (): Boards => {
  return new Boards({
    boards: [],
    loaded: false,
  });
};
