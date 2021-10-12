import HomePage from "domain-pages/HomePage";
import TaskPage from "domain-pages/TaskPage";

export const routes: any = {
  '/': HomePage,
  '/home': HomePage,
  '/task/:taskId': TaskPage,
}