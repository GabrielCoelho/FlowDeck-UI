import { BoardColumn } from "./BoardColumn";

export interface Board {
  id: number;
  name: string;
  columns?: BoardColumn[];
}

export interface BoardSummary {
  id: number;
  name: string;
  columnCount: number;
  cardCount: number;
}

export interface CreateBoardRequest {
  name: string;
}

export interface UpdateBoardRequest {
  name: string;
}
