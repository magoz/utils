// Remove null from array 
// https://stackoverflow.com/a/46700791
export const notNulls = <TValue>(value: TValue | null | undefined): value is TValue => value !== null && value !== undefined

// Usage
//const myArrWithoutNulls.filter(notNulls)