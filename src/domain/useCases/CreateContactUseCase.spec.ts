import { IContactEntity } from '../entities/IContactEntity'
import { IContactRepository } from '../interfaces/repositories/IContactRepository'
import { CreateContactUseCase } from './CreateContactUseCase'

describe("Create Contact Use Case", () => {
    class MockContactRepository implements IContactRepository {
        createContact(contact: IContactEntity): Promise<boolean> {
            throw new Error("Method not implemented.");
        }
        getContacts(): Promise<IContactEntity[]> {
            throw new Error("Method not implemented.");
        }
    }

    let mockContactRepository: IContactRepository;

    beforeEach(() => {
        jest.clearAllMocks();
        mockContactRepository = new MockContactRepository()
    })

    test("should return true", async () => {
        const InputData = { id: "1", surname: "Smith", firstName: "John", email: "john@gmail.com" }

        jest.spyOn(mockContactRepository, "createContact").mockImplementation(() => Promise.resolve(true))
        const createContactUseCase = new CreateContactUseCase(mockContactRepository)
        const result = await createContactUseCase.execute(InputData);
        expect(result).toBe(true)

    });

})