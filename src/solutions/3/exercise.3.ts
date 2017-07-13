
/**
 * Do you know how filter function works in arrays? let's build our own.
 * Build a function that takes 2 parameters, an array (A) and a function (B), and will return another array (C). 
 * The function parameter (B) will work as a filter, you can pass 1 parameter and it will return a boolean. 
 * Depending on the value returned by B the original element of the array (A) should be / or not in the output array (C).
 * Ex: A = [1, 2, 5, 4, 8], B -> onlyPair, -> C = [2, 4, 8]
 * 
 * The input array will never be null.
 * The input array should not be modified!
 */
export function filterTheArray<T>(array: T[], filter: (val: T) => boolean): T[] {
    return array.filter(filter);
}