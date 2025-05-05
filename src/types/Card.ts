import { Block } from "./Block";

export interface Card {
  id: number;
  title: string;
  description?: string;
  boardColumnId: number;
  createdAt: string;
  updatedAt?: string;
  blocks?: Block[];
  isBlocked?: boolean;
}

export interface CardSummary {
  id: number;
  title: string;
  boardColumnId: number;
  isBlocked: boolean;
}

export interface CreateCardRequest {
  title: string;
  description?: string;
}

export interface UpdateCardRequest {
  title: string;
  description?: string;
}
