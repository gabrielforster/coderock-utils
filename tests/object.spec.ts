import "mocha"
import { assert } from "chai"

import * as object from "../src/object"

describe("Object tests", () => {
	it("Should be an object", () => {
			assert.isObject(object)
	})

	it("Should have a deep function", () => {
		assert.isFunction(object.deep)
	})
})

describe("Deep object test", () => {
		it("Should be a function", () => {
				assert.isFunction(object.deep)
		})

		it("Deep object pratice test", () => {
				const expected = "banana"
				const param = { test: {message: "banana"}}

				const actual = object.deep(param, "test.message")

				assert.equal(actual, expected)
		})
})
