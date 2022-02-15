// import React from 'react';

// function TodaysFoods ({data}) {
//     if(!data.length){
//         return null;
//     }
//     const total= data.reduce((prev,current)=>{
//         return prev+current.calories;
//     })
//     console.log(total)
//     return(
//         <div>
//             <h3>Today's Foods</h3>
//             <ul>
//                 {data.map(
//                     ({name,quantity,calories})=>{
//                         return(
//                             <li>{quantity} {name} = {calories}</li>
//                         )
//                     }
//                 )}
//             </ul>
//         </div>
//     )
// }
// export default TodaysFoods;