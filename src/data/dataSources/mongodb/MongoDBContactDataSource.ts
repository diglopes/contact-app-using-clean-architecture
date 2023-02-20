import { IContactEntity } from '../../../domain/entities/IContactEntity'
import { IContactDataSource } from '../../interfaces/dataSources/IContactDataSource'
import { IDatabaseWrapper } from '../../interfaces/dataSources/IDatabaseWrapper'

export class MongoDBContactDataSource implements IContactDataSource {
    constructor(
        private readonly database: IDatabaseWrapper
    ) { }

    async create(contact: IContactEntity): Promise<boolean> {
        const result = await this.database.insertOne(contact)
        return result !== null
    }

    async getAll(): Promise<IContactEntity[]> {
        const result = await this.database.find({})
        return result.map(item => ({
            id: item._id.toString(),
            surname: item.surname,
            firstName: item.firstName,
            email: item.email
        }));
    }

}