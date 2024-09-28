import { Request, Response } from "express"
import { Inventory, Orders, InventoryLevels } from "../utils/types"
import { setItemLevel } from "../utils/setItemLevel"


export const getInventoryLevels = (req: Request, res: Response): Response => {

    const { inventory, orders }: { inventory: Inventory, orders: Orders } = req.body

    if (!inventory || !orders) {
        return res.status(400).json({ message: "Missing inventory or orders" })
    }

    try {
        const inventoryLevels: InventoryLevels = inventory.map(item => setItemLevel(item, orders))
    
        return res.status(200).json({inventoryLevels})
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" })
    }

}