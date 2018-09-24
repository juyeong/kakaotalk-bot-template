import response from "../index";

jest.mock("../utils");

describe("test", () => {
  it("sample", () => {
    const mock: (message: string) => void = jest.fn();
    const replier = {reply: mock};
    response("room", "test", "sender", false, replier);
    expect(mock).toHaveBeenCalledWith("success");
  });
});
