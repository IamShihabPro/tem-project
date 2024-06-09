import cors from 'cors'
import express, { Application, Request, Response, NextFunction } from 'express'
import { StudentRoutes } from './app/modules/student/student.route'
import { UserRoutes } from './app/modules/user/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/notFound'
import router from './app/routes'
import cookieParser from 'cookie-parser'

const app: Application = express()

//parsers
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin: ['http://localhost:5173']}))

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
