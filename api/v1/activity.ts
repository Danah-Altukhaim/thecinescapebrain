import { ok, methodNotAllowed, type VercelReq, type VercelRes } from "../_shared";

export default function handler(req: VercelReq, res: VercelRes): void {
  if ((req.method ?? "").toUpperCase() !== "GET") return methodNotAllowed(res);
  return ok(res, []);
}
