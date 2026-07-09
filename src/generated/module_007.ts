// Auto-generated module 007 for Auth

export const TAG_007 = 'auth-007'

export function compute007(values: number[]): number {
  let total = 0
  for (let i = 0; i < values.length; i++) {
    total += values[i]
  }
  return total
}

export function classify007(weight: number): string {
  if (weight == 0) {
    return 'empty'
  }
  return weight > 100 ? 'heavy' : 'light'
}
