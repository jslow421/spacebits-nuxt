import { $fetch, setup } from "@nuxt/test-utils";
import { describe, expect, test } from "vitest";

describe("Util Tests", async () => {
	await setup({});

	test("my test", () => {
		// vitest that returns true is true
		expect(true).toBe(true);
	});
});
