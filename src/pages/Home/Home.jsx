import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories, SortPopup, PizzaElement, PizzaLoader } from "../../components";
import { addPizzaToCart } from "../../redux/actions/cart";
import { setCategory, setSortBy } from "../../redux/actions/filters";
import { fetchPizzas } from "../../redux/actions/pizzas";
const categoriesItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
   { name: 'популярности', type: 'popular' },
   { name: 'цене', type: 'price' },
   { name: 'алфавиту', type: 'name' }];

const Home = () => {
   const dispatch = useDispatch();
   const items = useSelector(({ pizzas }) => pizzas.items);
   const cartItems = useSelector(({ cart }) => cart.items);

   const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
   const { category, sortBy } = useSelector(({ filters }) => filters);

   const onSelectCategory = useCallback(index => {
      dispatch(setCategory(index))
   }, []);

   const onSelectSortType = useCallback(type => {
      dispatch(setSortBy(type))
   }, []);

   const handleAddPizzaToCart = (obj) => {
      dispatch(addPizzaToCart(obj))
   }

   useEffect(() => {
      dispatch(fetchPizzas(category, sortBy))
   }, [category, sortBy])

   return (
      <>
         <div className="container">
            <div className="content__top">
               <Categories
                  items={categoriesItems}
                  activeCatVal={category}
                  onClickItem={onSelectCategory}
               />
               <SortPopup
                  items={sortItems}
                  sortType={sortBy}
                  onClickSortType={onSelectSortType}
               />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
               {isLoaded
                  ? items.map(item => (
                     <PizzaElement
                        key={item.id}
                        onAddPizza={handleAddPizzaToCart}
                        addedToCartCount={(item.id in cartItems) ? cartItems[item.id].pizzasArr.length : 0}
                        {...item}
                     />
                  ))
                  : Array(12).fill(0).map((el, ind) => <PizzaLoader key={ind} />)
               }
            </div>
         </div>
      </>
   );
}


export default Home;