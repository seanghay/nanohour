const assert = require('node:assert')
const { decode, encode, addHours, addMinutes, normalize, isBetween } = require('./index.js')

assert.equal(normalize(1030), 1030)

assert.equal(normalize(1160), 1200)
assert.equal(normalize(1160), 1200)

assert.equal(isBetween(1000, 900, 1200), true)
assert.equal(isBetween(1000, 1200, 900), true)

assert.equal(isBetween(1100, 1000, 900), false)
assert.equal(isBetween(800, 1000, 900), false)
assert.equal(isBetween(2600, 2500, 2800), true)

assert.deepEqual(decode(1030), [10, 30])
assert.deepEqual(decode(1060), [11, 00])

assert.deepEqual(encode(10, 30), 1030)
assert.deepEqual(encode(10, 90), 1130)

assert.deepEqual(addHours(1030, 1), 1130)
assert.deepEqual(addHours(1030, 14), 30)

assert.deepEqual(addMinutes(1030, 30), 1100)
assert.deepEqual(addMinutes(1030, 60), 1130)

