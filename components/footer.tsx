"use client";

import Image from "next/image";
import { Twitter, Linkedin, Facebook } from "lucide-react";
import TwitterXIcon from "./ui/twitter-x-icon";
import LinkedinIcon from "./ui/linkedin-icon";
import FacebookIcon from "./ui/facebook-icon";

const Footer = () => {
  return (
    <footer className="py-16 bg-[var(--background)]">
      <div className="max-w-[1250px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* LOGO */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-semibold text-lg">
              <Image
                src="/logo.png"
                alt="logo"
                width={35}
                height={35}
                className="rounded-md"
              />
              Finteck
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-medium mb-4 text-[var(--foreground)]">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>Features</li>
              <li>Integrations</li>
              <li>Customers</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-[var(--foreground)]">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-[var(--foreground)]">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>Blog</li>
              <li>Guides</li>
              <li>Docs</li>
            </ul>
          </div>
        </div>

        {/* SOCIAL + COPYRIGHT */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[var(--border)] pt-6">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Finteck. All rights reserved. | For
            learning purpose only
          </p>

          <div className="flex items-center gap-4 text-[var(--muted)]">
            <TwitterXIcon />
            <LinkedinIcon />
            <FacebookIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
