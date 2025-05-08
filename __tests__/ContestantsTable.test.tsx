import renderer from "react-test-renderer";
import { useState, useEffect } from "react";
import { Button, TextInput, Loader, Table } from "@mantine/core";
import ContestantsTable from "@/components/Home/ContestantsTable";

jest.mock("@mantine/core");

const renderTree = (tree: any) => renderer.create(tree);
describe("<ContestantsTable>", () => {
  it("should render component", () => {
    expect(renderTree(<ContestantsTable />).toJSON()).toMatchSnapshot();
  });
});
