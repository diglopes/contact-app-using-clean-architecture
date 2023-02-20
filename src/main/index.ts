import server from './server'
import ContactRouter from '../presentation/routes/ContactRouter'
import { GetAllContactsUseCase } from '../domain/useCases/GetAllContactsUseCase'
import { ContactRepository } from '../domain/repositories/ContactRepository'
import { CreateContactUseCase } from '../domain/useCases/CreateContactUseCase'
import { MongoClient } from 'mongodb'
import { IDatabaseWrapper } from '../data/interfaces/dataSources/IDatabaseWrapper'
import { MongoDBContactDataSource } from '../data/dataSources/mongodb/MongoDBContactDataSource'

(async () => {
    const client: MongoClient = new MongoClient("mongodb://localhost:27017/contacts")
    await client.connect()
    const db = client.db("CONTACTS_DB");

    const contactDatabase: IDatabaseWrapper = {
        find: (query) => db.collection("contacts").find(query).toArray(),
        insertOne: (doc) => db.collection("contacts").insertOne(doc)
    }

    const contactMiddleWare = ContactRouter(
        new GetAllContactsUseCase(new ContactRepository(new MongoDBContactDataSource(contactDatabase))),
        new CreateContactUseCase(new ContactRepository(new MongoDBContactDataSource(contactDatabase))),
    )

    server.use("/contact", contactMiddleWare)
    server.listen(4000, () => console.log("Running on server"))
})()