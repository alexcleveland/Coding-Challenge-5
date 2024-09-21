// Task 1 Create an Inventory Array of Product Objects

const inventory = [
       { name: 'Espresso', price: 3, quantity: 10 },
        { name: 'Latte', price: 4, quantity: 5 },
        { name: 'Cappuccino', price: 4, quantity: 6 },
        { name: 'Mocha', price: 5, quantity: 4 }
    ];
    
    // Task 2 Create an Orders Array of Order Objects

    const orders =[];

    // Task 3 Create a Function to Place an Order

    function placeOrder(customerName, orderedItems){
        for (let orderedItems of orderedItems){
const product = inventory.find(item => item.name === orderedItems.name);
if (!product || product.quantity < orderedItems.quantity){
console.error(`Not Enough Stock: ${orderedItems.name}`);
return;
}}
for (let orderedItems of orderedItems){
    const product =inventory.find(item => item.name === orderedItems.name);
    product.quantity-=orderedItems.quantity;
}
orders.push({
    customerName: customerName,
    items: orderedItems,
    status: "Pending"
});
console.log(`Successful order plced for ${customerName}`);
    }

    //Task 4 Create a Function to Calculate Total for an Order

    function calculateOrderTotal(order){
        for (let orderedItems of order.items){
            const product =inventory.find(item.name === orderedItems.name);
            if(product){
                total += product.price * orderedItems.quantity;
            }
        }
        return total;
    }
    
    // Task 5 Create a Function to Mark an Order as Completed

    function completeOrder(customerName){
        const order =orders.find(orders => orders.customerName=== customerName);
        if(order){
            order.status = "Completed";
            console.log(`Completed order for ${customerName}`); }
            else{console.error(`Order not Found ${customerName}`);
            }
    }
    // Task 6 Create a Function to Check Pending Orders

    function checkPendingOrders(){
        const pendingOrders = orders.filter(order => order.status=== "Pending");
       pendingOrders.forEach(order =>{
        console.log(`${order.customerName},Items:`);
        order.items.forEach(item => console.log(`${item.name}: ${item.quantity}`));
        
        
       });
    }