import UserRepository from "../../src/repositories/UserRepository";
import { User } from "../../src/entities/User";
import UserEntityBuilder from "../faker/UserEntityBuilder"

describe("User Entity", () => {
  let userRepository: UserRepository;

  beforeAll(async () => {
    userRepository = new UserRepository();
  });


  it("should query empty", async () => {
    const users = await userRepository.query();
    expect(users.length).toBe(0);
  });

  it("should query 1", async () => {
    await UserEntityBuilder.build().setLastName("xixi").save();
    const users = await userRepository.query();
    expect(users[0].lastName).toBe("xixi");
  });


});