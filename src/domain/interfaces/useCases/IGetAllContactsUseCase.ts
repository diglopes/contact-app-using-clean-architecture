import { IContactEntity } from '../../entities/IContactEntity'

export interface IGetAllContactsUseCase {
    execute(): Promise<IContactEntity[]>;
}