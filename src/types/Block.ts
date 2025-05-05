export interface Block {
  id: number;
  cardId: number;
  blockedAt: string;
  blockReason: string;
  unblockedAt?: string;
  unblockReason?: string;
}

export interface BlockCardRequest {
  reason: string;
}

export interface UnblockCardRequest {
  reason: string;
}

export interface BlockStatus {
  blocked: boolean;
}
