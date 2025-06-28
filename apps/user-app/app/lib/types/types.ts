// lib/types.ts
export interface ApiResponse<T = null> {
  success: boolean;
  message: string;
  status: number;
  data?: T;
}

export interface ExtendedSession {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  expires: string;
}

export type ActionResponse = {
  success: boolean;
  message: string;
  status: number;
  data?: any;
};

export enum OnRampStatus {
  Success = "Success",
  Failure = "Failure",
  Processing = "Processing",
}

export enum EFilters {
  SEND = "Send",
  RECEIVE = "Receive",
  ADD = "Add",
  ALL = "All",
}
