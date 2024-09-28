import { Router,Request,Response } from "express";
import { getInventoryLevels } from "../controllers/getInventory";

const inventory = Router();

inventory.post("/inventory-levels", (req: Request, res: Response)=> {getInventoryLevels(req,res)})

export default inventory