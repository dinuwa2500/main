class topheader extends HTMLElement{

    connectedCallback(){

        this.innerHTML = '\
        <header>\
        <div class="top">\
        <div class="header" >\
        <img src="#" alt="logo" class="logo">\
        </div>\
        <div class="navbar">\
            <ul>\
                <li><a href="/index.html">Home</a></li>\
                <li><a href="#events">Events</a></li>\
                <li><a href="#pricing">Pricing</a></li>\
                <li><a href="#booking">Booking</a></li>\
                <li><a href="#abouus">About-us</a></li>\
                <li style="float:right"><a class="active" href="/signup.html" >Register</a></li>\
                <li style="float:right"><a class="active" href="#about">Login</a></li>\
              </ul> \
        </div>\
        </div>\
        </header>';
        

    }
}


class bottomfooter extends HTMLElement{

    connectedCallback(){

        this.innerHTML = '\
        <footer>\
        <div class = "footer">\
            <img src = "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/6e61b/MainAfter.avif" class = "footer-logo">\
            <div class = "motto">\
                <p style="height: 0;">lorem ispum esposrt</p>\
            </div>\
            <div class="social-icons">\
                <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank"><img src="./socialmedia/fb/facebook-24.png" alt="" width="30px"></a>\
                <a href="https://twitter.com/login" target="_blank"><img src="./socialmedia/twitter/twitter-24.png" alt="" width="30px"></a>\
                <a href="https://www.linkedin.com/home" target="_blank"><img src="./socialmedia/linkdin/linkedin-24.png" alt="" width="30px"></a>\
                <a href="https://www.instagram.com/" target="_blank"><img src="./socialmedia/insta/instagram-24.png" alt="" width="30px"></a>\
            </div>\
            <div class="footer-det">\
                    <img src="./icons/tp.png" alt=""  class = "phone">\
                    <p id="phone">CALL US</p>\
                    <img src="./icons/mail.png" alt="" class="mail">\
                    <p id="mail">WRITE US</p>\
                    <img src="./icons/location.png" alt="" class="location">\
                    <p id="location">LOCATION</p>\
                    <img src="./icons/clock.png" alt="" class="clock">\
                    <p id="clock">WORKING HOURS</p>\
            </div>\
            <div class="num">\
                <p id = "footernum"><span>&#8226; 2132031293</span></p>\
                <p id = "footernum"><span>&#8226; 2132031293</span></p>\
            </div>\
            <div class="loc">\
                <p>4259,Diamond Cove,Providence.</p>\
            </div>\
            <div class="wu">\
                <p><span>&#8226; hello@yourdomain.com</span></p>\
                <p><span>&#8226; contact@yourdomain.com</span></p>\
            </div>\
            <div class="hrs">\
                <p>Mon - Sat: 9AM - 5PM</p>\
            </div>\
            <div class = "footer-links">\
                <a href="./contactus.html" >Contact-Us</a>\
                <a href="./privacy.html" >Privacy Policy</a>\
                <a href="./terms.html" >Terms & Conditions</a>\
                <a href="./reviews.html" >Reviews</a>\
            </div>\
            </div>\
    </footer>';
 
    }
}


customElements.define('top-header',topheader);
customElements.define('bottom-footer',bottomfooter);

