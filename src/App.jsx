import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
// import Reusable from './Components/Reusable/Reusable'
// import From from './Components/From/From'
// import Fromref from './Components/Fromref/Fromref'
import Hookfrom from './Hookfrom/Hookfrom'

function App() {

//  const handlsingupSubmit = data =>{
//   console.log('fakir alam', data)
//  }
//  const handlupdateSubmit = data =>{
//   console.log('fakir alam', data)
//  }
 

  return (
    <>
      <h1>Family information</h1>
      {/* <From></From> */}
      {/* <Fromref></Fromref> */}    
      <Hookfrom></Hookfrom>  
      {/* <Reusable
      fromtittle={'Sing up'}
      fromsubmitbtn={'Submit'}
      handlSubmit={handlsingupSubmit}
      >
        <h2>Sing up</h2>
        <h4>Please sing up our site</h4>
      </Reusable>
      <Reusable
      fromtittle={'Update profile'}
      fromsubmitbtn={'Update'}
      handlSubmit={handlupdateSubmit}
      >
        <h2>Update your profile</h2>
        <h4>Edit your data and update your information</h4>
      </Reusable> */}
      <Grandpa></Grandpa>
    </>
  )
}

export default App
