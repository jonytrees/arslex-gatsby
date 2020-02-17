import React from "react"
import { withPrefix } from 'gatsby'
import $ from 'jquery'

class Form extends React.Component {

  state = {
    email: '',
    message: '',
    name: ''
  }

  handleInputChange = event => {
    // Check if name input contains text.
    // Don't test email, yet.
    if (event.target.value.length > 0 && event.target.name !== 'email') {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    // Run a simple test to validate email address
    if (event.target.name === 'email') {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (re.test(String(event.target.value).toLowerCase())) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    }
  }

  // Method to handle form submission
  handleFormSubmit = event => {
    event.preventDefault()

    // Test required fields - email and name
    if (this.state.phone.length > 0 && this.state.fio.length > 0) {
      // Send the data with Ajax and jQuery
      $.ajax({
        data: this.state,
        type: 'POST',
        url: withPrefix('../pages/sendEmail.php'),
        success: function(data) {
          console.info(data)
        }
      })
    }
  }


  render(){
    return(
      <>
      <div className="contactus-wrapper" id="sendpage">
          <div className="contactus">
              <h2>Feedback notice:</h2>
              <p>Get in touch</p>
              <p>Complete the below form and one of our experts will contact you within 48 hours.</p>
              <div className="form">
                  <form action="#sendpage" method="post">
                      <div className="form-blocks">
                          <div className="form-double">
                              <div className="form-div">
                                  <input onChange={this.handleInputChange} type="text" name="fio" id="fio" className="required" required={true} />
                                  <label htmlFor="fio">Full Name*</label>
                              </div>
                              <div className="form-div">
                                  <input onChange={this.handleInputChange} type="text" name="phone" id="phone" required={true} />
                                  <label htmlFor="phone">Phone</label>
                              </div>
                              <div className="clear"></div>
                          </div>
                          <div className="form-double">
                              <div className="form-div">
                                  <select name="type" id="type" className="required">
                                      <option value="CYPRUS">CYPRUS</option>
                                      <option value="SAINT VINCENT &amp; THE GRENADINES">SAINT VINCENT &amp; THE GRENADINES</option>
                                      <option value="MAURITIUS">MAURITIUS</option>
                                  </select>
                              </div>
                              <div className="form-div">
                                  <input type="text" name="email" id="email" className="required" />
                                  <label htmlFor="email">Email*</label>
                              </div>
                              <div className="clear"></div>
                          </div>
                          <div className="form-div">
                              <textarea name="message" id="message" className="required"></textarea>
                              <label htmlFor="message">Please describe your requirements*</label>
                          </div>
                          <input type="button" name="submit" value="Submit" onClick={this.handleFormSubmit} id="submit" className="redgrad" />
                          <div className="form-mess"></div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
      </>
    )
  }
}

export default Form
