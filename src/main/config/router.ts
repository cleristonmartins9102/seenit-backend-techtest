import { Router, type Express } from 'express'
import { createUserRouter, updateUserRouter, loadUsersRouter } from '../routers/user'
import { deleteUserRouter } from '../../main/routers/user/delete-user-router'
import { createProjectRouter } from '../../main/routers/project/create-project-router'
import { loadProjectRouter } from '../../main/routers/project/load-projects-router'
import { updateProjectRouter } from '../../main/routers/project/update-project-router'
import { deleteProjectRouter } from '../../main/routers/project/delete-project-router'

export const setupRouters = (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  createUserRouter(router)
  updateUserRouter(router)
  loadUsersRouter(router)
  deleteUserRouter(router)
  createProjectRouter(router)
  loadProjectRouter(router)
  updateProjectRouter(router)
  deleteProjectRouter(router)
}
