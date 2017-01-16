import service_get_github_repos from "./service_get_github_repos";

export default function* rootSaga() {
  yield [
    service_get_github_repos()
]}