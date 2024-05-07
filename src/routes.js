import React from "react";
import { Icon } from "@chakra-ui/react";
import { MdWallet, MdHome } from "react-icons/md";
import { GrTransaction, GrMoney } from "react-icons/gr";
import { TbClockPlus } from "react-icons/tb";
import { RiBillLine, RiHandCoinFill } from "react-icons/ri";
import { TbPigMoney, TbCategory } from "react-icons/tb";
import MainDashboard from "views/user/default";
import Wallet from "views/user/wallet";
import Category from "views/user/categories";
import Bill from "views/user/bill";
import Transactions from "views/user/transaction";
import Saving from "views/user/saving";
import Budget from "views/user/budget";
import Debt from "views/user/debt";
import TransactionRecurring from "views/user/transaction_recurring";

const Routes = [
  {
    name: "Main Dashboard",
    layout: "/user",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Wallet",
    layout: "/user",
    icon: <Icon as={MdWallet} width="20px" height="20px" color="inherit" />,
    path: "/data-tables",
    component: Wallet,
  },
  {
    name: "Transactions",
    layout: "/user",
    path: "/transactions",
    icon: (
      <Icon as={GrTransaction} width="20px" height="20px" color="inherit" />
    ),
    component: Transactions,
  },
  {
    name: "Transactions Recurring",
    layout: "/user",
    path: "/recurring-transaction",
    icon: <Icon as={TbClockPlus} width="20px" height="20px" color="inherit" />,
    component: TransactionRecurring,
  },
  {
    name: "Budget",
    layout: "/user",
    path: "/budget",
    icon: <Icon as={GrMoney} width="20px" height="20px" color="inherit" />,
    component: Budget,
  },
  {
    name: "Goals",
    layout: "/user",
    path: "/save",
    icon: <Icon as={TbPigMoney} width="20px" height="20px" color="inherit" />,
    component: Saving,
  },
  {
    name: "Categories",
    layout: "/user",
    path: "/categories",
    icon: <Icon as={TbCategory} width="20px" height="20px" color="inherit" />,
    component: Category,
  },
  {
    name: "Bills",
    layout: "/user",
    path: "/bills",
    icon: <Icon as={RiBillLine} width="20px" height="20px" color="inherit" />,
    component: Bill,
  },
  {
    name: "Debt",
    layout: "/user",
    path: "/debt",
    icon: (
      <Icon as={RiHandCoinFill} width="20px" height="20px" color="inherit" />
    ),
    component: Debt,
  },
];

export default Routes;
