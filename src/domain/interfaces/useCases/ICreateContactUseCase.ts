import { IContactEntity } from '../../entities/IContactEntity'

export interface ICreateContactUseCase {
    execute(contact: IContactEntity): Promise<boolean>;
}