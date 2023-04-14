import { Router, Request, Response } from "express";
import { response } from "../../common/response";

const router = Router();

router.get("/", ({ headers: { host } }: Request, res: Response) => {
  const menu: { [key: string]: string } = {
    registrations: `http://${host}/api/v1/registrations`,
  };

  response.success(res, 200, "api menu", menu);
});

export default router;
