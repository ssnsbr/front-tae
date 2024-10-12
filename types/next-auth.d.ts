import NextAuth, { DefaultSession, Session } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";
import { } from "next-auth/session";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    refresh_token?: string;
    access_token?: string;
    user: DefaultUser & {
      pk: number;
      username: string;
      first_name: string;
      last_name: string;
      email: string;
    };
    
    token: string;
    refresh: string;
  }
  interface Session extends DefaultSession {
    user: DefaultUser & {
      pk: number;
      username: string;
      first_name: string;
      last_name: string;
      email: string;
    };
    
    token: string;
    refresh: string;
  }
}
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface User extends DefaultUser {
    access: string,
    refresh: string,
    user: {
      pk: int,
      username: string,
      email: string,
      first_name: string,
      last_name: string
    }
  }

  interface Session extends DefaultSession {
    user: DefaultUser & {
      pk: number;
      username: string;
      first_name: string;
      last_name: string;
      email: string;
    };
    
    token: string;
    refresh: string;
  }
}
