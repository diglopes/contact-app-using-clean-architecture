import { IContactEntity } from '../entities/IContactEntity'
import { IContactRepository } from '../interfaces/repositories/IContactRepository'
import { IGetAllContactsUseCase } from '../interfaces/useCases/IGetAllContactsUseCase'

export class GetAllContactsUseCase implements IGetAllContactsUseCase {
    constructor(
        private readonly contactRepository: IContactRepository
    ) { }

    async execute(): Promise<IContactEntity[]> {
        const result = await this.contactRepository.getContacts()
        return result
    }
}