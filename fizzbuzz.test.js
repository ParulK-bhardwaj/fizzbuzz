const fb = require('./fizzbuzz')


test('FIZZ should be equal to "fizz"', () => {
    expect(fb.FIZZ).toBe('fizz')
})

test('BUZZ should be equal to "buzz"', () => {
    expect(fb.BUZZ).toBe('buzz')
})
  
test('FIZZBUZZ should be equal to "fizzbuzz"', () => {
    expect(fb.FIZZBUZZ).toBe('fizzbuzz')
})

test('isFizzy checks if the number is divisible by 3', () => {
    expect(fb.isFizzy(3)).toBe(true)
    expect(fb.isFizzy(6)).toBe(true)
    expect(fb.isFizzy(9)).toBe(true)
    expect(fb.isFizzy(10)).toBe(false)
    expect(fb.isFizzy(7)).toBe(false)
})

test('isBuzzy checks if the number is divisible by 5', () => {
    expect(fb.isBuzzy(3)).toBe(false)
    expect(fb.isBuzzy(5)).toBe(true)
    expect(fb.isBuzzy(15)).toBe(true)
})

test('fizzyBuzzy checks if the number is divisible by 5 or 3 or both and return respective string', () => {
    expect(fb.fizzyBuzzy(3)).toBe('fizz')
    expect(fb.fizzyBuzzy(5)).toBe('buzz')
    expect(fb.fizzyBuzzy(15)).toBe('fizzbuzz')
})

test('fizzBuzz should generate correct result object for a given count', () => {
    const result = fb.fizzBuzz(15)
    expect(result.count).toBe(15)
    expect(result.fizz).toBe(4)
    expect(result.buzz).toBe(2)
    expect(result.fizzBuzz).toBe(1)
})

