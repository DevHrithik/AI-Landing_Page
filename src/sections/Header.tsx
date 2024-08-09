import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl">
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
            <button className="relative py-2 px-3 font-medium text-sm rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
              <div className="absolute inset-0">
                <div className="border rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="border rounded-lg border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7 )_inset]"></div>
              </div>
              <span> Join Waitlist</span>
            </button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
