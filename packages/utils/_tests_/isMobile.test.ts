import isMobile from "../src/isMobile";

test("15919316514 正确返回true", () => {
  expect(isMobile("15919316514")).toBe(true);
});
test("159193 少于11位返回false", () => {
  expect(isMobile("159193")).toBe(false);
});
test("15919312312312312 超过11位返回false", () => {
  expect(isMobile("15919312312312312")).toBe(false);
});
test("15919312312312312 返回false", () => {
  expect(isMobile("15919312312312312")).toBe(false);
});
