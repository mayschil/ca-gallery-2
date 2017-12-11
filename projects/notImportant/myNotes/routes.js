import HomePage from './pages/HomePage.js'
import AddNote from './pages/AddNote.js'
import ChosenNote from './pages/ChosenNote.js'
// import CarDetailsPage from './pages/CarDetailsPage.js'
// import CarEditPage from './pages/CarEditPage.js'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/createNote',
        component: AddNote
    },    
    {
        path: '/note/:noteId',
        component: ChosenNote
    } 
    
  
   

];

export default routes;