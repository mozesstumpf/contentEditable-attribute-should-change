import { test, expect } from "vitest";

test("ContentEditable attribute should change", () => {
	const div = document.createElement("div");

	div.contentEditable = "true";

	// should be passed
	expect(div.getAttribute("contenteditable")).toBe("true");
});
