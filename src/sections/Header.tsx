import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";
export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 backdrop-blur">
      <div className="aboslute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div className="aboslute inset-0 backdrop-blur -z-10 md:block hidden"></div>
          <div>
            <div className="border border-white/15 inline-flex justify-center items-center h-10 w-10">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">
                Features
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Developers
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Pricing
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button>Join Waitlist</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
