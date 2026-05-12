import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/admin(.*)",
  "/api/admin(.*)",
]);

const isPublicRoute = createRouteMatcher([
  "/",
  "/portfolio",
  "/blog",
  "/about",
  "/contact",
  "/api/contact",
  "/api/blog",
  "/api/portfolio",
  "/api/services",
  "/api/testimonials",
  "/api/upload",
]);

export default clerkMiddleware(async (auth, req) => {
  // Protect admin routes
  if (isProtectedRoute(req)) {
    await auth().protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\.(?:css|js|png|jpg|jpeg|svg|ico|woff|woff2|ttf)).*)",
    "/(api|trpc)(.*)",
  ],
};
