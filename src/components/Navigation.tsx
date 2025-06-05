
import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase, GraduationCap, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Navigation = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/projects", icon: Briefcase, label: "Projects" },
    { path: "/education", icon: GraduationCap, label: "Education" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-xl font-bold text-primary hover:text-gray-500 transition-colors"
          >
            doyeji.dev
          </Link>
          
          <div className="flex items-center space-x-6">
            <div className="flex space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary bg-secondary"
                        : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                );
              })}
            </div>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
