import Actions from "../actions/ActionTypes";

const initialState = {
    repos: new Map(),
    isLoading: false,
};

export default function get_repos(state = initialState, action = null) {
    switch (action.type) {
        case Actions.FETCHING_REPOS:
            return (Object.assign({}, state, {
                isLoading: true
            }));
        case Actions.DONE_FETCHING_REPOS:
            return (Object.assign({}, state, {
                isLoading: false
            }));
        case Actions.FETCH_REPOS_SUCCESS:
            const new_repos = new Map(action.payload.repos);
            return (Object.assign({}, state, {
                repos: new_repos,
            }));
        // case Actions.FETCH_REPOS_FAILED:
        //     // const new_repos = new Map(action.payload.repos);
        //     return (Object.assign({}, state, {
        //     })); 
        default:
            return state;
    }
}
