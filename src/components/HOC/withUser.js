import React from 'react';

import { MyContext } from '../../App';

const defaultUser = {
    name: 'name',
    surname: 'surname',
    adress: 'adress',
    email: 'email',
    isAdmin: false
  }

function withUser(WrappedComponent) {

    return class extends React.Component {
        static contextType = MyContext;

        constructor(props) {
            super(props);
            this.state = {
                defaultUser: {},
                loggedUser: {}
            };
            this.setLoggedUser = (value) => {
                this.setState(() => ({
                    loggedUser: value
                }));
            };
            this.setDefaultUser = (value) => {
                this.setState(() => ({
                    defaultUser: value
                }));
            };
        }
        // mogą być will unmount oraz handlery ...
        componentDidMount() {
            // get API data
            // this.setState({loggedUser: MyContext});
            this.setDefaultUser(defaultUser);
            this.setLoggedUser(this.context);
        }
        render () {
            return (
                <MyContext.Consumer>
                    {(value) =>
                        <WrappedComponent
                            loggedUser={this.state.loggedUser}
                            // loggedUser={this.setLoggedUser(value)}
                            defaultUser={this.state.defaultUser}
                            {...this.props}
                        />
                    }
                </MyContext.Consumer>
            );
        }
    };
}

export default withUser;