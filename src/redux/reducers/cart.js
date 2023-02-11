const initialState = {
   items: {},
   totalPrice: 0,
   itemsCount: 0,
}

const cart = (state = initialState, action) => {
   const getItems = (index, currentItems) => {
      if (!currentItems.length) {
         const obj = { ...state.items };
         delete obj[index]
         return obj
      }
      return {
         ...state.items,
         [index]: {
            pizzasArr: currentItems,
            totalPrice: currentItems.reduce((total, current) => total + current.price, 0)
         }
      }
   }

   const getAllPizzas = (pizzas) => Object.values(pizzas).map(el => el.pizzasArr).flat();

   switch (action.type) {
      case 'ADD_PIZZA_TO_CART': {
         const currentPizzaItems = !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id].pizzasArr, action.payload];
         const newItems = getItems(action.payload.id, currentPizzaItems);
         const allPizzas = getAllPizzas(newItems);

         return {
            ...state,
            items: newItems,
            itemsCount: allPizzas.length,
            totalPrice: allPizzas.reduce((total, curr) => total + curr.price, 0),
         }
      }

      case 'CLEAR_CART': {
         return initialState
      }

      case 'REMOVE_CART_ITEM': {
         const removeProperty = prop => ({ [prop]: _, ...rest }) => rest;
         const restObj = removeProperty(action.payload + '');
         const obj = restObj(state.items);
         const allPizzas = getAllPizzas(obj);

         return {
            ...state,
            items: obj,
            itemsCount: allPizzas.length,
            totalPrice: allPizzas.reduce((total, curr) => total + curr.price, 0),
         }
      }

      case 'DELETE_ONE_PIZZA': {
         const currentPizzaItems = state.items[action.payload].pizzasArr.slice(0, -1);
         const newItems = getItems(action.payload, currentPizzaItems);
         const allPizzas = getAllPizzas(newItems);

         return {
            ...state,
            items: newItems,
            itemsCount: allPizzas.length,
            totalPrice: allPizzas.reduce((total, curr) => total + curr.price, 0),
         }
      }

      case 'ADD_ONE_PIZZA': {
         const pizza = state.items[action.payload].pizzasArr[0];
         const currentPizzaItems = [...state.items[action.payload].pizzasArr, pizza];
         const newItems = getItems(action.payload, currentPizzaItems);
         const allPizzas = getAllPizzas(newItems);
         return {
            ...state,
            items: newItems,
            itemsCount: allPizzas.length,
            totalPrice: allPizzas.reduce((total, curr) => total + curr.price, 0),
         }
      }

      default:
         return state
   }
}

export default cart;