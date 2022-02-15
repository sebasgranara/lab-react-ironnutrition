// import 'bulma/css/bulma.css';
// import React,{useState} from 'react'

// function FoodBox ({name,calories,image, onClick}) {
//   const [quantity, setQuantity] = useState(1);
  
//   return (
//     <div className="box">
//   <article className="media">
//     <div className="media-left">
//       <figure className="image is-64x64">
//         <img src={image} alt=""/>
//       </figure>
//     </div>
//     <div className="media-content">
//       <div className="content">
//         <p>
//           <strong>{name}</strong> <br />
//           <small>{calories}</small>
//         </p>
//       </div>
//     </div>
//     <div className="media-right">
//       <div className="field has-addons">
//         <div className="control">
//           <input className="input" type="number" value={quantity} onChange={(e)=>setQuantity(e.currentTarget.value)}/>
//         </div>
//         <div className="control">
//           <button className="button is-info" onClick={()=>{onClick({name,calories,quantity})}}>
//             +
//           </button>
//         </div>
//       </div>
//     </div>
//   </article>
// </div>
//   )
// }

// export default FoodBox;