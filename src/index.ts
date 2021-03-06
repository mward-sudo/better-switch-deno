import type { BetterSwitch } from "./types.ts";

/**
 * A simple switch statement replacement that matches a string key and returns a value
 *
 * @param match - A string which should match a key in caseObject.
 * @param caseObject - An object with a string key with a value containing a function that
 *                     returns something.
 *                     A key of 'default' can be used to return a value if the parameter
 *                     match does not match a key in caseObject.
 *                     In typescript the returned values must all be of the same type
 * @returns The value from the matching or default key from caseObject
 */
export const betterSwitch: BetterSwitch = (match, caseObject) => {
  // If caseObject[match]() does not exist, return caseObject.default()
  return match in caseObject ? caseObject[match]() : caseObject.default();
};
