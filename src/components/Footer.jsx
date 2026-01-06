import { FaGithub, FaLinkedin, FaEnvelope, FaHome } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
		<footer className="fixed bottom-0 w-full bg-gray-950 text-white py-3 px-6 flex flex-col items-center justify-center z-10">
			<div className="flex space-x-6 text-xl mb-1">
				<a href="https://jcesar206.github.io/myPersonalBlog/" target="_blank" rel="noopener noreferrer">
					<FaHome className="hover:text-blue-400" size={20} />
				</a>
				<a href="https://github.com/JCesar206" target="_blank" rel="noopener noreferrer">
				<FaGithub className="hover:text-blue-400" size={20} />
				</a>
				<a href="https://www.linkedin.com/in/jcesar206" target="_blank" rel="noopener noreferrer">
				<FaLinkedin className="hover:text-blue-400" size={20} />
				</a>
				<a href="mailto:jcesar206@hotmail.com">
					<FaEnvelope className="hover:text-blue-400" size={20} />
				</a>
				<a href="mailto:jcesary06@gmail.com">
					<SiGmail className="hover:text-blue-400" size={20} />
				</a>
			</div>
			<p className="text-sm font-semibold">&copy; {new Date().getFullYear()} EcommerceSimple V 1.1 | Juls | All right reserved.</p>
		</footer>
	);
}

export default Footer;