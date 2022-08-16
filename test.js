const assert = require('node:assert')
const { decode, encode, addHours, addMinutes, normalize, isBetween } = require('./index.js')

assert.equal(normalize(1030), 1030)

assert.equal(normalize(1160), 1200)
assert.equal(normalize(1190), 1230)

assert.deepEqual(decode(1030), [10, 30])
assert.deepEqual(decode(1060), [11, 00])

assert.deepEqual(encode(10, 30), 1030)
assert.deepEqual(encode(10, 90), 1130)

assert.deepEqual(addHours(1030, 1), 1130)
assert.deepEqual(addHours(1030, 14), 30)

assert.deepEqual(addMinutes(1030, 30), 1100)
assert.deepEqual(addMinutes(1030, 60), 1130)


/// isBetween
assert.equal(isBetween(800, 500, 1000), true)
assert.equal(isBetween(1200, 1100, 1600), true)
assert.equal(isBetween(1000, 1100, 1600), false)
assert.equal(isBetween(1059, 1100, 1600), false)

// isBetween reverse
// from 12PM to 
assert.equal(isBetween(1600, 1200, 0), true)
assert.equal(isBetween(1300, 1200, 0), true)
assert.equal(isBetween(1400, 1200, 0), true)
assert.equal(isBetween(1600, 1200, 0), true)

assert.equal(isBetween(600, 1200, 1000), true)
assert.equal(isBetween(900, 1200, 1000), true)
assert.equal(isBetween(959, 1200, 1000), true)

assert.equal(isBetween(1100, 1200, 0), false)
assert.equal(isBetween(600, 1200, 0), false)

assert.equal(isBetween(1100, 1200, 1000), false)
assert.equal(isBetween(1300, 1200, 1000), true)
assert.equal(isBetween(0, 1200, 1000), true)
assert.equal(isBetween(1, 1200, 1000), true)
