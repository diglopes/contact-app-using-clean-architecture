import express from 'express'
import { Request, Response } from 'express'
import { ICreateContactUseCase } from '../../domain/interfaces/useCases/ICreateContactUseCase'
import { IGetAllContactsUseCase } from '../../domain/interfaces/useCases/IGetAllContactsUseCase'


export default function ContactRouter(
    getAllContactsUseCase: IGetAllContactsUseCase,
    createContactUseCase: ICreateContactUseCase
) {
    const router = express.Router()

    router.get('/', async (req: Request, res: Response) => {
        try {
            const contacts = await getAllContactsUseCase.execute()
            res.send(contacts)
        } catch (err) {
            res.status(500).send({ message: "Error fetching data" })
        }
    })

    router.post('/', async (req: Request, res: Response) => {
        try {
            await createContactUseCase.execute(req.body)
            res.statusCode = 201
            res.json({ message: "Created" })
        } catch (err) {
            res.status(500).send({ message: "Error saving data" })
        }
    })

    return router
}