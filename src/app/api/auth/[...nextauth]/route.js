import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email: admin@test.com",
          type: "text",
          placeholder: "admin@test.com",
          value: "admin@test.com",
        },
        password: {
          label: "Password: admin_password",
          type: "password",
          placeholder: "admin_password",
          value:"admin_password"
        },
        
      },

      async authorize(credentials) {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_AUTH}login`, {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: { "Content-Type": "application/json" },
          });
 
          if (res.status!=200) {
            
            throw new Error("Credenciales no válidas");
          }

          const data = await res.json();
       
          return {
            user: data.user,
            authorization: data.authorization,
          };
        } catch (error) {
          console.error("Error during login:", error);
          throw new Error("Error durante el inicio de sesión");
        }
      
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session = token;

      return session;
    },
  },
  session: {
    // Configurar el tiempo de vida del token JWT a 24 horas (86400 segundos)
    jwt: true,
    maxAge: 3600,
  },
  pages: {
  //  signIn: "/Login",
    signOut: "/auth/signout",
  },
});

export { handler as GET, handler as POST };
