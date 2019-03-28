<template>
  <div id="app">

    <!-- Navigation Bar-->
    <header id="topnav" class="defaultscroll fixed-top sticky">
        <div class="container">
            <!-- Logo container-->
            <div>
                <router-link to="/" class="logo text-uppercase">
                    <img src="images/logo-light.png" alt="" class="logo-light" height="68" />
                    <img src="images/logo-dark.png" alt="" class="logo-dark" height="68" />
                </router-link>
            </div>
            <!-- End Logo container-->
            <div class="menu-extras">
                <div class="menu-item">
                    <!-- Mobile menu toggle-->
                    <a class="navbar-toggle">
                        <div class="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                    <!-- End mobile menu toggle-->
                </div>
            </div>
            <div id="navigation">
                <!-- Navigation Menu-->
                <ul class="navigation-menu">
                    


                    <li class="has-submenu">
                        <router-link to="/">Home</router-link>
                        <span class="menu-arrow"></span>
                        <ul class="submenu">
                            <li>
                                <router-link to="/about">About Us </router-link>
                            </li>
                            <li>
                                <router-link to="/contact">Contact Us</router-link>
                            </li>
                            <li class="has-submenu">
                                <router-link to="/faq">FAQ</router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="">
                        <router-link to="/sleep">Start Sleeping</router-link>
                    </li>

                    <li class="">
                        <router-link to="/statistics">See My Stats</router-link>
                    </li>

                    <li class="">
                        <router-link to="/twelve-sleep-habits">Sleep Habits</router-link>
                    </li>


                    <li class="">
                        <router-link to="/login">Login</router-link>
                    </li>

                    <li class="">
                        <router-link to="/logout">Logout</router-link>
                    </li>

                    <li class="">
                        <router-link to="/signup" class="btn-custom btn-rounded">Try it free</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>

    <router-view/>

    <!-- Footer -->
    <section class="bg-dark footer pt-2" id="contact">
        <div class="container">
            <div class="row pt-5">
                <div class="col-lg-4">
                    <h5 class="text-white footer-title ">About Sleep Coach</h5>
                    <div class="mt-4">
                        <p class="footer-desc">Sleep Coach is the app that will help you focus on the factors to help your sleep. No gimmicks.</p>
                    </div>
                    <div class="mt-4">
                        <ul class="list-unstyled text-white footer-social list-inline">
                            <li class="list-inline-item"><a href="#"><i class="mdi mdi-facebook facebook"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="mdi mdi-instagram instagram"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="mdi mdi-twitter twitter"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="mdi mdi-linkedin linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <h5 class="text-white footer-title">Support</h5>
                    <div class="mt-4">
                        <ul class="list-unstyled text-white footer-list">
                            <li><router-link to="/contact">Help & Support</router-link></li>
                            <li><router-link to="/privacy">Privacy & Policy</router-link></li>
<!--                             <li><router-link to="/">News</router-link></li> -->
                            <!-- <li><router-link to="/">Terms & Conditions</router-link></li> -->
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <h5 class="text-white footer-title">Social</h5>
                    <div class="mt-4">
                        <ul class="list-unstyled footer-list">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Behance</a></li>
                            <li><a href="#">Dribbble</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2">
                    <h5 class="text-white footer-title">Get in touch</h5>
                    <div class="mt-4">
                        <p>Europe: +1 00 12 34 5</p>
                        <p>US: +1 67 89 01 23 4</p>
                        <p>Canada: +1 00 12 34 5</p>
                        <p><a href="mailto: the.sleep.coach.app@gmail.com">the.sleep.coach.app@gmail.com</a></p>
                    </div>
                </div>
            </div>
            <div class="footer-border"></div>
            <div class="row pb-4">
                <div class="col-lg-12">
                    <div class="float-right pull-none">
                        <p class="mb-0">© 2019 - All Right Reserved</p>
                    </div>
                    <div class="float-left pull-none">
                        <p class="footer-terms">Sleep better.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Footer end -->


  </div>
</template>

<style>

</style>