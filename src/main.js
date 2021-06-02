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

import './assets/css/uikit.min.css'
import './assets/js/uikit.min.js'
import './assets/js/uikit-icons.min.js'

import WOW from './assets/js/wow.min'

import ProgressBar from 'vuejs-progress-bar'




Vue.use(ProgressBar);

Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) {
      return h(App)
  },

    mounted() {

        new WOW.WOW().init();

        $(document).ready(function () {

            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if (scroll > 150) {
                    $(".navbar").css({
                        'background': '#E8676B',
                        'z-index': '10',
                        'box-shadow': '0 10px 30px rgba(0, 0, 0, 0.19)',
                        'transition': 'all 0.7s'
                    });
                    $(".nav-link").css({
                        'color':'#fff'
                    });
                }

                else{
                    $(".navbar").css({
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
                dots: true,
                infinite:true,
                slideToShow: 1,
                slideToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000
            });



            // ============my client slide==========


            $('.client-slider').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                centerMode: true,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 2000
            });


            // ============reference slide==========

            $('.reference-slider').slick({
                infinite:true,
                slideToShow: 1,
                slideToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000
            });


            $('.instagram-slider').slick({
                dots: true,
                infinite:true,
                slideToShow: 1,
                slideToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000
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





