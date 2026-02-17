export default function ScrollIndicator({ targetId = "next" }) {
  const scrollTo = (e) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" hidden lg:flex justify-center pt-6 md:pt-12">
      <a
        href={`#${targetId}`}
        onClick={scrollTo}
        className="relative w-6.5 h-10 md:w-7.5 md:h-12.5 border-2 border-white rounded-full"
      >
        <span
          className="absolute left-2 md:left-2.5 top-2 md:top-2.5 w-1.5 h-1.5 bg-white rounded-full"
          style={{ transform: "translateX(-50%)", animation: "scrollDot 2s infinite" }}
        />
      </a>
    </div>
  );
}
