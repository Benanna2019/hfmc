/* This example requires Tailwind CSS v2.0+ */
import Image from "next/future/image";
import MedicalLogo from "/public/medicallogo.jpg";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Clinic Info", href: "/clinic-info" },
  { name: "Eligibility For Services", href: "/eligibility" },
  { name: "Get Involved", href: "/get-involved" },
];

export default function HarvestHeader() {
  return (
    <header className="bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-slate-500 py-6 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <Image className="h-10 w-auto" src={MedicalLogo} alt="" />
            </a>
          </div>
          <div className="hidden space-x-8 lg:block">
            {navigation.map((link) => (
              <Link href={link.href}>
                <a
                  key={link.name}
                  className="text-base font-medium text-slate-900 hover:text-blue-500 hover:underline"
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
          <div className="ml-10">
            <Link href="/clinic-history">
              <a className="inline-block py-2 px-4 text-base font-medium text-slate-900 hover:bg-opacity-75 hover:text-blue-500 hover:underline">
                History
              </a>
            </Link>
            <a
              href="#"
              className="inline-block py-2 px-4 text-base font-medium text-slate-900 hover:bg-opacity-75 hover:text-blue-500 hover:underline"
            >
              Espanol
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-slate-900 hover:text-blue-500 hover:underline"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
