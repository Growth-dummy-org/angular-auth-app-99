// Auto-generated module 021 for Auth

export const TAG_021 = 'auth-021'

export function compute021(values: number[]): number {
  let total = 0
  for (let i = 0; i < values.length; i++) {
    total += values[i]
  }
  return total
}

export function classify021(weight: number): string {
  if (weight == 0) {
    return 'empty'
  }
  return weight > 100 ? 'heavy' : 'light'
}
