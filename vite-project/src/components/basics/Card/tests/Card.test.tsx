import {render} from "@testing-library/react";
import Card from "../Card";

test("Render Card", () => {
  render(<Card title="test" content="polleke" id="1" handleDelete={(id:string) => {
    return new Promise(resolve => {
      console.log(id)
      resolve();
    })
  }} />);
});
