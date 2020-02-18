import React from "react"
import axios from 'axios';


class Form extends React.Component {

  constructor(props) {
 	super(props);
   	this.state = {
     	name: '',
      phone: '',
     	email: '',
     	message: ''
   	}
  }

   handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:8000/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent.");
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){

     this.setState({name: '', phone: '', email: '', message: ''})
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
                  <form action="#sendpage" onSubmit={this.handleSubmit.bind(this)} method="post">
                      <div className="form-blocks">
                          <div className="form-double">
                              <div className="form-div">
                                  <input type="text" name="fio" id="fio" value={this.state.name} onChange={this.onNameChange.bind(this)} className="required" />
                                  <label htmlFor="fio">Full Name*</label>
                              </div>
                              <div className="form-div">
                                  <input type="text" name="phone" id="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
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
                                  <input type="text" name="email" id="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} className="required" />
                                  <label htmlFor="email">Email*</label>
                              </div>
                              <div className="clear"></div>
                          </div>
                          <div className="form-div">
                              <textarea name="message" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} className="required"></textarea>
                              <label htmlFor="message">Please describe your requirements*</label>
                          </div>
                          <input type="button" name="submit" value="Submit" id="submit" className="redgrad" />
                          <div className="form-mess"></div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
      </>
    )
  }

  onNameChange(event) {
  	this.setState({name: event.target.value})
    }

    onPhoneChange(event) {
    	this.setState({phone: event.target.value})
      }

    onEmailChange(event) {
  	this.setState({email: event.target.value})
    }

    onMessageChange(event) {
  	this.setState({message: event.target.value})
    }
}

export default Form
