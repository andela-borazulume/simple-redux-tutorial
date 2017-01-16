import service_get_github_repos from "./service_get_github_repos";

export default function* rootSaga() {
  yield [
    //redux_monitor(),  //uncomment if you need to see everything that is being dispatched to redux
    service_get_github_repos()
]}