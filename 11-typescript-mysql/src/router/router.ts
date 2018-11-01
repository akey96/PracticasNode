
import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';

const router = Router()

router.get('/heroes', (req: Request, res: Response) => {
  const query = 'SELECT * FROM heroes';

  MySQL.executeQuery(query, (err: any, heroes: Object []) => {
    if (err) {
      res.status(400).json({
        ok: false,
        error: err
      })
    } else {
      res.json({
        ok: true,
        heroes
      })
    }
  })
})


router.get('/heroes/:id', (req: Request, res: Response) => {
  const id = req.params.id
  res.json({
    ok: true,
    message: 'todo bien',
    id
  })
})

export default router