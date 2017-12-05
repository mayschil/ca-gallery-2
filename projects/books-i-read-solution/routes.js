import HomePage from './pages/HomePage.js'
import BooksRead from './pages/BooksRead.js'
import About from './pages/About.js'
import RatedBooks from './pages/RatedBooks.js'
import BookService from './services/BookService.js'
import BookDetails from './cmps/BookDetails.js'
import ChosenBook from './pages/ChosenBook.js'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/books',
        component: BooksRead
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/books-i-read',
        component: RatedBooks
    },
    {
        path: '/books-i-read/:bookId',
        component: ChosenBook
    }        

];

export default routes;