import CredentialsProvider from "next-auth/providers/credentials";
import { login_url } from "@/api/global-urls";
import axios from "axios";
import type { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";


const BACKEND_ACCESS_TOKEN_LIFETIME = 45 * 60; // 45 minutes
const BACKEND_REFRESH_TOKEN_LIFETIME = 6 * 24 * 60 * 60; // 6 days
const getCurrentEpochTime = () => {
  return Math.floor(new Date().getTime() / 1000);
};

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: BACKEND_REFRESH_TOKEN_LIFETIME,
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Leave Empty",
        },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // The data returned from this function is passed forward as the
      // `user` variable to the signIn() and jwt() callback
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        // const res = await fetch(login_url, {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" }
        // })
        // const user = await res.json()

        // // If no error and we have user data, return it
        // if (res.ok && user) {
        //   return user
        // }
        // // Return null if user data could not be retrieved
        // return null

        try {
          const response = await axios({
            url: login_url,
            // url: process.env.NEXTAUTH_BACKEND_URL + "auth/login/",
            method: "post",
            data: credentials,
          });
          const data = response.data;
          // console.log("Hello?:authorize data:", data);
          if (data) {
            // console.log("I am returning data:", data);
            return data;
          }
        } catch (error) {
          console.error("authorize error:", error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log("auth", "redirect", url, baseUrl);
      // These conditions redirect user after a successful login
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;

      return baseUrl;
    },

    // async jwt function recieve this data (const data = await response.json()) as user, and then I return { ...token, ...user } from this function.
    // Requests to /api/auth/signin, /api/auth/session and calls to getSession(), getServerSession(), useSession() will invoke this function, but only if you are using a JWT session. This method is not invoked when you persist sessions in a database.

    async jwt({ user, token }) {
      console.log("auth", "jwt", user, token);

      // JSON Web Token is created (i.e. at sign in) or updated (i.e whenever a session is accessed in the client).
      // The arguments user, account, profile and isNewUser are only passed
      //          the first time this callback is called on a new session, after the user signs in.
      // In subsequent calls, only token will be available.
      // The contents user, account, profile and isNewUser will vary depending on the provider and if you are using a database.

      // console.log("------------------------------------jwt-user:", user); // new sign in {access,refresh,user{pk,username.firstmlast}}
      if (user) {
        // change token
        // token = { accessToken: user.accessToken };
        token.user = user.user;
        token.access_token = user.access;
        token.refresh_token = user.refresh;
        token.ref = getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME;
        // axiosInstance.defaults.headers.common.Authorization = `Bearer ${token.accessToken}`
      }
      // Set the user in the token so that If not new sign in then user=null and data is in token:
      // console.log("------------------------------------jwt-token:", token); // always

      return token; // combined them
    },
    // async session funciton recieves the data returned from jwt function as token,
    // since this token is my jwt returned from django I put this token is the session (session.user.token = token) and then return the session. This session is available in our next application.

    async session({ session, token }) {
      console.log("auth", "session", session, token);

      // console.log("------------------------------------session-token:", token);
      // console.log("------------------------------------session-session:", session);
      // When using database sessions, the User (user) object is passed as an argument.
      // When using JSON Web Tokens for sessions, the JWT payload (token) is provided instead.
      // if (token){
      //   session.user.id = token.sub!
      //   session.token = token.accessToken

      //   axiosInstance.defaults.headers.common.Authorization = `Bearer ${token.accessToken}`
      // }
      session.token = token.access_token;
      session.refresh = token.refresh_token;
      session.user = token.user;
      // console.log("----------------------session-session-out:", session);
      // return session;

      // session.user = token as any;
      // return session
      return session;
      // return {
      //   ...session,
      //   Authorization: "Beare " + token.access,
      // };
    },
  },
  // events: {},
  pages: {
    // signIn: "/login",
  },
};

// export default function authn(req: NextApiRequest, res: NextApiResponse) {
//   // Do whatever you want here, before the request is passed down to `NextAuth`
//   return NextAuth(req, res, authOptions);
// }
