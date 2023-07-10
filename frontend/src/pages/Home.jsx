import React from 'react'
import {Link} from 'react-router-dom'
import  {FaQuestionCircle,FaTicketAlt} from 'react-icons/fa'
function Home() {
  return (
    <>
      <section className='heading'>
        <h1>What do u need help with?</h1>
        <p>Please choose from an option below</p>
      </section>

      <Link to= '/new-ticket' className='btn btn-reverse btn-block'>
      <FaQuestionCircle/> Create New Ticket
      </Link>
    

      <Link to= '/ticket' className='btn  btn-block'>
      <FaTicketAlt/> view My Tickets
      </Link>
      <div className="main">
        <h1>this is the Change</h1>
      </div>
    </>
  )
}

export default Home