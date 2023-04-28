import { Router, Request, Response } from "express";
import { response } from "../../common/response";

const router = Router();

router.get('/', (req: Request, res, Response) => {
  res.redirect('/api/v1')
})

router.get("/api/v1", ({ headers: { host } }: Request, res: Response) => {
  const menu: { [key: string]: string } = {
    registrations: `http://${host}/api/v1/registrations`,
    users: `http://${host}/api/v1/users`,
    auth: `http://${host}/api/v1/auth`,
  };

  response.success(res, 200, "api menu", menu);
});

export default router;
