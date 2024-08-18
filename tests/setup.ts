import { AppDataSource } from '../src/data-source'

beforeAll(async () => {
  await AppDataSource.initialize();
});

beforeEach(async () => {
  await cleanData();
});


afterEach(async () => {
});

afterAll(async () => {
  await AppDataSource.destroy()
});

const cleanData = async () => {
    for (const entity of AppDataSource.entityMetadatas) {
        const repository = AppDataSource.getRepository(entity.name);
        await repository.clear();
    }
}