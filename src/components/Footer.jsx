import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import logo from "../assets/eventzgallery_logo.webp";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", sectionId: "home" },
    { name: "About Us", sectionId: "aboutus" },
    { name: "Services", sectionId: "services" },
    { name: "Contact", sectionId: "contact" },
    { name: "FAQ", sectionId: "faq" },
  ];

  const servicesList = [
    "Bridal Makeup",
    "Event Management",
    "Corporate Events",
    "Wedding Planning",
    "Catering Services",
    "Photography",
  ];

  return (
    <footer
      className="bg-neutral-950 text-white relative pt-20 pb-10 overflow-hidden"
      id="footer"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mb-20">
          {/* Brand Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="flex items-center gap-x-4 cursor-pointer group"
              onClick={() => scrollToSection("home")}
            >
              <img
                src={logo}
                alt="EventzGallery Logo"
                className="w-12 h-12 rounded-2xl border border-white/10 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <h1 className="text-2xl font-semibold text-white tracking-tight leading-none">
                  EventzGallery
                </h1>
                <span className="mt-1 text-neutral-500 text-xs py-0.5 rounded-xs w-fit">
                  Your movement, our magic
                </span>
              </div>
            </div>
            <p className="text-neutral-500 leading-relaxed font-light text-sm max-w-sm">
              Creating unforgettable moments and exceptional experiences for
              over 2 years. Let us bring your vision to life with our expertise
              and passion for perfection.
            </p>
            <div className="flex items-center gap-x-8 pt-2">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://wa.me/917676417117"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <FaWhatsapp size={22} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.instagram.com/eventzgallery/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <FaInstagram size={22} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <FaXTwitter size={22} />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <div className="lg:pl-10">
            <h4 className="text-sm font-bold uppercase mb-8 text-neutral-300">
              Services
            </h4>
            <ul className="space-y-4">
              {servicesList.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-neutral-500 hover:text-white hover:underline underline-offset-8 decoration-neutral-500/30 transition-all text-base font-light cursor-pointer bg-transparent border-0 p-0 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-10">
            <h4 className="text-sm font-bold uppercase mb-8 text-neutral-300">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-neutral-500 hover:text-white hover:underline underline-offset-8 decoration-neutral-500/30 transition-all text-base font-light cursor-pointer bg-transparent border-0 p-0 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 lg:pl-4 ">
            <h4 className="text-sm font-bold uppercase mb-8 text-neutral-300">
              Contact Us
            </h4>
            <div className="space-y-6">
              <a
                href="tel:+917676417117"
                className="flex items-center gap-x-4 group cursor-pointer no-underline"
              >
                <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <span className="text-neutral-500 group-hover:text-white transition-colors text-base font-light">
                  +91 76764 17117
                </span>
              </a>
              <a
                href="mailto:contact@eventzgallery.com"
                className="flex items-center gap-x-4 group cursor-pointer no-underline"
              >
                <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <span className="text-neutral-500 group-hover:text-white transition-colors text-base font-light">
                  contact@eventzgallery.com
                </span>
              </a>
              <div className="flex items-start gap-x-4 group cursor-pointer">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-500 group-hover:bg-blue-600 group-hover:text-white transition-all mt-1">
                  <MapPin size={18} />
                </div>
                <span className="text-neutral-500 group-hover:text-white transition-colors text-base font-light leading-relaxed">
                  Sambhrama apartment, purdal road, gadikoppa, Shivamogga,
                  Karnataka 577201
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-y-6">
          <p className="text-neutral-600 text-[13px] font-light tracking-wide">
            &copy; {new Date().getFullYear()} EventzGallery. All rights
            reserved.
          </p>
          <div className="flex items-center gap-x-8">
            <a
              href="#"
              className="text-neutral-600 hover:text-white text-[12px] transition-colors tracking-widest uppercase"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-neutral-600 hover:text-white text-[12px] transition-colors tracking-widest uppercase"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
