import cors from 'cors'
import express, { Application, Request, Response, NextFunction } from 'express'
import { StudentRoutes } from './app/modules/student/student.route'
import { UserRoutes } from './app/modules/user/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/notFound'
import router from './app/routes'

const app: Application = express()

//parsers
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/v1', router)

// Not found
app.use(notFound)

const test = (req: Request, res: Response) => {
  const a = 10
  res.send(a)
}

app.get('/', test)

app.use(globalErrorHandler)

export default app
