/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "api/index.js",
  publicPath: "/build/",
  optimize: {
    bundle: {
      external: {
        include: ["../assets/fonts/Poppins/Poppins-SemiBold.woff2"],
      },
    },
  },
};
