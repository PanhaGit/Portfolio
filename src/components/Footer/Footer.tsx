const Footer = () => {
  const year = new Date().getFullYear(); // Get the current year
  return (
    <div className="lg:w-9/12 md:w-10/12 w-11/12 m-auto py-5">
      <div>
        <h1 className="text-xl text-gray-500">Copyright &copy; {year} Panha</h1>
      </div>
    </div>
  );
};

export default Footer;
