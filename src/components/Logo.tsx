import { Link } from "react-router-dom";
import iwsLogo from "@/assets/iws-logo.png";

interface LogoProps {
  isScrolled?: boolean;
  variant?: "default" | "footer";
}

export const Logo = ({ isScrolled = false, variant = "default" }: LogoProps) => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 group"
    >
      <img 
        src={iwsLogo} 
        alt="Info Web Software" 
        className={`
          transition-all duration-300
          ${isScrolled ? "h-8 w-auto" : "h-12 w-auto"}
        `}
      />
    </Link>
  );
};
