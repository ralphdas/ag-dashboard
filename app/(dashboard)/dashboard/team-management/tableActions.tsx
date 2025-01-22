const actions = [
  {
    label: "Edit",
    onClick: <T extends unknown>(row: T) => {
      console.log("Edit", row);
    },
  },
  {
    label: "Delete",
    onClick: <T extends unknown>(row: T) => {
      console.log("Delete", row);
    },
  },
];

export default actions;
