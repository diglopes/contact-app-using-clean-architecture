import { IContactDataSource } from '../../data/interfaces/dataSources/IContactDataSource'
import { IContactEntity } from '../entities/IContactEntity';
import { IContactRepository } from '../interfaces/repositories/IContactRepository';
import { ContactRepository } from "./ContactRepository";

class MockContactDataSource implements IContactDataSource {
    create(contact: IContactEntity): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<IContactEntity[]> {
        throw new Error("Method not implemented.");
    }
}

describe("Contact Repository", () => {
    let mockContactDataSource: IContactDataSource;
    let contactRepository: IContactRepository

    beforeEach(() => {
        jest.clearAllMocks();
        mockContactDataSource = new MockContactDataSource()
        contactRepository = new ContactRepository(mockContactDataSource)
    })

    describe("getAllContacts", () => {
        test("should return data", async () => {
            const expectedData = [{ id: "1", surname: "Smith", firstName: "John", email: "john@gmail.com" }]
            jest.spyOn(mockContactDataSource, "getAll").mockImplementation(() => Promise.resolve(expectedData))
            const result = await contactRepository.getContacts();
            expect(result).toBe(expectedData)
        });
    })

    describe("createContact", () => {
        test("should return true", async () => {
            const inputData = { id: "1", surname: "Smith", firstName: "John", email: "john@gmail.com" }
            jest.spyOn(mockContactDataSource, "create").mockImplementation(() => Promise.resolve(true))
            const result = await contactRepository.createContact(inputData);
            expect(result).toBe(true)
        });
    })

})