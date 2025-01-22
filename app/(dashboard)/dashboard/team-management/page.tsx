"use client";
import actions from "./tableActions";

import SplitGridContainer from "@common/SplitGridContainer";
import HashTagTitle from "@common/HashTagTitle";
import PageTitle from "@common/PageTitle";
import Paragraph from "@common/Paragraph";
import Button from "@common/Button";
import Table from "@common/Table";

import { UserPlus } from "lucide-react";

import getColumnOptions from "./tableColumnOptions";

import userData from "@/mockUsers.json";

export default function Page() {
  function handleClickEvent() {
    console.log("Hello, World!");
  }

  return (
    <>
      <SplitGridContainer
        leftContent={
          <>
            <HashTagTitle content="hello" />
            <PageTitle>Team name</PageTitle>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed at nisl nec turpis cursus ultrices. Nullam
              condimentum, risus vel tincidunt ultricies, odio libero
              pellentesque turpis, et commodo mi justo id purus. Nulla facilisi.
              Sed at nisl nec turpis cursus ultrices. Nullam condimentum, risus
            </Paragraph>
          </>
        }
        rightContent={
          <Button onClick={handleClickEvent}>
            <UserPlus size={24} />
            Add User
          </Button>
        }
      />

      <Table
        enableSelection={true}
        actions={actions}
        data={userData}
        columns={getColumnOptions()}
      />
    </>
  );
}
