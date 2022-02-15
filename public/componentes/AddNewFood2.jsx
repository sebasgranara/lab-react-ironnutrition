// import React,{useState} from 'react'

// function AddNewFood ({setState}) {
//   const [visible, setVisible] = useState(false);
//   const [formData, setFormData] = useState({quantity:0});
  
//   if(visible){
//       return(
//           <form>
//               <div>
//                 <label>Name</label>
//                  <input type="text" name="name" onChange={
//                      (e)=>{
//                          const currentValue= e.currentTarget.value;
//                          setFormData(prev=>({...prev, name:currentValue}))
//                      }
//                  } />
//               </div>
//               <div>
//                 <label>Calories</label>
//                  <input type="number" name="calories" onChange={
//                      (e)=>{
//                          const currentValue= e.currentTarget.value;
//                          setFormData(prev=>({...prev, calories:currentValue}))
//                      }
//                  } />
//               </div>
//               <div>
//                 <label>Image</label>
//                  <input type="text" name="image" onChange={
//                      (e)=>{
//                          const currentValue= e.currentTarget.value;
//                          setFormData(prev=>({...prev, image:currentValue}))
//                      }
//                  } />
//               </div>
//               <input type="submit" value="Add" onClick={()=>{
//                   setState(prev=>[formData,...prev]);
//                   setVisible(false);
//               }}/>
//           </form>
//       )
//   }
//   return (
//       <button onClick={()=>setVisible(true)}>Add new food</button>
//   )
// }

// export default AddNewFood;