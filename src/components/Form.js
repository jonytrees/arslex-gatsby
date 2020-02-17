import React from "react"
import axios from "axios"

/**
 * @component Form
 * @props - { object } -  config
 */

class Form extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     mailSent: false,
     error: null
   };
 }
 /**
 * @function handleFormSubmit
 * @param e { obj } - form event
 * @return void
 */

 handleFormSubmit = e => {
   e.preventDefault()
   axios({
        method: "post",
        url: `${process.env.REACT_APP_API}`,
        headers: { "content-type": "application/json" },
        data: this.state
      })
        .then(result => {
          if (result.data.sent) {
            this.setState({
              mailSent: result.data.sent
            });
            this.setState({ error: false });
          } else {
            this.setState({ error: true });
          }
        })
        .catch(error => this.setState({ error: error.message }));
 };

 /**
     * @function handleChange
     * @param e { obj } - change event
     * @param field { string } - namve of the field
     * @return void
     */

 handleChange = (e, field) => {
   let value = e.target.value;
   let updateValue = {};
   updateValue[field] = value;
   this.setState(updateValue);
 };


  render(){
    return(
      <>
      <div className="contactus-wrapper" id="sendpage">
          <div className="contactus">
              <h2>Feedback notice:</h2>
              <p>Get in touch</p>
              <p>Complete the below form and one of our experts will contact you within 48 hours.</p>
              <div className="form">
                  <form action="#sendpage" method="post" onSubmit={e => this.handleFormSubmit(e)}>
                      <div className="form-blocks">
                          <div className="form-double">
                              <div className="form-div">
                                  <input type="text" name="fio" id="fio" className="required" />
                                  <label htmlFor="fio">Full Name*</label>
                              </div>
                              <div className="form-div">
                                  <input type="text" name="phone" id="phone" />
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
                          <input type="button" name="submit" value="Submit"  id="submit" className="redgrad" />
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
