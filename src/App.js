import React, {Component} from 'react'
import './App.css'
import AppHeader from './AppHeader'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

class App extends Component {
    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)}
    }

    render() {
        return (
            <div className="App">
                <AppHeader/>
                <div className="App-header">
                    MAIN PAGE {this.props.children}
                </div>
            </div>
        )
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
}

export default App
