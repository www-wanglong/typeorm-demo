import User from '../../src/entities/User'
import { AppDataSource } from '../../src/data-source'
import { anyName, anyNumber } from '../faker'

export default class UserEntityBuilder {
  user: User;

  setFirstName(firstName) {
    this.user.firstName = firstName
    return this;
  }

  setLastName(lastName) {
    this.user.lastName = lastName
    return this;
  }

  setAge(age) {
    this.user.age = age
    return this;
  }

  save() {
    this.user.firstName = this.user.firstName || anyName();
    this.user.lastName = this.user.lastName || anyName();
    this.user.age = this.user.age || anyNumber();
    return AppDataSource.getRepository(User).save(this.user)
  }

  static build() {
    const userEntityBuilder = new UserEntityBuilder();
    userEntityBuilder.user = new User();
    return userEntityBuilder;
  }
}