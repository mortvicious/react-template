import React from 'react'
import Navigation from './components/Navigation/Navigation'

export default function Test() {
  return (
    <div className='test'>
        <Navigation
            styles="sp-b"
            linkGap='g-1'   
            isFixed={true}
            loginWithLanguages={true} 
        />
    </div>
  )
}

// const Test = () => {
//   return (
//     <div>
//       <Navigation/>
//     </div>
//   )
// }

// export default Test
//delete-after-template-use