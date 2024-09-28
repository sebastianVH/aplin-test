import { InventoryItems,Orders, Level } from "./types"

export const setItemLevel = (item: InventoryItems,orders: Orders ): Level => {

            const itemLevel: Level = {
                sku: item.sku,
                count: parseInt(item.stock.count),
                blocked: item.stock.blocked,
                booked: 0,
                missing: 0,
                available: parseInt(item.stock.count) - item.stock.blocked
            }
    
            orders.forEach(order => {
                order.order_lines.forEach(order_line => {
                    if (order_line.sku === item.sku) {
                        if (itemLevel.available === 0) itemLevel.missing += order_line.quantity

                        else if (order_line.quantity > itemLevel.available) {
                            itemLevel.booked = itemLevel.available
                            itemLevel.available = 0
                            itemLevel.missing = order_line.quantity - itemLevel.booked
                        }
                        else {
                            itemLevel.booked += order_line.quantity
                            itemLevel.available -= order_line.quantity
                        }
                    }
                })
            })
            return itemLevel
}