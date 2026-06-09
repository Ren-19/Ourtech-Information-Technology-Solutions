import { COMPANY } from '../utils/constants';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-dark-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-dark-300 text-sm">
              &copy; {currentYear} {COMPANY.name}. All rights reserved.
            </p>
            <p className="text-dark-500 text-xs mt-1">{COMPANY.closingStatement}</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-dark-400 text-xs">
              {COMPANY.headquarters} • {COMPANY.registration}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
