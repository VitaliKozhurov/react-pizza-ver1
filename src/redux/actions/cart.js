export const addPizzaToCart = (pizzaObj) => ({
   type: 'ADD_PIZZA_TO_CART',
   payload: pizzaObj,
})

export const clearCart = () => ({
   type: 'CLEAR_CART'
})

export const removeCartItem = (id) => ({
   type: 'REMOVE_CART_ITEM',
   payload: id,
})

export const deleteOnePizza = (id) => ({
   type: 'DELETE_ONE_PIZZA',
   payload: id,
})

export const addOnePizza = (id) => ({
   type: 'ADD_ONE_PIZZA',
   payload: id,
})