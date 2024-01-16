/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectID);

    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getAccount() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite get account error", error);
    }
    return null;
  }
  async logout() {
    try {
      return await this.account.deleteSession();
    } catch (error) {
      console.log("appwrite logout error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
