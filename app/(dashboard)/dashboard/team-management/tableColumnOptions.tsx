import { platform } from "os";
import { UserColumn } from "./_components/UserColumn";
import { User } from "./types";

function getColumnOptions() {
  const columnOptions = [
    {
      header: "User",
      accessor: (row: User) => <UserColumn row={row} />,
    },
    { header: "Email", accessor: "emailAddress" },
    {
      header: "Role",
      accessor: (row: User) => {
        switch (row.type) {
          case "ADMIN":
            return "Admin";
          case "NETWORK_MANAGER":
            return "User";
          case "CONTENT_EDITOR":
            return "Editor";
          default:
            return "Unknown";
        }
      },
    },
    {
      header: "Status",
      accessor: (row: User) =>
        row.status.toLowerCase() === "active" ? "Active" : "Inactive",
    },
  ];

  return columnOptions;
}

export default getColumnOptions;
