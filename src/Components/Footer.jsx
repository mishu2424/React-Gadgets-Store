const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center gap-10 sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside className="text-center">
         <h1 className="text-3xl font-bold">Gadget Heaven</h1>
        <p className="mx-auto">
        Your Gateway to Gadgets
        </p>
      </aside>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-28 text-center border-t-2 border-gray-300 py-7">
      <nav className="flex flex-col opacity-85">
        <h6 className="font-bold opacity-100">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="flex flex-col opacity-85">
        <h6 className="font-bold opacity-100">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="flex flex-col opacity-85">
        <h6 className="font-bold opacity-100">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      </div>
    </footer>
  );
};

export default Footer;
