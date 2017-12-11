'use strict'

import myRoutes from './routes.js'

Vue.use(VueRouter);
const myRouter = new VueRouter({routes : myRoutes})

new Vue({
    template: `
        <section class="box">
                
                <nav>
                </nav>
                <router-view></router-view>
                <footer></footer>            
        </section>
    `,
    created() {
        console.log('Vue App was created!');
    },
    router: myRouter
}).$mount('#app')