import "mocha"
import { assert } from "chai"

import date from "../src/date"

describe("Date function", () => {
	it("should be an object", () => {
			assert.isObject(date)
	});

	it("should have a format property", () => {
		assert.property(date, "format")
	});

	it("should have a getDaysDiff property", () => {
		assert.property(date, "getDaysDiff")
	})

	it("should have a getTimeDiff property", () => {
		assert.property(date, "getTimeDiff")
	})
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
});

describe("GetDaysDiff", () => {
	it("should be a function", () => {
		assert.isFunction(date.getDaysDiff)
	});

	it("should return the days difference", () => {
		const expected = 1
		const actual = date.getDaysDiff("2019-01-02", "2019-01-01")
		assert.equal(actual, expected)
	});

	it("should return the days difference", () => {
		const expected = 0
		const actual = date.getDaysDiff("2019-01-01", "2019-01-01")
		assert.equal(actual, expected)
	});
});

describe("GetTimeDiff", () => {
	it("should be a function", () => {
		assert.isFunction(date.getTimeDiff)
	});

	it("should return the time difference", () => {
		const expected = 86400000
		const actual = date.getTimeDiff("2019-01-02", "2019-01-01")
		assert.equal(actual, expected)
	});

	it("should return the time difference", () => {
		const expected = 0
		const actual = date.getTimeDiff("2019-01-01", "2019-01-01")
		assert.equal(actual, expected)
	});
});
