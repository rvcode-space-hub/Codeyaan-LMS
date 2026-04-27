import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GitHubStrategy } from "passport-github2";
import env from "./env.js";
import authService from "../services/auth.service.js";

class PassportClass {
  constructor() {
    this.initGoogleStrategy();
    this.initGithubStrategy();
  }

  // --------- GOOGLE -------------------
  initGoogleStrategy() {
    passport.use(
      new GoogleStrategy(
        {
          clientID: env.google_id, // ✅ correct key
          clientSecret: env.google_secret_id, // ✅ correct key
          callbackURL: "http://localhost:5000/api/auth/google/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            const result = await authService.findOrCreateGoogleUser(profile);
            done(null, result);
          } catch (err) {
            done(err, null);
          }
        }
      )
    );
  }

  // --------- GITHUB -------------
  initGithubStrategy() {
    passport.use(
      new GitHubStrategy(
        {
          clientID: env.github_id, // ✅ correct key
          clientSecret: env.github_secret_id, // ✅ correct key
          callbackURL: "http://localhost:5000/api/auth/github/callback", // ✅ correct URL
          scope: ["user:email"], // ✅ important
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            const result = await authService.findOrCreateGithubUser(profile);
            done(null, result);
          } catch (err) {
            done(err, null);
          }
        }
      )
    );
  }
}

export default new PassportClass();