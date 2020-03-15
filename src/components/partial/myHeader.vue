<template>
    <div>
        <header class="header">
            <div class="">
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand" href="">
                        <img src="../../assets/images/jahurul.jpg" width="30" alt="">
                    </a>
                    <button class="navbar-toggler user-defined" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <!--<span class="mdi mdi-menu"></span>-->

                        <span @click="icon=!icon" :class="[icon ? 'mdi mdi-menu' : 'mdi mdi-close']"></span>

                    </button>
                    <div class="collapse navbar-collapse nav-user-define micro-nav" id="navbarSupportedContent-4">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/#about" >
                                    about
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#skill" >
                                    skills
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"  href="/#portfolio">
                                    portfolio
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#experience">
                                    experience
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#pricing">
                                    price
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-5"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-newspaper-o"></i> blog </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-user-define"
                                     aria-labelledby="navbarDropdownMenuLink-4">
                                    <router-link class="dropdown-item" :to="{name:'photoGallery'}">photo gallery</router-link>
                                    <router-link class="dropdown-item" :to="{name:''}">video gallery</router-link>

                                </div>
                            </li>

                            <!--<li class="nav-item">-->
                                <!--<button class="nav-link" @click="$root.scrollToElement('home-contact')">-->
                                    <!--calendar-->
                                <!--</button>-->
                            <!--</li>-->

                            <li class="nav-item">
                                <a class="nav-link" href="/#contact" >
                                    contact
                                </a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    other </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-user-define"
                                     aria-labelledby="navbarDropdownMenuLink-4">
                                    <router-link class="dropdown-item" :to="{name:''}">Thank You</router-link>
                                    <router-link class="dropdown-item" :to="{name:''}">Review</router-link>
                                    <router-link class="dropdown-item" :to="{name:''}">Download</router-link>

                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

    </div>
</template>

<script>
    export default {

        data(){
            return{
                icon:'true'
            }
        }

    }
</script>