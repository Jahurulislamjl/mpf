import Vue from 'vue'
import App from './App.vue'
import router from './router'
window.$ = window.jQuery = require('jquery')
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/sass/portfolio.scss'
import '@mdi/font/scss/materialdesignicons.scss'

import './assets/css/slick.css'
import './assets/css/slick-theme.css'
import './assets/js/slick.min.js'




import ProgressBar from 'vuejs-progress-bar'


Vue.use(ProgressBar),

Vue.config.productionTip = false,

new Vue({
  router,
  render: function (h) {
      return h(App)
  },

    mounted() {
        $(document).ready(function () {

            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if (scroll > 150) {
                    $(".header").css({
                        'background': '#fff',
                        'z-index': '10',
                        'box-shadow': '0 10px 30px rgba(0, 0, 0, 0.19)',
                        'transition': 'all 0.7s'
                    });
                    $(".nav-link").css({
                        'color':'black'
                    });
                }

                else{
                    $(".header").css({
                        'background': 'none',
                        'box-shadow': 'none'
                    });
                    $(".nav-link").css({
                        'color':'white'
                    });
                }
            });



            // =======testimonial slide==========

            $('.slider').slick({
                infinite:true,
                slideToShow: 1,
                slideToScroll: 1
            });



            // ============my client slide==========

            $('.client-slider').slick({
                //infinite:true,
                slideToShow: 2,
                slideToScroll: 2
            });


            // ============reference slide==========

            $('.reference-slider').slick({
                infinite:true,
                slideToShow: 1,
                slideToScroll: 1
            });


            $('.instagram-slider').slick({
                infinite:true,
                slideToShow: 1,
                slideToScroll: 1
            });

            //==========interest===============

            $('[data-toggle="tooltip"]').tooltip();


            //==============tab section========

            $(".nav-tabs .nav-link").click(function(){
                $(this).tab('show');
            });
        });
    }
}).$mount('#app')





