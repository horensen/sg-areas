import { echo } from "..";

test("echo()", () => {
  expect(echo("hi")).toBe("hi");
});
