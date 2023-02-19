import { IContactEntity } from '../entities/IContactEntity'
import { ContactRepository } from '../interfaces/repositories/IContactRepository'
import { IGetAllContactsUseCase } from '../interfaces/useCases/IGetAllContactsUseCase'

export class GetAllContactsUseCase implements IGetAllContactsUseCase {
    constructor(
        private readonly contactRepository: ContactRepository
    ) { }

    async execute(): Promise<IContactEntity[]> {
        const result = await this.contactRepository.getContacts()
        return result
    }
}