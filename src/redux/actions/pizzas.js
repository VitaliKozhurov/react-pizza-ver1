import axios from "axios";

export const setLoaded = value => ({
   type: 'SET_LOADED',
   payload: value,
})

export const fetchPizzas = (category, sortBy) => (dispatch) => {

   dispatch(setLoaded(false));
   axios.get(
      `http://localhost:3000/pizzas?
      ${category !== null ? `category=${category}` : ''}
      &_sort=${sortBy}`)
      .then(({ data }) => dispatch(setPizzas(data)))
};

export const setPizzas = (items) => ({
   type: 'SET_PIZZAS',
   payload: items,
})
