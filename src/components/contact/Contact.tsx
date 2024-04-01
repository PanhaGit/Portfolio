import FromContact from "./FromContact";
import GoogleMaps from "./GoogleMaps";

const Contact = () => {
  return (
    <div className="lg:w-9/12 md:w-10/12 w-11/12 m-auto">
      <div className="py-5 text-center">
        <h1 className="text-white my-2 text-5xl font-semibold">Contact</h1>
      </div>
      {/* <div></div> */}
      <div className="lg:flex md:row">
        <div className="w-full">
          <FromContact />
        </div>
        <div className="w-full">
          <GoogleMaps />
        </div>
      </div>
    </div>
  );
};

export default Contact;
