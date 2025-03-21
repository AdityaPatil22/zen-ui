import Link from 'next/link';
import ZenUiLogo from '@/public/icons/logo';

const Footer = () => {
  return (
    <div className="flex flex-col justify-center max-w-7xl mx-auto py-12">
      <hr className="" />
      <div className="flex justify-center mt-4">
        <div className="flex justify-between items-center mt-[10px] mb-[10px]">
          <ZenUiLogo />
          <Link href="/" className="text-4xl font-semibold ml-1">
            Zen UI
          </Link>
        </div>
      </div>
      <div className="flex justify-between mx-12 flex-col sm:flex-row">
        <div className="max-w-[400px] mr-5">
          <p className="text-lg font-semibold">About</p>
          <p className="text-md mt-3 leading-6">
            Lorem ipsum dolor sit amet, consectetur dipiscing elit. Cras iaculis
            leo ac sapien ultricies, a fermentum massa ultricies.
          </p>
        </div>
        <div className="flex w-[300px] justify-between mt-5 sm:mt-0">
          <div className="w-[110px]">
            <p className="text-lg font-semibold">Product</p>
            <ul className="text-md mt-3 d-flex flex-row">
              <p href="/components" className="mb-2">
                Components
              </p>
              <p href="/docs">Documentation</p>
            </ul>
          </div>
          <div className="w-[110px]">
            <p className="text-lg font-semibold">Contact</p>
            <ul className="text-md mt-3">
              <li className="mb-2">LinkedIn</li>
              <li className="mb-2">Github</li>
              <li>Website</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
