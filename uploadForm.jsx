import React from 'react';

class UploadForm extends React.Component {
   render() {
		return (
			<div>
				<h1>Upload File to Share</h1>
				<form>
					<input type="email" name="email_to" /> <br/>
					<input type="email" name="email_from" /> <br/>
					<textarea name="message" rows="10" cols="30" /> <br/>
					<input type="file" name="attachment" accept="image/*" /> <br/>
					<input type="submit" />
				</form>
			</div>
		);
   }
}

export default UploadForm;