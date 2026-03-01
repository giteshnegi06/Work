import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";


export default function FollowUs() {
  return (
    <>
      <div className="relative">
        <div className=" ">
        <img src={"https://res.cloudinary.com/dbtlo70e5/image/upload/v1772374686/logo_d2is9d.png"} alt="" className="h-60" />
      </div>

      <div className=" absolute flex items-center gap-4 top-48 left-10">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/mahakphotography_official"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-pink-500 hover:scale-110 transition"
        >
          <FaInstagram size={18} />
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-blue-600 hover:scale-110 transition"
        >
          <FaFacebookF size={18} />
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com/@mahakstudio2000"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-red-600 hover:scale-110 transition"
        >
          <FaYoutube size={18} />
        </a>
      </div>
      </div>
    </>
  );
}
