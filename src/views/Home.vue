<template>
    <div>
        <div class="home-inner">
            <div class="dark-overlay">

            </div>
        </div>


        <section class="about">
            <div class="container">
                <div class="row">
                    <div class="about-me">

                        <div class="profile pt-3 px-4">
                            <div class="row">

                                <div class="col-md-5 profile-picture p-5">
                                    <img src="../assets/images/jahurul.jpg" alt="" width="100%">
                                </div>

                                <div class="col-md-7 biodata p-5">


                                    <div class="intro">
                                        <span class="hello py-1 px-3">HELLO</span>
                                    </div>
                                    <div class="bio-head py-4">
                                        <p class="name">I'm <span>Md. Jahurul Islam</span></p>
                                        <p class="designation">Software Engineer</p>
                                    </div>

                                    <div class="bio-details py-4">
                                        <div class="bio-label">
                                            <div class="bio-title">
                                                <p>AGE</p>
                                            </div>
                                            <div class="bio-description">
                                                <p>25</p>
                                            </div>
                                        </div>

                                        <div class="bio-label">
                                            <div class="bio-title">
                                                <p>ADDRESS</p>
                                            </div>
                                            <div class="bio-description">
                                                <p>Hazipur, Chougachha-7410, Jashore</p>
                                            </div>
                                        </div>

                                        <div class="bio-label">
                                            <div class="bio-title">
                                                <p>EMAIL</p>
                                            </div>
                                            <div class="bio-description">
                                                <p>jahurulislam.soft@gmail.com</p>
                                            </div>
                                        </div>

                                        <div class="bio-label">
                                            <div class="bio-title">
                                                <p>PHONE</p>
                                            </div>
                                            <div class="bio-description">
                                                <p>+880 1880 864 288</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="social-media p-4">
                            <a href="" class="icon-link">
                                <i class="mdi mdi-twitter"></i>
                            </a>
                            <a href="https://www.facebook.com/jahurul.swe" class="icon-link">
                                <i class="mdi mdi-facebook"></i>
                            </a>
                            <a href="" class="icon-link">
                                <i class="mdi mdi-linkedin"></i>
                            </a>
                            <a href="" class="icon-link">
                                <i class="mdi mdi-instagram"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>


        <!--=========Skill Section==========-->

        <section class="skills py-5">
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <p class="title">
                            Professional Skills
                        </p>
                        <p class="sub-title">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores odio perferendis sequi
                            voluptate? Commodi est illum ipsam quis soluta. Voluptatibus?
                        </p>
                    </div>

                    <div class="accordion py-4">
                        <div class="card">
                            <div class="card-items">
                                <div class="card-header" data-toggle="collapse" data-target="#collapse1">
                                    Back-End Web Development
                                </div>
                                <div class="collapse" id="collapse1">
                                    <div class="card-body">
                                        <progress-bar
                                                :options="options"
                                                :value="20"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card front-end">
                            <div class="card-items">
                                <div class="card-header" data-toggle="collapse" data-target="#collapse2">
                                    Front-End Web Development
                                </div>

                                <div class="collapse " id="collapse2">
                                    <div class="card-body front-end-body">
                                        <div class="markup-lang px-4">
                                            <p>Markup Language</p>

                                            <div class="progress-item">
                                                <p>Bootstrap 4</p>
                                                <div class="progress">
                                                    <div class="progress-bar">

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="progress-item">
                                                <p>CSS 3</p>
                                                <div class="progress">
                                                    <div class="progress-bar">

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="progress-item">
                                                <p>HTML 5</p>
                                                <div class="progress">
                                                    <div class="progress-bar">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="script-lang px-4">
                                            <p>Scripting Language</p>

                                            <div class="progress-item">
                                                <p>Vue.js</p>
                                                <div class="progress">
                                                    <div class="progress-bar">

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="progress-item">
                                                <p>JQuery</p>
                                                <div class="progress">

                                                </div>
                                            </div>

                                            <div class="progress-item">
                                                <p>JavaScript</p>
                                                <div class="progress">
                                                    <div class="progress-bar">

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-items">
                                <div class="card-header" data-toggle="collapse" data-target="#collapse3">
                                    Database Management Language
                                </div>
                                <div class="collapse" id="collapse3">
                                    <div class="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque distinctio
                                        earum
                                        error harum illo illum incidunt iste necessitatibus sequi vel.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-items">
                                <div class="card-header" data-toggle="collapse" data-target="#collapse4">
                                    Others
                                </div>
                                <div class="collapse" id="collapse4">
                                    <div class="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque distinctio
                                        earum
                                        error harum illo illum incidunt iste necessitatibus sequi vel.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>

    import ProgressBar from '../../node_modules/vuejs-progress-bar'

    export default {

        components: {
            ProgressBar
        },


        data() {

            return {


                options: {
                    text: {
                        color: '#FFFFFF',
                        shadowEnable: true,
                        shadowColor: '#000000',
                        fontSize: 14,
                        fontFamily: 'Helvetica',
                        dynamicPosition: false,
                        hideText: false
                    },
                    progress: {
                        color: '#2dbd2d',
                        backgroundColor: '#d3d3d3'
                    },
                    layout: {
                        height: 50,
                        width: 100,
                        verticalTextAlign: 63,
                        horizontalTextAlign: 43,
                        zeroOffset: 0,
                        strokeWidth: 15,
                        progressPadding: 0,
                        type: 'circle'
                    }
                }
            }


        }


    }


</script>
