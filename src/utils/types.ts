interface Stock {
    count: string,
    blocked: number
}


interface InventoryItems {
    sku: string,
    stock: Stock
}

interface Inventory extends Array<InventoryItems> {}

interface OrderLine {
    sku:string,
    quantity: number
}

interface Order {
    id: string,
    order_lines : Array<OrderLine>
}

interface Orders extends Array<Order> {}

interface Level {
    "sku": string,
    "count": number,
    "blocked": number,
    "booked": number,
    "missing": number,
    "available": number
}

interface InventoryLevels extends Array<Level> {}


export { Inventory, Orders, InventoryLevels, Level, InventoryItems }