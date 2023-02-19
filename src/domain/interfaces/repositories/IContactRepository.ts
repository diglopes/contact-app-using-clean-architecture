import { IContactEntity } from '../../entities/IContactEntity'

export interface IContactRepository {
    createContact(contact: IContactEntity): Promise<boolean>;
    getContacts(): Promise<IContactEntity[]>;
}