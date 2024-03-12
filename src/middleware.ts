export { default } from "next-auth/middleware";

export const config = {
  matcher: [
  "/direccion:path*",
  "/Ordenes:path*",
]
};
