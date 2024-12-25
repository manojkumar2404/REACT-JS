// react crud complete code

// steps:
// 1 all useState
// 2 data insert function
// 3 form - button onclick - data insert
// 4 data fetch
// 5 datafetch call useEffect
// 6 table - map - data Show
// 7 datadelete function
// 8 table button delete - onclick
// 9 edit mode function
// 10 dataedit function
// 11 table button - add- if - data edit - else - data insert

// -----------------------------------------------------------------------------


// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Product() {
//   const [data, setData] = useState([]); // all data
//   const [id, setId] = useState('');
//   const [productName, setProductName] = useState('');
//   const [productDescription, setProductDescription] = useState('');
//   const [productImage, setProductImage] = useState('');
//   const [productQuantity, setProductQuantity] = useState('');
//   const [productCategory, setProductCategory] = useState('');
//   const [productPrice, setProductPrice] = useState('');
//   const [dataDlt, setDataDlt] = useState(null); // data delete
//   const [dataEdt, setDataEdt] = useState(false); // data edit

  
  

//   const editMode = () => {
//     setDataEdt(true);
//   };

//   const dataFetch = async () => {
//     try {
//       const response = await axios.get('https://631f57da58a1c0fe9f670e23.mockapi.io/productapi');
//       setData(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const dataInsert = async () => {
//     const newData = {
//       productname: productName,
//       productdescription: productDescription,
//       prodctimage: productImage,
//       productquantity: productQuantity,
//       productcategory: productCategory,
//       productprice: productPrice,
//     };

//     try {
//       await axios.post('https://631f57da58a1c0fe9f670e23.mockapi.io/productapi', newData);
//       formdatareset();
//       dataFetch();
//     } catch (error) {
//       console.log('Insert error: ', error);
//     }
//   };

//   const dataDelete = async (id)=> {
//     try {
//       await axios.delete(`https://631f57da58a1c0fe9f670e23.mockapi.io/productapi/${id}`);
//       dataFetch();
//     } catch (error) {
//       console.log('Delete error: ', error);
//     }
//   };

//   const dataEdit = async () => {
//     const updatedData = {
//       productname: productName,
//       productdescription: productDescription,
//       prodctimage: productImage,
//       productquantity: productQuantity,
//       productcategory: productCategory,
//       productprice: productPrice,
//     };

//     try {
//       await axios.put(`https://631f57da58a1c0fe9f670e23.mockapi.io/productapi/${id}`, updatedData);
//       formdatareset();
//       dataFetch();
//       setDataEdt(false); 
//     } catch (error) {
//       console.log('Edit error: ', error);
//     }
//   };

//   const formdatareset = () => {
//     setId('');
//     setProductName('');
//     setProductDescription('');
//     setProductImage('');
//     setProductQuantity('');
//     setProductCategory('');
//     setProductPrice('');
//   };

//   useEffect(() => {
//     dataFetch();
//   }, []);

//   return (
//     <div>
//       <form className="form">
//         <input
//           type="text"
//           className="input"
//           placeholder="Enter Name"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//         />
//         <br /> <br />
//         <input
//           type="text"
//           className="input"
//           placeholder="Enter Description"
//           value={productDescription}
//           onChange={(e) => setProductDescription(e.target.value)}
//         />
//         <br /> <br />
//         <input
//           type="text"
//           className="input"
//           placeholder="Enter Image URL"
//           value={productImage}
//           onChange={(e) => setProductImage(e.target.value)}
//         />
//         <br /> <br />
//         <input
//           type="text"
//           className="input"
//           placeholder="Enter Quantity"
//           value={productQuantity}
//           onChange={(e) => setProductQuantity(e.target.value)}
//         />
//          <br /> <br />
//         <input
//           type="text"
//           className="input"
//           placeholder="Enter Category"
//           value={productCategory}
//           onChange={(e) => setProductCategory(e.target.value)}
//         />
//          <br /> <br />
        
//         <input
//           type="text"
//           className="input"
//           placeholder="Enter Price"
//           value={productPrice}
//           onChange={(e) => setProductPrice(e.target.value)}
//         />
 

//         <br /> <br />
//         <button
//           type="button"
//           onClick={() => {
//             if (dataEdt) {
//               dataEdit();
//             } else {
//               dataInsert();
//             }
//           }}
//         >
//           {dataEdt ? 'Edit Item' : 'Add Item'}
//         </button>
//       </form>
//       <br />
    
//       <table className="table" border={2}>
//           <thead>
//             <tr>
//               <th scope="col">ID</th>
//               <th scope="col">PNAME</th>
//               <th scope="col">DESC</th>
//               <th scope="col">IMAGE</th>
//               <th scope="col">QUANTITY</th>
//               <th scope="col">CATEGORY</th>
//               <th scope="col">PRICE</th>
//               <th scope="col">ACTION</th>
//             </tr>
//           </thead>

//           {data.map((val, index) => {
//             return (
//               <tbody key={index}>
//                 <tr>
//                   <td>{val.id}</td>
//                   <td>{val.productname}</td>
//                   <td>{val.productdescription}</td>
                 
//                   <td><img src={val.prodctimage}></img></td>
//                   <td>{val.productquantity}</td>
//                   <td>{val.productcategory}</td>
//                   <td>{val.productprice}</td>
                  
//                   <td>
//                   <button onClick={()=>{
//                        editMode();
//                        setId(val.id);
//                        setProductName(val.productname);
//                       setProductDescription(val.productdescription);
//                       setProductImage(val.prodctimage);
//                      setProductQuantity(val.productquantity);
//                     setProductCategory(val.productcategory);
//                     setProductPrice(val.productprice);


//                   }}>
//                       Edit
//                     </button>
//                     &nbsp;&nbsp;
//                     <button onClick={()=>{

                       
//                           dataDelete(val.id)//2 use state // 2
                      
                           
//                     }}> delete </button>
//                   </td>
//                 </tr>
//               </tbody>
//             );
//           })}
//         </table>
//     </div>
//   );
// }