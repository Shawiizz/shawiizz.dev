/**
 * Returns an array of strings that are between % signs with the original ones.
 * Example: "Hello %name%" will return ["Hello ", "name"]
 *
 * @param str The string to parse
 */
export function getLocaleStringAsArgs(str: string): string[] {
    return str ? str.split(/%([^%]+)%/).filter(Boolean) : []
}

/**
 * Returns the string with the replaced arguments.
 * Example: "Hello %name%" with ["world"] will return "Hello world"
 *
 * @param str The string to replace
 * @param args The arguments to replace
 * @returns The replaced string
 */
export function replaceLocaleStringArgs(str: string, ...args: unknown[]): string {
    return str.replace(/%([^%]+)%/g, () => args.map(arg => String(arg)).shift() || '');
}