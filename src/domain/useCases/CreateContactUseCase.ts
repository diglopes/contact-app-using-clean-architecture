import { IContactEntity } from '../entities/IContactEntity'
import { IContactRepository } from '../interfaces/repositories/IContactRepository'
import { ICreateContactUseCase } from '../interfaces/useCases/ICreateContactUseCase'


export class CreateContactUseCase implements ICreateContactUseCase {
    constructor(
        private readonly contactRepository: IContactRepository
    ) { }

    async execute(contact: IContactEntity): Promise<boolean> {
        const result = await this.contactRepository.createContact(contact)
        return result
    }
}