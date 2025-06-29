import { Moment } from "moment";
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

  type TToUser = {
    isToUser: boolean;
    name: string;
  };

  type TFromUser = {
    isFromUser: boolean;
    name: string;
  };

  type TP2pTxns = {
    id: number;
    amount: number;
    timeStamp: Date;
    fromUserId: number;
    toUserIds: number;
    toUserDetails: TToUser;
    fromUserDetails: TFromUser;
  };

  type TExtended = {
    date: Moment;
    source: "P2P" | "Bank";
  };

  type TCombinedTxn = TTxn & TExtended;
  type TCombinedTP2P = TP2pTxns & TExtended;

  type allTransactions = (TCombinedTxn | TCombinedTP2P)[];

  type TAutoWebhook = {
    id: number;
    isAutoWebhook: boolean;
  };
}
