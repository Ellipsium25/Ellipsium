import { Hono } from "hono";
import { handle } from "hono/vercel";
import { cors } from "hono/cors";

import auth from "@/features/auth/server/route"
import members from "@/features/members/server/route"
import workspaces from "@/features/workspaces/server/route"
import projects from "@/features/projects/server/route"
import tasks from "@/features/tasks/server/route"

const app = new Hono().basePath("/api")

app.use("*", cors({ origin: "*" }));

const routes = app
 .route("/auth", auth)
 .route("/workspaces", workspaces)
 .route("/members", members)
 .route("/projects", projects)
 .route("/tasks", tasks)

// ✅ Changed from handle(app) to handle(routes) to "use" the variable
export const GET = handle(routes);
export const POST = handle(routes);
export const PUT = handle(routes);
export const DELETE = handle(routes);
export const PATCH = handle(routes);
export const OPTIONS = handle(routes);

export type AppType = typeof routes;