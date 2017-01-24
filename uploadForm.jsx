import React from 'react';

class UploadForm extends React.Component {

	constructor(props){
		super(props);
    }	

	handleEmailToChange(e) {
	   this.setState({email_to: e.target.value});
	   console.log('Email To'+e.target.value);
	}

	handleEmailFromChange(e) {
	   this.setState({email_from: e.target.value});
	   console.log('Email From'+e.target.value);
	}

	handleMessageChange(e) {
	   this.setState({message: e.target.value});
	   console.log('message'+e.target.value);
	}

	handleAttachmentChange(e) {
	   this.setState({attachment: e.target.value});
	   console.log('attachment'+e.target.value);
	}

    render() {
		return (
			<div>
				<h1>Upload File to Share</h1>

          		<form id="form1" action={this.props.action} method={this.props.method} onSubmit={this.onSubmit}>
					<input type="email" name="email_to" onChange={this.handleEmailToChange} /> <br/>
					<input type="email" name="email_from" onChange={this.handleEmailFromChange} /> <br/>
					<textarea name="message" rows="10" cols="30" onChange={this.handleMessageChange}  /> <br/>
					<input type="file" name="attachment" accept="image/*" onChange={this.handleAttachmentChange} /> <br/>
					<input type="submit" />
				</form>
			</div>
		);
   	}
}

UploadForm.defaultProps = {
		action: 'http:/api/v1/transfers/upload_file',
		method: 'post',
};

module.exports = UploadForm;

export default UploadForm;