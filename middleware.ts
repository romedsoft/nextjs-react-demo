import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";




export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log("token: ", req.nextauth.token);

    var isInrole= (token : any, role : any)=>{

      if(Array.isArray(token?.role)){
        console.log("role is array");
        console.log(token?.role);
        console.log(role);
        console.log(token?.role.includes(role, 0));
        return token?.role.includes(role, 0);
      }
      console.log("role is not array");
      return token?.role === role;

    }

    if (req.nextUrl.pathname.startsWith("/users") && !isInrole(req.nextauth.token, "admin"))
      return NextResponse.redirect(
        new URL("/about", req.url)
      );


  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/users/:path*", "/about"],
};