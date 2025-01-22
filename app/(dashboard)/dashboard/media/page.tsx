"use client";
import Button from "@common/Button";
import HashTagTitle from "@common/HashTagTitle";
import PageTitle from "@common/PageTitle";
import Paragraph from "@common/Paragraph";
import SplitGridContainer from "@common/SplitGridContainer";
import { Upload } from "lucide-react";

export default function Page() {
  return (
    <>
      <SplitGridContainer
        leftContent={
          <>
            <HashTagTitle content="media" />
            <PageTitle>Images and Videos</PageTitle>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed at nisl nec turpis cursus ultrices. Nullam
              condimentum, risus vel tincidunt ultricies, odio libero
              pellentesque turpis
            </Paragraph>
          </>
        }
        rightContent={
          <Button onClick={() => console.log("Hello, World!")}>
            Upload Media
            <Upload size={24} />
          </Button>
        }
      />
    </>
  );
}
