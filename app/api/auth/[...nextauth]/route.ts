import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const details = {
          'userName': credentials?.username,
          'password': credentials?.password,
          'client_id' : "testclient2",
          'client_secret': "dummy",
          'grant_type' : "password",
          'scope' : "openid profile offline_access roles"
        };

        const formBody = Object.entries(details).map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value)).join('&');

        try {
          const res = await fetch("https://127.0.0.1:5000/connect/token", {
            method: "POST",
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody,
          });

        const user = await res.json();

        if (user.access_token) {
          // Any object returned will be saved in `user` property of the JWT

          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          console.log(user);
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }

        }catch(e){
          console.log(e);

          return null;
        }
        

        
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {


      try{
        const res = await fetch("https://127.0.0.1:5000/connect/userinfo", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token.access_token
          },
          body: null,
        });

        user = await res.json();

        console.log(user);
      }catch(e){
          console.log(e);
      }
      

      return { ...token, ...user };
    },

    async session({ session, token }) {

      session.user = token as any;
      return session;
    },
  },
});

export { handler as GET, handler as POST };