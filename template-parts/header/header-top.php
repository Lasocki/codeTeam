<?php
/**
 * Displays header site branding
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

 ?

<div class="row px-5 d-lg-flex m-0 d-none" id="top">
    <div class="col-12 p-0 col-lg-3 d-flex align-items-center justify-content-between justify-content-lg-start">
        <a href="index.html" class="sygnet" data-aos="fade-right" data-aos-delay="150">
            <img src="img/sygnet.svg" class="img-fluid"/>
        </a>
        <div class="menuIcon d-lg-none" onclick="openNav()">
            <img src="img/menu.png" class="img-fluid" alt="">
        </div>
    </div>
    <div class="d-none d-lg-flex col-lg-9 align-items-center justify-content-end p-0" data-aos="fade-down">
        <nav id="menu" class="d-flex justify-content-end">      
            <ul class="d-flex align-items-center">
                <li><a href="about.html">O Nas</a></li>
                <li><a href="offer.html">Oferta</a></li>
                <li><a href="team.html">Zespół</a></li>
                <li><a href="experience.html">Doświadczenie</a></li>
                <li><a href="contact.html">Kontakt</a></li>
            </ul>
        </nav>    
    </div>
</div>