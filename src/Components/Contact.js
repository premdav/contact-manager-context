import React from 'react';

class Contact extends React.Component {
    render() {
        const { name, email, phone } = this.props;
        return (
            <div>
                <h4>{name}</h4>
                <ul>
                    <li>Email: {email}</li>
                    <li>Phone: {phone}</li>
                </ul>
            </div>
        )
    }
}

export default Contact;