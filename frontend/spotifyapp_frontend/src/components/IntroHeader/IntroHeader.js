import React, { useState } from 'react'; 
import { Container } from 'semantic-ui-react'

function IntroHeader() {
    const [userIsNew, setUserIsNew] = useState(true)
    const [userIsReturning, setUserIsReturning] = useState (false)


    return(
        <>
        <Container text textAlign='center'>
        { userIsNew === true ? <>

        <h1> Welcome "username here"! <br/> <br/> Click On A Card Below To Get Started!
        </h1>

         </> : <> </>}

         { userIsReturning === true ? <>

        <h1> Welcome "username here"! <br/> Click On A Card Below To Get Started!
        </h1>

        </> : <> </>}
        </Container>

            

        </>
    )
}

export default IntroHeader