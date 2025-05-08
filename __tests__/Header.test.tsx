import renderer from "react-test-renderer";
import Header from "@/components/global/Header";

const renderTree = (tree: any) => renderer.create(tree);
describe("<Header>", () => {
  it("should render component", () => {
    expect(renderTree(<Header />).toJSON()).toMatchSnapshot();
  });
});
