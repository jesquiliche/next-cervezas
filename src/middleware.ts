export { default } from "next-auth/middleware";

export const config = {
  matcher: [
  "/cart:path*",  
  "/direccion:path*",
  "/Ordenes:path*",
]
};
