import { assertEquals } from "./test_deps.ts";
import { betterSwitch } from "./mod.ts";

Deno.test("should return test", () => {
  assertEquals(
    betterSwitch("test", {
      test: () => "test",
      default: () => "default",
    }),
    "test",
  );
});

Deno.test("should return default", () => {
  assertEquals(
    betterSwitch("none existent key", {
      test: () => "test",
      default: () => "default",
    }),
    "default",
  );
});

Deno.test("should return false", () => {
  assertEquals(
    betterSwitch("test", {
      test: () => false,
      default: () => true,
    }),
    false,
  );
});

Deno.test("should return true", () => {
  assertEquals(
    betterSwitch<string | boolean>("none existent key", {
      test: () => "test",
      default: () => true,
    }),
    true,
  );
});
