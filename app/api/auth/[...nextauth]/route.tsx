// export const {  handler as GET, handler as POST, auth, signIn, signOut } = NextAuth(authOptions)

import NextAuth from "next-auth";
import { authOptions } from "./auth";

// export { handler as GET, handler as POST, authOptions };
// export const { handlers, auth, signIn, signOut } =  NextAuth;
export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
// export const auth = NextAuth(authOptions);
// export const { handlers, signIn, signOut } = NextAuth(authOptions);

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);

// export const {  handler as GET, handler as POST, auth, signIn, signOut } = authn;
