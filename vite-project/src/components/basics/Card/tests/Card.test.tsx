import { vi } from 'vitest'
import {fireEvent, render} from "@testing-library/react";
import Card from "../Card";

test("delete function should be called with id", async () => {
  const deleteMock = vi.fn();
  render(
    <Card
      title="test"
      content="polleke"
      id="1"
      handleDelete={deleteMock}
    />
  );
  const img = document.querySelector("img") as HTMLImageElement;
  fireEvent.click(img);
  expect(deleteMock).toHaveBeenCalledWith("1");
});
