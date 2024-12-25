//function based props   props data pass other component - username - home - props welcome manoj

//App.js
// import React from 'react'
// import PropsFunction from './PropsFunction'

// export default function App() {
//   const mydata ={
//     frontend:"reactjs",
//     backend:"nodejs",
//     database:"mongodb"
//   }
//   return (
//     <div>
//       <PropsFunction {...mydata}></PropsFunction>  //spread operator
//       <PropsFunction front={mydata.frontend} back={mydata.backend} db={mydata.database}></PropsFunction>
//     </div>
//   )
// }



//PropsFunction.js
// import React from 'react'

// export default function PropsFunction({frontend,backend,database}) {
//   return (
//     <div>
//       <p>{frontend}</p>
//       <p>{backend}</p>
//       <p>{database}</p>
//     </div>
//   )
// }
