import { Hono } from 'hono'
import './config/orm'
import User from './Models/User'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/users', async (c) => c.json(
  await User.where('active', true).json()
))
app.get('/users-raw', async (c) => c.json(
  await User.where('active', true).rawJson()
))

export default app
