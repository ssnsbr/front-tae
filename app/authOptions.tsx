// const providers_option = [
//   {
//     id: "django",
//     name: "Django",
//     type: "oauth",
//     wellKnown: "http://127.0.0.1:8000/api/dj-rest-auth/",
//     authorization: { params: { scope: "openid profile email" } },
//     clientId: process.env.WEBAPP_CLIENT_ID,
//     clientSecret: process.env.WEBAPP_CLIENT_SECRET,
//     checks: ["pkce", "state"],
//     async profile(profile) {
//       console.log(profile);
//       return {
//         id: profile.sub,
//         name: profile.name,
//         email: profile.email,
//       };
//     },
//   },
// ]

 
// /////////////////////////////////////////////

// const callback_option1= {
//   // async jwt function recieve this data (const data = await response.json()) as user, and then I return { ...token, ...user } from this function.

//   async jwt({ token, user }) {
//     return { ...token, ...user };
//   },
//   // async session funciton recieves the data returned from jwt function as token, since this token is my jwt returned from django I put this token is the session (session.user.token = token) and then return the session. This session is available in our next application.

//   async session({ session, token }) {
//     //   session.user.token = token;
//     return session;
//   },
// }

// const callback_option2={
//   async jwt({ user, token, account }: any) {
//     // If `user` and `account` are set that means it is a login event
//     if (user && account) {
//       let backendResponse =
//         account.provider === "credentials" ? user : account.meta;
//       token["user"] = backendResponse.user;
//       token["access_token"] = backendResponse.access;
//       token["refresh_token"] = backendResponse.refresh;
//       token["ref"] = getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME;
//       return token;
//     }
//     // Refresh the backend token if necessary
//     if (getCurrentEpochTime() > token["ref"]) {
//       const response = await axios({
//         method: "post",
//         url: process.env.NEXTAUTH_BACKEND_URL + "auth/token/refresh/",
//         data: {
//           refresh: token["refresh_token"],
//         },
//       });
//       token["access_token"] = response.data.access;
//       token["refresh_token"] = response.data.refresh;
//       token["ref"] = getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME;
//     }
//     return token;
//   },
//   // Since we're using Django as the backend we have to pass the JWT
//   // token to the client instead of the `session`.
//   async session({ token }: any) {
//     return token;
//   },
// }

// ///////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////

// const SIGN_IN_HANDLERS = {
//   credentials: async (
//     user: any,
//     account: any,
//     profile: any,
//     email: any,
//     credentials: any
//   ) => {
//     return true;
//   },
// };
// const SIGN_IN_PROVIDERS = Object.keys(SIGN_IN_HANDLERS);


