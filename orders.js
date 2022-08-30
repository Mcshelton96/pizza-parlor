const orders = [
  {
    id: 1,
    crust: "Hand",
    toppings: ["pepperoni", "green pepper"],
    instructions: "extra cheese"
  },
  {
    id: 2,
    crust: "Thin",
    toppings: ["Black Olives", "green pepper"],
    instructions: "half green peppers"
  }
]


//finds id of current array and adds a number
const getNewOrderId = () => {
  let highestOrderId = orders.sort((a, b) => b.id - a.id)[0].id
  return highestOrderId + 1
}

//adds a new order created in main.js
export const addNewOrder = (order) => {
  const newId = getNewOrderId()
  // Add logic to give the order the property id, which is equal to newId
  order.id = newId
	// Add logic to add the order object to the orders array
  orders.push(order)
	// The below line creates and dispatches a new custom event titled "stateChanged".
	// We will still need to add a listener for this event.
  document.dispatchEvent(new CustomEvent("stateChanged"))

}

export const getOrders = () => {
  // Add logic here to return a copy of your orders
  const copyOfOrders = orders.map(order => ({...order}))
  return copyOfOrders
}