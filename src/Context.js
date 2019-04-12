import React from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => 
                    contact.id !== action.payload
                    )
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        default: 
            return state;
    }
};

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
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
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