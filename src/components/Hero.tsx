import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";
export default function Hero() {
  return (
    <div className="hero h-fit bg-base-200 mb-20">
      <div className="hero-content grid md:grid-cols-2 sm:gap-5">
        <div>
          <h1 className="text-5xl font-bold">Want to Read Some PDFs?</h1>
          <p className="py-6">
            Discover a world of knowledge with our extensive collection of PDFs.
            Whether you're looking for educational material, fiction, or
            technical documents, we've got you covered. Enjoy seamless access,
            intuitive navigation, and personalized reading experiences all in
            one place.
          </p>
          <button
            className="btn btn-outline btn-info"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Join Easy Read
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Please Proceed to Registration before getting started{" "}
                <button className="p-2 rounded-xl border-sky-300 border-2 hover:bg-blue-200">
                  <Link to="/register">Register</Link>
                </button>
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <img src={heroImg} className="max-w-sm rounded-lg shadow-2xl" alt="" />
      </div>
    </div>
  );
}
