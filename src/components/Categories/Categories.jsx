import React from "react";

const Categories = React.memo(({ items, activeCatVal, onClickItem }) => {

   return (
      <>
         <div className="categories">
            <ul>
               <li
                  onClick={() => onClickItem(null)}
                  className={activeCatVal === null ? "active" : ''}
               >
                  Все
               </li>
               {items.map((item, ind) =>
               (<li
                  className={activeCatVal === ind ? "active" : ''}
                  onClick={() => onClickItem(ind)}
                  key={item + ind}>
                  {item}
               </li>)
               )}
            </ul>
         </div>
      </>
   )
})

export default Categories;