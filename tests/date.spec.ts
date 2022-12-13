import "mocha"
import { assert } from "chai"

import * as coderock from "../src"

describe("Date function", () => {
	it("should be an object", () => {
			assert.isObject(coderock)
	});

	it("should have a format property", () => {
		assert.property(coderock, "format")
	});

	it("should have a getDaysDiff property", () => {
		assert.property(coderock, "getDaysDiff")
	})

	it("should have a getTimeDiff property", () => {
		assert.property(coderock, "getTimeDiff")
	})
});

describe("Date Format Function", () => {
	it("should be a function", () => {
		assert.isFunction(coderock.format)
	});

	it("should return the formatted date", () => {
		const expected = "2019-01-01"
		const actual = coderock.format("2019-01-01", "yyyy-MM-dd")
		assert.equal(actual, expected)
	});

	it("should return the formatted date", () => {
		const expected = "13/07/2004"
		const actual = coderock.format("2004-07-13", "dd/MM/yyyy")
		assert.equal(actual, expected)
	});
});

describe("GetDaysDiff", () => {
	it("should be a function", () => {
		assert.isFunction(coderock.getDaysDiff)
	});

	it("should return the days difference with postive value", () => {
		const expected = 1
		const actual = coderock.getDaysDiff("2019-01-01", "2019-01-02")
		assert.equal(actual, expected)
	});

	it("should return the days difference", () => {
		const expected = 1
		const actual = coderock.getDaysDiff("2019-01-02", "2019-01-01")
		assert.equal(actual, expected)
	});
	
	it("should return the days difference with negative value", () => {
		const expected = -2
		const actual = coderock.getDaysDiff("2022-12-06", "2022-12-08", true)
		assert.equal(actual, expected)
	})
});

describe("GetTimeDiff", () => {
	it("should be a function", () => {
		assert.isFunction(coderock.getTimeDiff)
	});

	it("should return the time difference", () => {
		const expected = -86400000
		const actual = coderock.getTimeDiff("2019-01-01", "2019-01-02", true)
		assert.equal(actual, expected)
	});

	it("should return the time difference with positive value",  () => {
		const expected = 86400000
		const actual = coderock.getTimeDiff("2019-01-02", "2019-01-01")
		assert.equal(actual, expected)
	})

	it("should return the time difference", () => {
		const expected = 0
		const actual = coderock.getTimeDiff("2019-01-01", "2019-01-01")
		assert.equal(actual, expected)
	});
});
