import Actions from "./ActionTypes"

export const RepoActions = {
    serviceFetchRepo(data, resolve, reject) {
        return ({
            type: Actions.FETCH_REPOS,
            meta: {},
            payload: {
                payload,
                resolve,
                reject
            }
        })   
    }
}