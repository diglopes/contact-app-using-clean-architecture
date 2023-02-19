import { IContactDataSource } from '../../data/interfaces/dataSources/IContactDataSource'
import { IContactEntity } from '../entities/IContactEntity';
import { IContactRepository } from '../interfaces/repositories/IContactRepository';

export class ContactRepository implements IContactRepository {

    constructor(
        private readonly contactDataSource: IContactDataSource
    ) { }

    async createContact(contact: IContactEntity): Promise<boolean> {
        const result = await this.contactDataSource.create(contact)
        return result;
    }
    async getContacts(): Promise<IContactEntity[]> {
        const result = await this.contactDataSource.getAll()
        return result;
    }
}