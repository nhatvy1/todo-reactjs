import './App.scss';
import Nav from './components/Navigation/Nav';
import ListTodo from './components/Todos/ListTodo';
import Users from './components/Users/Users';
import Home from './components/Example/Home';
import MyComponent from './components/Example/MyComponent';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />

				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/todo">
						<ListTodo />
					</Route>
					<Route path="/form">
						<MyComponent />
					</Route>
					<Route path="/user">
						<Users />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
