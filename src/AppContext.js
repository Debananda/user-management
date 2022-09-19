import {Component, createContext} from 'react';

export const AppContext = createContext({users:[], selectedUser: undefined});

export class AppContextProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
            selectedUser: undefined
        }
    }
    render(){
        return <AppContext.Provider value={{...this.state}}>
            {this.props.children}
            </AppContext.Provider>
    }
}

