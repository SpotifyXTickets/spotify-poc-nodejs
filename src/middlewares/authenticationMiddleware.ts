import { Request, Response, NextFunction } from 'express'
import AuthenticationLogic from '../logics/authenticationLogic'

export const Authenticated = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authenticationLogic = new AuthenticationLogic()
  const tokenCheck = await authenticationLogic.CheckAuthorization(
    req.headers.authorization?.split(' ')[1],
  )
  if (tokenCheck !== false) {
    if (tokenCheck !== true) {
      res.set('Authorization', 'Bearer ' + tokenCheck)
    }
    return next()
  }

  res.status(401).json({ error: 'Unauthorized' })
  return
}
export const NotAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authenticationLogic = new AuthenticationLogic()
  if (
    !(await authenticationLogic.CheckAuthorization(
      req.headers.authorization?.split(' ')[1],
    ))
  ) {
    next()
  }
  res.status(401).json({ error: 'Already authenticated' })
}
