import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './components/header/Header';
import {fetchUser} from './actions';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currenUser: null
        };
    }

    componentDidMount() {
        const {fetchUser} = this.props;
        fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <div>
                            <Route exact path='/' component={Landing}/>
                            <Route exact path='/surveys' component={Dashboard}/>
                            <Route path='/surveys/new' component={SurveyNew}/>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch(fetchUser())
})

export default connect(null, mapDispatchToProps)(App);