const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex h-full min-h-[20vh] w-full flex-col items-center justify-center bg-gray-300 text-black">
      <p>© {year} Open Source Now</p>
      <p>Created by OSNow Team</p>
    </footer>
  );
};

export default Footer;
