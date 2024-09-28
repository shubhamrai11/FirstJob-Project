import { Menu } from "lucide-react";
import { useState } from "react";
import logo1 from "../assets/logo1.png";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Bell, ChevronDown, LogIn, UserCircle } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet"; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary/80 backdrop-blur-md text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-0">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <Link to="/">
                <img src={logo1} alt="Logo" style={{ width: '165px', height: '75px' }} />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-4">
              <Link to="/jobs" className="hover:underline">Jobs</Link>
              <Link to="/companies" className="hover:underline">Companies</Link>
              <Link to="/services" className="hover:underline">Services</Link>
              <Link to="/resources" className="hover:underline">Resources</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open mobile menu</span>
              </Button>
              <Link to="/SavedJobs">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                </Button>
              </Link>
              <Link to="/SignIn">
                <Button
                  variant="ghost"
                  className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <UserCircle className="mr-2 h-5 w-5" />
                  Login
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/SignUp">
                <Button
                  variant="ghost"
                  className="hidden md:flex bg-red-600 hover:bg-red-700 text-white"
                >
                  <LogIn className="mr-2 h-5 w-5" />
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/jobs"
              className="text-lg font-semibold hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Jobs
            </Link>
            <Link
              to="/companies"
              className="text-lg font-semibold hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Companies
            </Link>
            <Link
              to="/services"
              className="text-lg font-semibold hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/resources"
              className="text-lg font-semibold hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>
          </nav>
          <div className="mt-8 space-y-4">
            <Link to="/SignIn">
              <Button
                variant="outline"
                className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white"
              >
                <UserCircle className="mr-2 h-5 w-5" />
                Login
              </Button>
            </Link>
            <Link to="/SignUp">
              <Button
                variant="default"
                className="w-full justify-start bg-red-600 hover:bg-red-700 text-white"
              >
                <LogIn className="mr-2 h-5 w-5" />
                Register
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;

