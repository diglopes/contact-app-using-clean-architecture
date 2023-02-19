import { IContactEntity } from '../../../domain/entities/IContactEntity'

export interface IContactDataSource {
    create(contact: IContactEntity): Promise<boolean>;
    getAll(): Promise<IContactEntity[]>;
}