
import React, { useContext} from 'react'
import { UserContext } from '../context/UserContext'


function Home() {
    const context= useContext(UserContext);

  
            return(
      <div className="App">
        { context.user  ? <h1>Login Successful...</h1> : <h1>Please Login First</h1> }
        </div>
      
      
            )
        }
        


export default Home;
