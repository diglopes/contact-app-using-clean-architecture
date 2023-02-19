import { IContactEntity } from '../../entities/IContactEntity'

export interface ContactRepository {
    createContact(contact: IContactEntity): Promise<boolean>;
    getContacts(): Promise<IContactEntity[]>;
}