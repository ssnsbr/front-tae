import NextAuth, { DefaultSession } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    refresh_token?: string;
    access_token?: string;
    user: {
      pk: number;
      username: string;
      first_name: string;
      last_name: string;
      email: string;
    };
  }
}
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      pk: number;
      username: string;
      first_name: string;
      last_name: string;
      email: string;
    };
    token:string;
    refresh:string;
  }
}
