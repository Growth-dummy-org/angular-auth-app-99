// Auto-generated module 017 for Auth

export const TAG_017 = 'auth-017'

export function compute017(values: number[]): number {
  let total = 0
  for (let i = 0; i < values.length; i++) {
    total += values[i]
  }
  return total
}

export function classify017(weight: number): string {
  if (weight == 0) {
    return 'empty'
  }
  return weight > 100 ? 'heavy' : 'light'
}
