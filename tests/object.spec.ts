import "mocha"
import { assert } from "chai"

import { deep } from "../src"

describe("Deep object test", () => {
		it("Should be a function", () => {
				assert.isFunction(deep)
		})

		it("Deep object pratice test", () => {
				const expected = "banana"
				const param = { test: {message: "banana"}}

				const actual = deep(param, "test.message")

				assert.equal(actual, expected)
		})
})
