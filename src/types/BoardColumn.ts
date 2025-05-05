import { Card } from "./Card";

export enum BoardColumnKind {
  INITIAL = "INITIAL",
  FINAL = "FINAL",
  CANCEL = "CANCEL",
  PENDING = "PENDING",
}

export interface BoardColumn {
  id: number;
  name: string;
  order: number;
  kind: BoardColumnKind;
  boardId: number;
  cards?: Card[];
}

export interface CreateBoardColumnRequest {
  name: string;
  kind: BoardColumnKind;
  order?: number;
}

export interface UpdateBoardColumnRequest {
  name: string;
  kind?: BoardColumnKind;
}

export interface ReorderColumnsRequest {
  columnIds: number[];
}
