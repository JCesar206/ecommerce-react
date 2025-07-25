import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
		<footer className="fixed bottom-0 w-full bg-gray-950 text-white py-3 px-6 flex flex-col items-center justify-center z-10">
			<div className="flex space-x-6 text-xl mb-1">
				<a href="https://github.com/JCesar206" target="_blank" rel="noopener noreferrer">
				<FaGithub className="hover:text-blue-700" size={20} />
				</a>
				<a href="https://www.linkedin.com/in/jcesar206" target="_blank" rel="noopener noreferrer">
				<FaLinkedin className="hover:text-emerald-700" size={20} />
				</a>
				<a href="mailto:jcesar206@hotmail.com">
					<FaEnvelope className="hover:text-purple-700" size={20} />
				</a>
			</div>
			<p className="text-sm font-semibold">&copy; {new Date().getFullYear()} EcommerceSimple V1.0 JulyDevops Todos los derechos reservados.</p>
		</footer>
	);
}

export default Footer;