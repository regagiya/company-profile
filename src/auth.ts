import NextAuth from "next-auth"; //import NetAuth agar bisa melakukan authentifikasi
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
});
