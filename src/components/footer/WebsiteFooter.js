import {
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import SocialMediaLink from "./SocialMediaLink";

export default function WebsiteFooter() {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="bg-blue-800 text-white py-5 px-5">
      {/* social media handles */}
      <section className="max-w-6xl mx-auto p-5">
        <h3 className="text-center">Follow me</h3>
        <div className="flex justify-center space-x-4 mt-5">
          <SocialMediaLink link="https://www.youtube.com/channel/UCcAOvS5KtA6CC9DPhQCwZ4A">
            <FaYoutube /> <span className="mr-1 ml-2 text-xs">YouTube</span>
          </SocialMediaLink>

          <SocialMediaLink link="https://github.com/gitpremsagar">
            <FaGithub /> <span className="mr-1 ml-2 text-xs">Github</span>
          </SocialMediaLink>

          <SocialMediaLink link="https://www.linkedin.com/in/prem-sagar-b45a4580/">
            <FaLinkedin /> <span className="mr-1 ml-2 text-xs">LinkedIn</span>
          </SocialMediaLink>

          <SocialMediaLink link="https://twitter.com/PremSagar24">
            <FaTwitter /> <span className="mr-1 ml-2 text-xs">Twitter</span>
          </SocialMediaLink>

          <SocialMediaLink link="https://www.instagram.com/entrepreneurprem/">
            <FaInstagram /> <span className="mr-1 ml-2 text-xs">Instagram</span>
          </SocialMediaLink>
        </div>
      </section>

      {/* copyright */}
      <section className="max-w-6xl mx-auto p-5">
        <p className="text-center">
          © {thisYear} Micro-Blogging App | Built by{" "}
          <a
            href="https://portfolio-adef2.firebaseapp.com/"
            className="text-orange-300"
            target="_main"
          >
            Prem Sagar
          </a>
        </p>
      </section>
    </footer>
  );
}
