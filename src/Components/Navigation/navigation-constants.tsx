import {
  RiDashboardLine,
  RiChat4Line,
  RiMailLine,
  RiTaskLine,
  RiTableLine,
  RiUserLine,
} from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { colors } from "../../lib/theme";

export const mainMenu = [
  {
    route: "/",
    logo: RiDashboardLine,
    name: "Dashboard",
    options: [],
  },
  {
    route: "/tasks",
    logo: RiTaskLine,
    name: "Tasks",
    options: [],
  },
  {
    route: "/email",
    logo: RiMailLine,
    name: "Email",
    options: [],
  },
  {
    route: "/contacts",
    logo: RiUserLine,
    name: "Contacts",
    options: [],
  },
  {
    route: "/chat",
    logo: RiChat4Line,
    name: "Chat",
    options: [],
  },
  {
    route: "/deals",
    logo: RiTableLine,
    name: "Deals",
    options: [
      {
        text: "Low",
        color: colors.secondary1,
        hash: "low",
      },
      {
        text: "High",
        color: colors.secondary3,
        hash: "high",
      },
      {
        text: "Urgent",
        color: colors.secondary2,
        hash: "urgent",
      },
    ],
  },
];

export const sideMenu = [
  {
    route: "/settings",
    logo: BsThreeDots,
    name: "Settings",
    options: [] as object[],
  },
];
