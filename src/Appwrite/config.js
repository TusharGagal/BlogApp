import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ Title, slug, Content, FeaturedImage, status, UserId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        slug,
        {
          Title,
          Content,
          FeaturedImage,
          status,
          UserId,
        }
      );
    } catch (error) {
      console.log("appwrite database error: " + error);
    }
  }
  async updatePost(slug, { Title, Content, FeaturedImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        slug,
        { Title, Content, FeaturedImage, status }
      );
    } catch (error) {
      console.log("appwrite database update post error: " + error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        slug
      );
      return true;
    } catch (error) {
      console.log("appwrite database delete post error: " + error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        slug
      );
    } catch (error) {
      console.log("appwrite database get post error: " + error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        queries
      );
    } catch (error) {
      console.log("appwrite database get posts error: " + error);
      return false;
    }
  }

  //file upload services

  async fileUpload(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("appwrite file upload error: " + error);
    }
  }

  async fileDelete(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketID, fileId);
      return true;
    } catch (error) {
      console.log("appwrite file delete error: " + error);
      return false;
    }
  }

  getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appwriteBucketID, fileId);
    } catch (error) {
      console.log("appwrite file preview error: " + error);
    }
  }

  getFileDownload(fileId) {
    try {
      return this.bucket.getFileDownload(conf.appwriteBucketID, fileId);
    } catch (error) {
      console.log("appwrite file download error: " + error);
    }
  }
}

const service = new Service();

export default service;
