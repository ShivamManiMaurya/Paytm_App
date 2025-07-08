import { ComponentType } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { BiTransfer } from "react-icons/bi";
import { IoIosTimer } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

type TSideBar = {
  label: TLabel;
  icon: ComponentType;
  route: ERoute;
};

export enum ERoute {
  home = "home",
  transfer = "transfer",
  transactions = "transactions",
  p2pTransactions = "p2p-transactions",
}

type TLabel = "Home" | "Transfer" | "Transactions" | "P2P Transactions";

export const sidebarItems: TSideBar[] = [
  {
    label: "Home",
    icon: IoHomeOutline,
    route: ERoute.home,
  },
  {
    label: "Transfer",
    icon: BiTransfer,
    route: ERoute.transfer,
  },
  {
    label: "Transactions",
    icon: IoIosTimer,
    route: ERoute.transactions,
  },
  {
    label: "P2P Transactions",
    icon: GoArrowUpRight,
    route: ERoute.p2pTransactions,
  },
];
