import { OnRampStatus } from "./types";

export declare namespace tranferShapes {
  type TBalance = {
    amount: number;
    locked: number;
  };

  type TTxn = {
    id: number;
    userId: number;
    amount: number;
    status: OnRampStatus;
    token: string;
    provider: string;
    startTime: Date;
  };
}
