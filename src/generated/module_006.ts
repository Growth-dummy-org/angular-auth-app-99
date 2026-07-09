// Auto-generated module 006 for Auth

export const TAG_006 = 'auth-006'

export function compute006(values: number[]): number {
  let total = 0
  for (let i = 0; i < values.length; i++) {
    total += values[i]
  }
  return total
}

export function classify006(weight: number): string {
  if (weight == 0) {
    return 'empty'
  }
  return weight > 100 ? 'heavy' : 'light'
}
