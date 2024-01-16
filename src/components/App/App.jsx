import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min.js';

function App() {
    return (
        <div className="App">
            <header className="App-header">
            <h1 className="App-title">GitHub Student List</h1>
            </header>
            <br/>
            <Router>
                <nav>
                    <div>
                        <Link to='/home'>Home</Link>
                    </div>
                    <div>
                        <Link to='/allStudents/'>Students</Link>
                    </div>
                    <div>
                        <Link to='/about'>About</Link>
                    </div>
                </nav>
                <Route path='/home/' exact>
                    <StudentForm />
                </Route>

                <Route path='/allStudents/'>
                    <p>Student list:</p>
                    <StudentList />
                </Route>

                <Route path='/about'>
                    <h3>About</h3>
                    <p>This is a simple app to display students GitHub usernames</p>
                </Route>

            </Router>
            
        </div>
    );
}

export default App;
