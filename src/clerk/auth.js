import { Clerk } from "@clerk/clerk-js";
import conf from "../conf/conf.js";

class ClerkAuthService {
  constructor() {
    this.clerk = new Clerk(conf.clerkPublishableKey);
    this.isLoaded = this.clerk.load();
  }

  async createAccount({ email, password }) {
    try {
      await this.isLoaded;

      const signUp = await this.clerk.client.signUp.create({
        emailAddress: email,
        password,
      });

      await this.clerk.setActive({ session: signUp.createdSessionId });

      return this.getCurrentUser();
    } catch (error) {
      console.error(error.errors?.[0]?.message || error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      await this.isLoaded;

      if (this.clerk.session) {
        return this.getCurrentUser();
      }

      const signIn = await this.clerk.client.signIn.create({
        identifier: email,
        password,
      });

      await this.clerk.setActive({ session: signIn.createdSessionId });

      return this.getCurrentUser();
    } catch (error) {
      console.error(error.errors?.[0]?.message || error);
      throw error;
    }
  }

  async HandleGoogleLogin() {
    try {
      await this.isLoaded;
      return this.clerk.client.signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "http://localhost:5173/login", // login page
        redirectUrlComplete: "http://localhost:5173/", // home page
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  async HandleGithubLogin() {
    try {
      await this.isLoaded;
      return this.clerk.client.signIn.authenticateWithRedirect({
        strategy: "oauth_github",
        redirectUrl: "http://localhost:5173/login",
        redirectUrlComplete: "http://localhost:5173/",
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  async HandleLinkedinLogin() {
    try {
      await this.isLoaded;
      return this.clerk.client.signIn.authenticateWithRedirect({
        strategy: "oauth_linkedin_oidc",
        redirectUrl: "http://localhost:5173/login",
        redirectUrlComplete: "http://localhost:5173/",
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  async getCurrentUser() {
    try {
      await this.isLoaded;
      return this.clerk.user;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  async logout() {
    try {
      await this.isLoaded;
      if (this.clerk.session) {
        return await this.clerk.signOut();
      }
    } catch (error) {
      console.error(error.message);
    }
  }
}

const clerkAuthService = new ClerkAuthService();
export default clerkAuthService;
