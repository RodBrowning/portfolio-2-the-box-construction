import ContactST from '../../styles/Contact.module.css'
import React from 'react'

const Contact = () => {
  return (
    <section className={ContactST.container_fluid}>
      <div className={`container ${ContactST.container}`}>
        <h4>What can us do for you?</h4>
        <h5>
          We are ready to work on a project of any complexity, whether it’s commercial or residential.
        </h5>
        <form>
          <div>
            <input type="text" placeholder='Your Name'required />
          </div>
          <div>
            <input type="email" placeholder='Email'required/>
          </div>
          <div>
            <select name="" id="" required>
              <option value="0">Reason for Contacting</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <input type="phone" placeholder='Phone' />
          <textarea name="textarea" id="" cols={30} rows={10} placeholder='Message'></textarea>
          <p><span>*</span> indicates a required field</p>
          <input type="submit" className='btn btn-primary' value="Submit" />
        </form>
      </div>
    </section>
  )
}

export default Contact