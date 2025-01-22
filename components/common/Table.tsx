import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import React from "react";
import { Checkbox } from "./Checkbox";

interface TableProps<T> {
  data: T[];
  columns: Array<{
    header: string;
    accessor: any;
  }>;
  enableSelection?: boolean;
  actions?: Array<{ label: string; onClick: (row: T) => void }>;
}

function Table<T>({
  data,
  columns,
  enableSelection,
  actions,
}: TableProps<T extends Object ? T : never>) {
  if (enableSelection && columns[0].accessor !== "select") {
    columns.unshift({
      header: "select",
      accessor: "select",
    });
  }

  if (actions && columns[columns.length - 1].accessor !== "actions") {
    columns.push({
      header: "Actions",
      accessor: "actions",
    });
  }

  return (
    <div className="p-6">
      <table className="table-auto w-full">
        <thead className="border-b border-gray-200">
          <tr className="text-left leading-10 text-black">
            {columns.map((column, index) => {
              if (column.header === "select") {
                return (
                  <th key={index} className="w-10">
                    <Checkbox></Checkbox>
                  </th>
                );
              } else {
                return <th key={index}>{column.header}</th>;
              }
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-200">
              {columns.map((column, index) => (
                <td key={index} className="py-4">
                  {column.accessor === "actions" && (
                    <DropdownMenu modal={false}>
                      <DropdownMenuTrigger>
                        <div className="flex">
                          Actions <Ellipsis className="pt-2" />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white w-48">
                        {actions?.map((action, index) => (
                          <DropdownMenuItem
                            className="font-nunito text-sm px-4 py-2 text-gray-700 hover:bg-gray-50 hover:font-bold hover:text-gray-950"
                            key={index}
                            onClick={() => action.onClick(row)}
                          >
                            {action.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                  {column.accessor === "select" ? <Checkbox></Checkbox> : ""}
                  {typeof column.accessor === "function" &&
                    column.accessor(row)}
                  {typeof column.accessor === "string" &&
                    column.accessor in row &&
                    (row[column.accessor as keyof T] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
