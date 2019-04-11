import React from 'react';

const Context = React.createContext();

export class Provider extends React.Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'jdoe@gmail.com',
                phone: '555-555-5555'
            },
            {
                id: 2,
                name: 'Shawn Mendes',
                email: 'smend@outlook.com',
                phone: '444-444-4444'
            },
            {
                id: 3,
                name: 'Henry Travis',
                email: 'henry@gmail.com',
                phone: '333-333-3333'
            }
        ]
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;