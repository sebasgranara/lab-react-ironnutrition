import React from 'react';

function TodayFood({ todayFood }) {
 
  const total = todayFood.reduce((prev, current) => {
    return prev+current.calories;
  }, 0);

  return(
            <div>
                <h2> <b>  Today's Foods</b></h2>
                <ul>
                    {todayFood.map(
                        ({name,quantity,calories})=>{
                            return(
                                <li>{quantity} {name} = {calories}</li>
                            )
                        }
                    )}
                </ul>
                <p>Total: {total} cal</p>
            </div>
        )
}

export default TodayFood;

// import React from 'react';

// function TodayFood({ todayFood }) {
 
//   const total = todayFood.reduce((prev, current) => {
//     return prev + current.calories * current.quantity;
//   }, 0);

//   return (
//     <>
//       <h2>Today's foods</h2>
//       <ul>
//         {todayFood.map((menu) => {
//           return (
//             <li key={menu.id}>
//               {menu.quantity} {menu.name} = {menu.calories * menu.quantity} cal
//             </li>
//           );
//         })}
//       </ul>

//       <p>Total: {total} cal</p>
//     </>
//   );
// }

// export default TodayFood;