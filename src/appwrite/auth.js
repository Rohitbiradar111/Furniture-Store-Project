import conf from "../conf/conf.js";
import { Client, Account, ID, OAuthProvider } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password);
            if (userAccount) {
                return this.login({ email, password });
            }
            else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async HandleGithubLogin() {
        try {
            return await this.account.createOAuth2Session(OAuthProvider.Github, "https://furnistorewebsite.netlify.app", "https://furnistorewebsite.netlify.app/*");
        } catch (error) {
            console.log("auth.js => HandleGithubLogin => ", error.message);
        }
    }

    async HandleGoogleLogin() {
        try {
            return await this.account.createOAuth2Session(OAuthProvider.Google, "https://furnistorewebsite.netlify.app", "https://furnistorewebsite.netlify.app/*");
        } catch (error) {
            console.log("auth.js => HandleGoogleLogin => ", error.message);
        }
    }

    async HandleLinkedinLogin() {
        try {
            return await this.account.createOAuth2Session(OAuthProvider.Linkedin, "https://furnistorewebsite.netlify.app", "https://furnistorewebsite.netlify.app/*");
        } catch (error) {
            console.log("auth.js => HandleLinkedinLogin => ", error.message);
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            console.log("User retrieved successfully:", user);
            return user;
        } catch (error) {
            console.log("auth.js => getCurrentUser => ", error);
            return null;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("auth.js => logout => ", error);
        }
    }
}

const authService = new AuthService();

export default authService;