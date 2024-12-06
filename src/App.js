import './App.css';

import Header from './components/Header'
import { UserListComponent } from './components/UserListComponent';
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddUser from './components/AddUser'

function App() {
    return (
        <>
        <BrowserRouter>
            
                <Header />
                <Routes>
                    <Route path='/userlist' element={<UserListComponent />}></Route>
                    <Route path='/addlist' element={<AddUser/>}></Route>
                   
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;