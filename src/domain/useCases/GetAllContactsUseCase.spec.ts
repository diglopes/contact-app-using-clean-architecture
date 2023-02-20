import { IContactEntity } from '../entities/IContactEntity'
import { IContactRepository } from '../interfaces/repositories/IContactRepository'
import { GetAllContactsUseCase } from './GetAllContactsUseCase'

describe("Get All Contacts Use Case", () => {

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

    test("should return data", async () => {
        const ExpectedResult = [{ id: "1", surname: "Smith", firstName: "John", email: "john@gmail.com" }]

        jest.spyOn(mockContactRepository, "getContacts").mockImplementation(() => Promise.resolve(ExpectedResult))
        const getAllContactsUse = new GetAllContactsUseCase(mockContactRepository)
        const result = await getAllContactsUse.execute();
        expect(result).toStrictEqual(ExpectedResult)

    });

})