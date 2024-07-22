import React, { useEffect } from "react";

import { Carousel } from "../components/Carousel";
import Colaborators from "../components/Colaborators";
import "../css/style.css";
import { slides } from "../data/carouselData.json";

function HomePage() {
  useEffect(() => {
    const filtersSection = document.getElementById("filters-section");
    if (filtersSection) {
      filtersSection.style.backgroundImage = "url('images/pets1.png')";
      filtersSection.style.backgroundRepeat = "no-repeat";
      filtersSection.style.backgroundSize = "cover";
      filtersSection.style.height = "293px";
    }

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
      const select = dropdown.querySelector(".select");
      const caret = dropdown.querySelector(".caret");
      const menu = dropdown.querySelector(".menu");
      const options = dropdown.querySelectorAll(".menu li");
      const selected = dropdown.querySelector(".selected");

      select.addEventListener("click", () => {
        select.classList.toggle("select-clicked");
        caret.classList.toggle("caret-rotate");
        menu.classList.toggle("menu-open");
      });

      options.forEach((option) => {
        option.addEventListener("click", () => {
          selected.innerText = option.innerText;
          select.classList.remove("select-clicked");
          caret.classList.remove("caret-rotate");
          menu.classList.remove("menu-open");

          options.forEach((option) => {
            option.classList.remove("active");
          });
          option.classList.add("active");
        });
      });
    });

    return () => {
      dropdowns.forEach((dropdown) => {
        const select = dropdown.querySelector(".select");
        const options = dropdown.querySelectorAll(".menu li");

        select.removeEventListener("click", () => {});
        options.forEach((option) => {
          option.removeEventListener("click", () => {});
        });
      });
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <img
          className="absolute-img"
          src="images/icon.png"
          alt="PetStore icon"
        />

        <div className="dropdown">
          <div className="select">
            <span className="selected">About Us</span>
            <div className="caret"></div>
          </div>
          <ul className="menu">
            <li>somedf</li>
            <li>somedf</li>
            <li>somedf</li>
            <li>somedf</li>
            <li>somedf</li>
            <li>somedf</li>
            <li>somedf</li>
          </ul>
        </div>

        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="contact.html">Contact Us</a>
          </li>
        </ul>

        <div className="nav-container-right">
          <a href="/" className="donation-link">
            <span className="heart-text">❤️ Donate</span>
          </a>
          <a href="/" className="log-in">
            Log In
          </a>
          <a href="/" className="sign-in">
            Sign In
          </a>
        </div>
      </nav>

      <div className="container">
        <section className="filters" id="filters-section">
          <div className="dropdown" id="box-line">
            <div className="select" id="box-2">
              <span className="selected">Dog</span>
              <div className="caret"></div>
            </div>
            <ul className="menu" id="menu-search">
              <li>Dog</li>
              <li>somedf</li>
              <li>somedf</li>
              <li>somedf</li>
              <li>somedf</li>
              <li>somedf</li>
              <li>somedf</li>
            </ul>
          </div>
          <div className="dropdown" id="box-line">
            <div className="select" id="box-3">
              <span className="selected">Podgorica</span>
              <div className="caret"></div>
            </div>
            <ul className="menu" id="menu-search">
              <li>Podgorica</li>
              <li>Cetinje</li>
              <li>Niksic</li>
              <li>Zabljak</li>
              <li>Bar</li>
              <li>somedf</li>
              <li>somedf</li>
            </ul>
          </div>
        </section>

        <section className="pet-categories">
          <h2>Find your new best friend</h2>
          <p>From all over the country</p>
        </section>

        <div className="buttons">
          <div className="top-icons">
            <button className="square-btn">
              <img src="images/dog.png" alt="Icon 1" />
            </button>
            <button className="square-btn">
              <img src="images/cat.png" alt="Icon 2" />
            </button>
          </div>
          <div className="bottom-icons">
            <button className="square-btn">
              <img src="images/pets.png" alt="Icon 3" />
            </button>
            <button className="square-btn">
              <img src="images/animal-shelter.png" alt="Icon 4" />
            </button>
          </div>
        </div>

        <section className="services">
          <h2>Pets Available for Adoption</h2>
        </section>

        <Carousel data={slides} />

        <Colaborators />

        <section className="footer-dis">
          <div className="footer-adress">
            <h2>Find Us</h2>
            <p>123 Pet Street, City</p>
            <p>Opening Hours: Mon-Sat, 09h - 18h</p>
            <button className="find-store-btn">Find a Store</button>
            <button className="contact-btn">Contact Us</button>
          </div>
          <div className="footer-icons">
            <a href="https://twitter.com">
              <img src="images/social-media.png" alt="Twitter" />
            </a>
            <a href="https://youtube.com">
              <img src="images/youtube.png" alt="YouTube" />
            </a>
            <a href="https://github.com">
              <img src="images/logo.png" alt="GitHub" />
            </a>
          </div>
          <div className="footer-links">
            <a href="/about">About Us</a>
          </div>
        </section>

        <div className="footer">
          <p>© 2024 PawLand. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
