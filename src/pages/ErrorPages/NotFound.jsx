import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-5 px-5  font-poppins lg:px-0">
      <h1 className="text-6xl text-center lg:text-[110px] text-black font-medium">
        404 Not Found
      </h1>

      <p className="text-black text-base font-normal text-center">
        Your visited page not found. You may go back to the home page.
      </p>

      <Link
        className="bg-red py-4 px-12 mt-10 rounded-[4px] text-white font-medium"
        to={"/"}
      >
        Back to home page
      </Link>
    </main>
  );
};

export default NotFound;
