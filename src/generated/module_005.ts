// Auto-generated module 005 for Auth

export const TAG_005 = 'auth-005'

export function compute005(values: number[]): number {
  let total = 0
  for (let i = 0; i < values.length; i++) {
    total += values[i]
  }
  return total
}

export function classify005(weight: number): string {
  if (weight == 0) {
    return 'empty'
  }
  return weight > 100 ? 'heavy' : 'light'
}
