import "mocha"
import { assert } from "chai"

import * as string from "../src/string"

describe("String tests", () => {
  it("Should be a string", () => {
      assert.isObject(string)
  })

  it("Should have a firstToUpperCase function", () => {
    assert.isFunction(string.firstToUpperCase)
  })
})

describe("Capitalize the first letter from a word", () => {
  it("Should return the same word with the first letter to upper case", () => {
    const expected = "Banana"
    const actual = string.firstToUpperCase("banana")

    assert.equal(actual, expected)
  })
})