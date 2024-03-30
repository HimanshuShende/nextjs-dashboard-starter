// middleware/withLogging.ts
import { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";
import { MiddlewareFactory } from "./types";

export const withLogging: MiddlewareFactory = (next: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    console.log("Log pathname", request.nextUrl.pathname);
    return next(request, _next);
  };
};
