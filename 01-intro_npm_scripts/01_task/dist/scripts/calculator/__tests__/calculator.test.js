import { sum, mult } from "../calculator";

it('Should return sum of two numbers', () => {
  const result = sum(2, 2)
  expect(result).toBe(4)
})
it('Should return multiplying of two numbers', () => {
  const result = mult(2, 3);
  expect(result).toBe(6);
});