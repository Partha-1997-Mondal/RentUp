import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div>
      <section className="contact">
        <div>
          <h1>Do You Have Question ?</h1>
          <p>Will Help you to grow your career and growth.</p>
        </div>

        <button type="button">Contact Us Today</button>
      </section>

      <section className="lowerfooter">
        <div>
          <div className="footerlogo">
          <img src="https://img.icons8.com/pastel-glyph/64/null/smart-home-checked.png" />
          <h1>RentUp</h1>
          </div>
          <h2>Do You Need Help With Anything?</h2>
          <p>
            Receive updates, hot deal, tutorials, discounts sent straignt in
            your inbox every month
          </p>
          <input type="email" placeholder="Email Address .. "  className="text"/>
          <button className="submit">Submit</button>
        </div>

        <div>
          <h3>LAYOUT</h3>
          <p>Home Page</p>
          <p>About Page</p>
          <p>Service Page</p>
          <p>property Page</p>
          <p>Contact Page</p>
          <p>Single Page</p>
        </div>
        <div>
          <h3>ALL SECTIONS</h3>
          <p>Heders</p>
          <p>Features</p>
          <p>Attractive</p>
          <p>Testimonials</p>
          <p>Videos</p>
          <p>Footers</p>
        </div>
        <div>
          <h3>COMPANY</h3>
          <p>About</p>
          <p>Blog</p>
          <p>pricing</p>
          <p>Affiliate</p>
          <p>Login</p>
          <p>Changelog</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
