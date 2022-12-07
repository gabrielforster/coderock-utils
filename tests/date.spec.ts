import "mocha"
import { assert } from "chai"

import { date } from "../src"

describe("Date function", () => {
	it("should be an object", () => {
			assert.isObject(date)
	});

	it("should have a format property", () => {
		assert.property(date, "format")
	});
});

describe("Date Format Function", () => {
	it("should be a function", () => {
		assert.isFunction(date.format)
	});

	it("should return the formatted date", () => {
		const expected = "2019-01-01"
		const actual = date.format("2019-01-01", "yyyy-MM-dd")
		assert.equal(actual, expected)
	});

	it("should return the formatted date", () => {
		const expected = "13/07/2004"
		const actual = date.format("2004-07-13", "dd/MM/yyyy")
		assert.equal(actual, expected)
	});
})