'use strict'

import myRoutes from './routes.js'

Vue.use(VueRouter);
const myRouter = new VueRouter({ routes: myRoutes })


new Vue({
    template: `
    <section>
            <h1>My App</h1> 
            <nav>
                <router-link to="/"exact>Home</router-link>   
                <router-link to="/about">About</router-link>
                <router-link to="/books">Books</router-link>
                <router-link to="/books-i-read">Books I Read</router-link>
            </nav>
            <router-view></router-view>
            <footer>cofferights 2018</footer>            
    </section>
`,
    created() {
        console.log('Vue instance was created!');
    },

    router: myRouter,
}).$mount('#app')