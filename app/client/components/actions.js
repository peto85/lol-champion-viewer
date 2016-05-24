/*
 * action types
 */

export const SELECT_CHAMPION = 'SELECT_CHAMPION'

/*
 * action creators
 */

export function selectChampion(id) {
  return { type: SELECT_CHAMPION, id }
}
