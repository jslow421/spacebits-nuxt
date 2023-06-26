import { $fetch, setup } from "@nuxt/test-utils";
import { describe, expect, test } from "vitest";
import { RocketType, getRocketType } from "../models/rockets";

describe("Rockets Tests", async () => {
	await setup({});

	test("Specific Type Test", () => {
		const rocket_string = "Falcon 9";
		const rocket_type = getRocketType(rocket_string);
		expect(rocket_type).toBe(RocketType.Falcon9);
	});

	test("Generic Unknown Type Test", () => {
		const rocket_string = "SomeRocket1";
		const rocket_type = getRocketType(rocket_string);
		expect(rocket_type).toBe(RocketType.Generic);
	});
});
