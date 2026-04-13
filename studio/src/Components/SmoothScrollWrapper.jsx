import { Scrollbar } from "smooth-scrollbar-react";

export default function SmoothScrollWrapper() {
  return (
    <Scrollbar
      damping={0.08}
      thumbMinSize={20}
      renderByPixels={true}
      alwaysShowTracks={false}
      continuousScrolling={true}
      style={{ height: "100vh" }}
    >
      <div className="p-10 space-y-10">
        
        <h1 className="text-4xl font-bold">Smooth Scroll Page</h1>

        {[...Array(20)].map((_, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-xl shadow">
            Section {i + 1}
          </div>
        ))}

      </div>
   
  );
}