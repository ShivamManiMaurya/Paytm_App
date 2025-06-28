import { tranferShapes } from "../types/transferShapes";
import { EFilters } from "./../types/types";

const filterFn = (
  filter: EFilters,
  allTransactions: tranferShapes.allTransactions
) => {
  switch (filter) {
    case EFilters.SEND:
      return allTransactions.filter(
        (tr) =>
          tr.source === "P2P" &&
          "fromUserDetails" in tr &&
          tr.fromUserDetails.isFromUser
      );
    case EFilters.RECEIVE:
      return allTransactions.filter(
        (tr) =>
          tr.source === "P2P" &&
          "toUserDetails" in tr &&
          tr.toUserDetails.isToUser
      );
    case EFilters.ADD:
      return allTransactions.filter((tr) => tr.source === "Bank");
    default:
      return allTransactions;
  }
};

export default filterFn;
