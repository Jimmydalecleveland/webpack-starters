import { v4 } from "uuid";
/**
 * importing and logging the whole uuid object will bring it into
 * our bundle dramatically increasing bundle size from just
 * importing and using `v4()`
 *
 * For example:
 * import uuid from "uuid"
 * console.log(uuid)
 */

export const wizard = "Ravalynn" + v4();
