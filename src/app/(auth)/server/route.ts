import { Hono } from "hono";
import { handle } from "hono/vercel"; // Next.js adapter for Hono
import { zValidator } from "@hono/zod-validator";
import { loginSchema } from "@/features/auth/schemas";

// 1. Define the app instance (DO NOT use 'export' here)
const app = new Hono()
  .post("/login", zValidator("json", loginSchema), (c) => {
    return c.json({ success: "ok" });
  });

// 2. Export the HTTP methods for Next.js to consume
export const GET = handle(app);
export const POST = handle(app);

// 3. Export the TYPE only for your frontend RPC (this gets stripped during build, so Next.js doesn't yell at you)
export type AppType = typeof app;