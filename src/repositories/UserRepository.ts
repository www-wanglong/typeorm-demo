import {AppDataSource} from "../data-source";
import User from "../entities/User";

export default class UserRepository {
  repository;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  query() {
    return this.repository.find();
  }

}