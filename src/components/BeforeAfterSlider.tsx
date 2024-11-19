import { useState } from "react";
import { BiExpandHorizontal } from "react-icons/bi";

const BeforeAfterSlider = ({ beforeImage, afterImage }: any) => {
  const [resizerWidth, setResizerWidth] = useState(250); // Default width for the slider in pixels
  const [isDragging, setIsDragging] = useState(false); // Track dragging state

  const handleStart = (event: any) => {
    setIsDragging(true);
    event.preventDefault();
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const handleMove = (event: any) => {
    if (!isDragging) return;

    const diffElement = document.getElementById("diff");
    const bounds = diffElement?.getBoundingClientRect();
    const clientX =
      event.type === "mousemove"
        ? event.clientX
        : event.touches[0].clientX; // Handle touch vs mouse

    if (bounds) {
      const mouseX = clientX - bounds.left;

      // Ensure the resizer stays within the bounds
      const newWidth = Math.max(0, Math.min(mouseX, bounds.width));
      setResizerWidth(newWidth);
    }
  };

  return (
    <div
      className="relative justify-center items-center flex"
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      <div
        id="diff"
        className="py-5 flex justify-center items-center relative md:w-1/2 w-full"
      >
        <div className="relative w-full">
          <div className="diff rounded-xl z-30 w-full md:h-[500px] h-[300px] relative">
            {/* After Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={beforeImage}
                alt="After Image"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Before Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={afterImage}
                alt="Before Image"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  clipPath: `inset(0 0 0 ${resizerWidth}px)`, // Clip from the left to match the resizer
                }}
              />
            </div>

            {/* Slider Button */}
            <button
              className="absolute top-1/2 -translate-y-1/2 bg-[#F1F052] flex justify-center items-center rounded-full w-[30px] h-[30px] border-2 border-black cursor-pointer z-20"
              style={{
                left: `${resizerWidth - 15}px`, // Center the button on the divider
              }}
              onMouseDown={handleStart}
              onTouchStart={handleStart}
            >
              <BiExpandHorizontal size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
