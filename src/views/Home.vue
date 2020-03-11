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


        <!--======== objectiove section========-->

        <section id="objective" class="py-5">
            <div class="container">
                <div class="row">
                    <p class="objective-text">Hello! I’m Jahurul Islam. Senior Web Developer specializing in front end
                        development. Experienced with all stages of the development cycle for dynamic web projects.
                        Well-versed in numerous programming languages including JavaScript, SQL, and C. Stng background
                        in project management and customer relations.</p>
                </div>
            </div>
        </section>



        <!--==============Testimonial Section=============-->


        <section id="testimonial" class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="slider">
                            <div class="quote">
                                <blockquote class="blockquote">
                                    <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                                      earum, tempora expedita amet quis perspiciatis officia! Maiores, in quidem.</p>
                                    <footer class="blockquote-footer">
                                        Jahurul From <a href="#">Read More</a>
                                    </footer>
                                </blockquote>
                            </div>

                            <div class="quote">
                                <blockquote class="blockquote">
                                    <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                                        earum, tempora expedita amet quis perspiciatis officia! Maiores, in quidem.</p>
                                    <footer class="blockquote-footer">
                                        Jahurul From <a href="#">Read More</a>
                                    </footer>
                                </blockquote>
                            </div>
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


        <!--=======portfolio section========-->

        <section id="portfolio">
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <p class="title">
                            Portfolio
                        </p>
                        <p class="sub-title">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores odio perferendis sequi
                            voluptate? Commodi est illum ipsam quis soluta. Voluptatibus?
                        </p>
                    </div>

                    <nav class="navbar navbar-expand-sm">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="" class="nav-link">Photography</a>
                            </li>
                            <li class="nav-item">
                                <a href="" class="nav-link">UX design</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>



        <!--==============Service Section===========-->

        <section id="service">
            <div class="container">
                <div class="row">
                    <div class="col-12 section-title">
                        <p class="title">
                            My Services
                        </p>
                        <p class="sub-title">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores odio perferendis sequi
                            voluptate? Commod
                        </p>
                    </div>

                    <div class="service-items p-5 my-5">
                        <div class="row">
                            <div class="col-md-4 service-category">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="service-icon">
                                            <i class="mdi mdi-brush"></i>
                                        </div>
                                        <div class="card-title">
                                            <p class="title">Design</p>
                                            <p class="sub-title">UI/UX Design</p>
                                        </div>
                                        <hr>
                                        <div class="service-description">
                                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolor
                                                doloribus eaque et expedita, fugit magnam nulla officiis suscipit temporibus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 service-category">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="service-icon">
                                            <i class="mdi mdi-monitor"></i>
                                        </div>
                                        <div class="card-title">
                                            <p class="title">Design</p>
                                            <p class="sub-title">UI/UX Design</p>
                                        </div>
                                        <hr>
                                        <div class="service-description">
                                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolor
                                                doloribus eaque et expedita, fugit magnam nulla officiis suscipit temporibus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 service-category">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="service-icon">
                                            <i class="mdi mdi-heart"></i>
                                        </div>
                                        <div class="card-title">
                                            <p class="title">Design</p>
                                            <p class="sub-title">UI/UX Design</p>
                                        </div>
                                        <hr>
                                        <div class="service-description">
                                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolor
                                                doloribus eaque et expedita, fugit magnam nulla officiis suscipit temporibus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-5">
                            <div class="col-md-4 service-category">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="service-icon">
                                            <i class="mdi mdi-brush"></i>
                                        </div>
                                        <div class="card-title">
                                            <p class="title">Design</p>
                                            <p class="sub-title">UI/UX Design</p>
                                        </div>
                                        <hr>
                                        <div class="service-description">
                                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolor
                                                doloribus eaque et expedita, fugit magnam nulla officiis suscipit temporibus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 service-category">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="service-icon">
                                            <i class="mdi mdi-monitor"></i>
                                        </div>
                                        <div class="card-title">
                                            <p class="title">Design</p>
                                            <p class="sub-title">UI/UX Design</p>
                                        </div>
                                        <hr>
                                        <div class="service-description">
                                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolor
                                                doloribus eaque et expedita, fugit magnam nulla officiis suscipit temporibus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 service-category">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="service-icon">
                                            <i class="mdi mdi-heart"></i>
                                        </div>
                                        <div class="card-title">
                                            <p class="title">Design</p>
                                            <p class="sub-title">UI/UX Design</p>
                                        </div>
                                        <hr>
                                        <div class="service-description">
                                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolor
                                                doloribus eaque et expedita, fugit magnam nulla officiis suscipit temporibus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>


        <!--=============Work Experience==================-->


        <section id="experience">
            <div class="container">
                <div class="row">
                    <div class="col-12 section-title">
                        <p class="title">
                            Work Experience
                        </p>
                        <p class="sub-title">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores odio perferendis sequi
                            voluptate? Commod
                        </p>
                    </div>

                    <div class="experience-items py-5">
                        <div class="row">

                            <div class="col-md-6 experience-left">
                                <div class="card left-card">
                                    <div class="card-body">
                                        <div class="year">
                                            <p>2019-2020</p>
                                        </div>
                                        <div class="company-title">
                                            <img src="../assets/images/companylogo/mdit.png" alt="" class="logo">
                                            <p class="position">Web Developer</p>
                                        </div>
                                        <div class="work-description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat harum
                                            illum ipsa laborum quam quas saepe sequi ut! Tempore!
                                        </div>
                                        <div class="arrow-box">

                                        </div>
                                        <div class="line-dot">

                                        </div>
                                    </div>
                                </div>

                                <div class="card left-card">
                                    <div class="card-body">
                                        <div class="year">
                                            <p>2019-2020</p>
                                        </div>
                                        <div class="company-title">
                                            <img src="../assets/images/companylogo/mdit.png" alt="" class="logo">
                                            <p class="position">Web Developer</p>
                                        </div>
                                        <div class="work-description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat harum
                                            illum ipsa laborum quam quas saepe sequi ut! Tempore!
                                        </div>
                                        <div class="arrow-box">

                                        </div>
                                        <div class="line-dot">

                                        </div>
                                    </div>
                                </div>

                                <div class="card left-card">
                                    <div class="card-body">
                                        <div class="year">
                                            <p>2019-2020</p>
                                        </div>
                                        <div class="company-title">
                                            <img src="../assets/images/companylogo/mdit.png" alt="" class="logo">
                                            <p class="position">Web Developer</p>
                                        </div>
                                        <div class="work-description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat harum
                                            illum ipsa laborum quam quas saepe sequi ut! Tempore!
                                        </div>
                                        <div class="arrow-box">

                                        </div>
                                        <div class="line-dot">

                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div class="col-md-6 experience-right">
                                <div class="card right-card">
                                    <div class="card-body ">
                                        <div class="year">
                                            <p>2019-2020</p>
                                        </div>
                                        <div class="company-title">
                                            <img src="../assets/images/companylogo/mdit.png" alt="" class="logo">
                                            <p class="position">Web Developer</p>
                                        </div>
                                        <div class="work-description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat harum
                                            illum ipsa laborum quam quas saepe sequi ut! Tempore!
                                        </div>
                                        <div class="arrow-box">

                                        </div>
                                        <div class="line-dot">

                                        </div>
                                    </div>
                                </div>

                                <div class="card right-card">
                                    <div class="card-body">
                                        <div class="year">
                                            <p>2019-2020</p>
                                        </div>
                                        <div class="company-title">
                                            <img src="../assets/images/companylogo/mdit.png" alt="" class="logo">
                                            <p class="position">Web Developer</p>
                                        </div>
                                        <div class="work-description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat harum
                                            illum ipsa laborum quam quas saepe sequi ut! Tempore!
                                        </div>
                                        <div class="arrow-box">

                                        </div>
                                        <div class="line-dot">

                                        </div>
                                    </div>
                                </div>

                                <div class="card right-card">
                                    <div class="card-body">
                                        <div class="year">
                                            <p>2019-2020</p>
                                        </div>
                                        <div class="company-title">
                                            <img src="../assets/images/companylogo/mdit.png" alt="" class="logo">
                                            <p class="position">Web Developer</p>
                                        </div>
                                        <div class="work-description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat harum
                                            illum ipsa laborum quam quas saepe sequi ut! Tempore!
                                        </div>
                                        <div class="arrow-box">

                                        </div>
                                        <div class="line-dot">

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!--================= Training Summary==============-->

        <section id="training">
            <div class="container">
                <div class="row">
                    <div class="col-12 section-title">
                        <p class="title">
                            Training Summary
                        </p>
                        <p class="sub-title">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores odio perferendis sequi
                            voluptate? Commod
                        </p>
                    </div>

                    <div class="training-items py-5">
                        <div class="row">

                            <div class="col-md-6 training-left">
                                <div class="card left-card">
                                    <div class="card-body">
                                        <div class="year">
                                            <p>2019-2020</p>
                                        </div>
                                        <div class="organization-title">
                                            <img src="../assets/images/companylogo/bitm.png" alt="" class="logo">
                                            <p class="position">Web Developer</p>
                                        </div>
                                        <div class="training-description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat harum
                                            illum ipsa laborum quam quas saepe sequi ut! Tempore!
                                        </div>
                                        <div class="arrow-box">

                                        </div>
                                        <div class="line-dot">

                                        </div>
                                    </div>
                                </div>

                                <div class="card left-card">
                                    <div class="card-body">
                                        <div class="year">
                                            <p>2019-2020</p>
                                        </div>
                                        <div class="organization-title">
                                            <img src="../assets/images/companylogo/bitm.png" alt="" class="logo">
                                            <p class="position">Web Developer</p>
                                        </div>
                                        <div class="training-description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat harum
                                            illum ipsa laborum quam quas saepe sequi ut! Tempore!
                                        </div>
                                        <div class="arrow-box">

                                        </div>
                                        <div class="line-dot">

                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div class="col-md-6 training-right">
                                <div class="card right-card">
                                    <div class="card-body ">
                                        <div class="year">
                                            <p>2019-2020</p>
                                        </div>
                                        <div class="organization-title">
                                            <img src="../assets/images/companylogo/bitm.png" alt="" class="logo">
                                            <p class="position">Web Developer</p>
                                        </div>
                                        <div class="training-description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat harum
                                            illum ipsa laborum quam quas saepe sequi ut! Tempore!
                                        </div>
                                        <div class="arrow-box">

                                        </div>
                                        <div class="line-dot">

                                        </div>
                                    </div>
                                </div>

                                <div class="card right-card">
                                    <div class="card-body ">
                                        <div class="year">
                                            <p>2019-2020</p>
                                        </div>
                                        <div class="organization-title">
                                            <img src="../assets/images/companylogo/bitm.png" alt="" class="logo">
                                            <p class="position">Web Developer</p>
                                        </div>
                                        <div class="training-description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat harum
                                            illum ipsa laborum quam quas saepe sequi ut! Tempore!
                                        </div>
                                        <div class="arrow-box">

                                        </div>
                                        <div class="line-dot">

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!--===========Education Section============-->

        <section id="education" class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 section-title">
                        <p class="title">
                            Education
                        </p>
                        <p class="sub-title">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores odio perferendis sequi
                            voluptate?
                        </p>
                    </div>

                    <div class="col-12 university-section pt-3">
                        <div class="university">
                            <div class="card">
                                <div class="card-body">
                                    <div class="year">
                                        <p>2015-2019</p>
                                    </div>
                                    <div class="course">
                                        <p>B.Sc in Software Engineering</p>
                                    </div>
                                    <div class="institution">
                                        Daffodil International University
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 college-section">
                        <div class="college">
                            <div class="card">
                                <div class="card-body">
                                    <div class="year">
                                        <p>2015-2019</p>
                                    </div>
                                    <div class="course">
                                        <p>B.Sc in Software Engineering</p>
                                    </div>
                                    <div class="institution">
                                        Daffodil International University
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 school-section">
                        <div class="school">
                            <div class="card">
                                <div class="card-body">
                                    <div class="year">
                                        <p>2015-2019</p>
                                    </div>
                                    <div class="course">
                                        <p>B.Sc in Software Engineering</p>
                                    </div>
                                    <div class="institution">
                                        Daffodil International University
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!--============= Pricing Section==============-->

        <section id="pricing" class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 section-title">
                        <p class="title">
                            Pricing
                        </p>
                        <p class="sub-title">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores odio perferendis sequi
                            voluptate?
                        </p>
                    </div>
                    <div class="price-items col-12">
                        <div class="row">
                            <div class="col-md-4 price-item">
                                <div class="card">
                                    <div class="card-header">
                                        <p>$50 <small>/mon</small></p>
                                    </div>
                                    <div class="card-body">
                                        <p class="card-title">basic</p>
                                        <p>Lorem ipsum dolor sit</p>
                                        <p>Lorem ipsum dolor sit</p>
                                        <p>Lorem ipsum dolor sit</p>
                                        <p>Lorem ipsum dolor sit</p>

                                        <button class="btn"> BUY NOW</button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 price-item price-item-mid">
                                <div class="card">
                                    <div class="card-header">
                                        <p>$50 <small>/mon</small></p>
                                    </div>
                                    <div class="card-body">
                                        <p class="card-title">basic</p>
                                        <p>Lorem ipsum dolor sit</p>
                                        <p>Lorem ipsum dolor sit</p>
                                        <p>Lorem ipsum dolor sit</p>
                                        <p>Lorem ipsum dolor sit</p>

                                        <button class="btn"> BUY NOW</button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 price-item">
                                <div class="card">
                                    <div class="card-header">
                                        <p>$50 <small>/mon</small></p>
                                    </div>
                                    <div class="card-body">
                                        <p class="card-title">basic</p>
                                        <p>Lorem ipsum dolor sit</p>
                                        <p>Lorem ipsum dolor sit</p>
                                        <p>Lorem ipsum dolor sit</p>
                                        <p>Lorem ipsum dolor sit</p>

                                        <button class="btn"> BUY NOW</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!--===============Client Section=============-->

        <section id="client" class="py-5">
            <div class="container">
                <div class="row">

                    <div class="col section-title">
                        <p class="title">
                            My Clients
                        </p>
                        <p class="sub-title">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores odio perferendis sequi
                            voluptate?
                        </p>
                    </div>
                </div>

                <div class="row">

                    <div class="col">
                        <div class="client-slider">

                            <div class="quote" style="background: red;">
                                <img src="../assets/images/companylogo/mdit.png" alt="">
                            </div>

                            <div class="quote" style="background: green;">
                                Hello
                            </div>
                            <div class="quote" style="background: yellow;">
                                Hi
                            </div>
                            <div class="quote" style="background: orange;">
                                Yes
                            </div>
                            <div class="quote" style="background: black;">
                                ohhh
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


        <!--===============reference Section=============-->

        <section id="reference" class="py-5">
            <div class="container">
                <div class="row">

                    <div class="col section-title">
                        <p class="title">
                            References
                        </p>
                    </div>
                </div>

                <div class="row">

                    <div class="col">
                        <div class="reference-slider">

                            <div class="reference-person">
                                <div class="person-pic">
                                    <img src="../assets/images/jahurul.jpg" class="p-photo" alt="">
                                </div>
                                <div class="person-details">
                                    <p class="name">Md. Jahurul Islam</p>
                                    <p>Software Engineer</p>
                                    <p>MicroDreamIT</p>
                                    <p>Phone: +880 1880 864 288</p>
                                    <p>Email: jahurulislam.soft@gmail.com</p>

                                </div>
                            </div>

                            <div class="reference-person">
                                <div class="person-pic">
                                    <img src="../assets/images/jahurul.jpg" class="p-photo" alt="">
                                </div>
                                <div class="person-details">
                                    <p class="name">Md. Jahurul Islam</p>
                                    <p>Software Engineer</p>
                                    <p>MicroDreamIT</p>
                                    <p>Phone: +880 1880 864 288</p>
                                    <p>Email: jahurulislam.soft@gmail.com</p>

                                </div>
                            </div>

                            <div class="reference-person">
                                <div class="person-pic">
                                    <img src="../assets/images/jahurul.jpg" class="p-photo" alt="">
                                </div>
                                <div class="person-details">
                                    <p class="name">Md. Jahurul Islam</p>
                                    <p>Software Engineer</p>
                                    <p>MicroDreamIT</p>
                                    <p>Phone: +880 1880 864 288</p>
                                    <p>Email: jahurulislam.soft@gmail.com</p>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>


        <!--===============Statistics Section===========-->

        <div id="statistic">
            <div class="container">

                <div class="row">
                    <div class="col section-title">
                        <p class="title">
                            Statistics
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="counter">
                                    <p>500</p>
                                </div>
                                <div class="category">
                                    <i class="mdi mdi-folder-multiple"></i>
                                    <p>Projects</p>
                                </div>
                                <p class="duration">for 4 years</p>

                                <hr>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="counter">
                                    <p>500</p>
                                </div>
                                <div class="category">
                                    <i class="mdi mdi-folder-multiple"></i>
                                    <p>Projects</p>
                                </div>
                                <p class="duration">for 4 years</p>

                                <hr>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="counter">
                                    <p>500</p>
                                </div>
                                <div class="category">
                                    <i class="mdi mdi-folder-multiple"></i>
                                    <p>Projects</p>
                                </div>
                                <p class="duration">for 4 years</p>

                                <hr>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="counter">
                                    <p>500</p>
                                </div>
                                <div class="category">
                                    <i class="mdi mdi-folder-multiple"></i>
                                    <p>Projects</p>
                                </div>
                                <p class="duration">for 4 years</p>

                                <hr>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>



        <!--===========Interest Section===========-->

        <section id="interest">
            <div class="container">
                <div class="row">
                    <div class="col section-title">
                        <p class="title">
                            My Interests
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="interest-details">
                        <p class="interest-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor maxime molestias
                            necessitatibus officia quam quasi sint vero voluptatem. Amet, ea.
                        </p>

                        <div class="interest-items">
                            <div class="item" data-toggle="tooltip" title="Hooray!" data-placement="bottom">
                                <i class="mdi mdi-walk item-icon"></i>
                            </div>
                            <div class="item" data-toggle="tooltip" title="Hooray!" data-placement="bottom">
                                <i class="mdi mdi-walk item-icon"></i>
                            </div>
                            <div class="item" data-toggle="tooltip" title="Hooray!" data-placement="bottom">
                                <i class="mdi mdi-walk item-icon"></i>
                            </div>
                            <div class="item" data-toggle="tooltip" title="Hooray!" data-placement="bottom">
                                <i class="mdi mdi-walk item-icon"></i>
                            </div>
                            <div class="item" data-toggle="tooltip" title="Hooray!" data-placement="bottom">
                                <i class="mdi mdi-walk item-icon"></i>
                            </div>
                            <div class="item" data-toggle="tooltip" title="Hooray!" data-placement="bottom">
                                <i class="mdi mdi-walk item-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>


        <!--==============Contact============-->

        <section id="contact">
            <div class="container">
                <div class="row">
                    <div class="col section-title">
                        <p class="title">
                            Contact
                        </p>
                    </div>
                </div>

                <div class="row contact-area">
                    <div class="col-md-6">
                        <div class="card form-card p-4">
                            <div class="card-body">
                                <p class="head-text">Feel free to contact me</p>
                                <input type="text" class="form-control" placeholder="NAME">
                                <input type="text" class="form-control" placeholder="EMAIL">
                                <input type="text" class="form-control" placeholder="SUBJECT">
                                <textarea class="form-control" rows="3" placeholder="MESSAGE"></textarea>
                                <input type="checkbox" id="policy">
                                <label for="policy"> I have read the Privacy Policy note.</label><br>
                                <input type="button" value="SEND" class="btn">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card address-card p-4">
                            <div class="card-body">
                                <div class="contact-address">
                                    <div class="address">
                                        <p class="type">EMAIL</p>
                                        <P class="description">jahurulislam@gmail.com</P>
                                    </div>
                                    <div class="address">
                                        <p class="type">EMAIL</p>
                                        <P class="description">jahurulislam@gmail.com</P>
                                    </div>
                                    <div class="address">
                                        <p class="type">EMAIL</p>
                                        <P class="description">jahurulislam@gmail.com</P>
                                    </div>
                                    <div class="address">
                                        <p class="type">EMAIL</p>
                                        <P class="description">jahurulislam@gmail.com</P>
                                    </div>
                                    <div class="address">
                                        <p class="type">EMAIL</p>
                                        <P class="description">jahurulislam@gmail.com</P>
                                    </div>
                                </div>

                                <div class="map-location">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.656564242234!2d90.36362721445605!3d23.759623394341933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf579e10e0ef%3A0x6b7325b0f90d6a27!2sMohammadpur%20Town%20Hall%20Market!5e0!3m2!1sen!2sbd!4v1583862715187!5m2!1sen!2sbd" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
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
                },

            }


        }


    }



</script>
