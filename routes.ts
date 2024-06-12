// This file was automatically added by edgio init.
// You should commit this file to source control.
import { Router } from "@edgio/core/router";
import Request from "@edgio/core/runtime/Request";
import { nextRoutes } from "@edgio/next";

export default new Router()
  // NextRoutes automatically adds routes for all Next.js pages and their assets
  .always(({ proxy }) => {
    proxy("edgio_serverless", {
      // The presence of transformRequest and transformResponse ensure that proxying is done in serverless, not at the edge.
      transformRequest: async (req: Request) => {
        console.log("\nreq.transformRequest", req.url);
        console.log("\n");
        // Log request properties that you want to troubleshoot.
      },
      transformResponse: (res, req) => {
        console.log("\nreq.transformResponse", req.url, res.statusCode);
        console.log("\n");
        // Log response properties that you want to troubleshoot.
      },
    });
  })
  .use(nextRoutes);
