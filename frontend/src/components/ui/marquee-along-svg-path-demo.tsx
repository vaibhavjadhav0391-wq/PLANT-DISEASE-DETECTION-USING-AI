import MarqueeAlongSvgPath from "./marquee-along-svg-path"
import { useState } from "react"

const imgs = [
  "https://images.unsplash.com/photo-1592417817098-8f3d6eb228cc?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=400&q=80",
]

const path =
  "M1.12756 531.57C28.0893 516.8 74.8013 483.241 115.862 435.167M115.862 435.167C142.71 403.734 167.142 366.095 182.056 323.447C229.212 188.604 -65.6747 303.582 53.6794 397.09C73.8056 412.858 94.5052 425.626 115.862 435.167ZM115.862 435.167C221.157 482.211 342.426 450.85 489.709 314.125C517.752 288.093 540.139 265.319 557.876 245.305M557.876 245.305C652.19 138.884 615.024 110.493 597.546 85.1004C576.782 54.9327 401.867 14.2899 417.559 188.351C424.308 263.214 481.985 261.608 557.876 245.305ZM557.876 245.305C646.667 226.232 760.389 187.041 846.65 226.667M846.65 226.667C858.081 231.918 869.031 238.554 879.376 246.804C1034.5 370.518 957.576 540.884 843.253 562.658C768.137 576.964 767.606 395.943 846.65 226.667ZM846.65 226.667C887.908 138.309 950.848 53.1511 1036.18 0.642822"

export default function MarqueeAlongSvgPathDemo() {
  const [container, setContainer] = useState<HTMLElement | null>(null)

  return (
    <div
      className="w-full h-[520px] relative bg-[#07130E] flex justify-center overflow-hidden rounded-2xl border border-[#1F4A35]"
      ref={(node) => setContainer(node)}
    >
      <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center">
        <MarqueeAlongSvgPath
          path={path}
          viewBox="0 0 1040 570"
          baseVelocity={4}
          showPath={false}
          slowdownOnHover={true}
          draggable={true}
          dragAwareDirection={true}
          dragVelocityDecay={0.98}
          scrollAwareDirection={true}
          useScrollVelocity={true}
          scrollContainer={{ current: container }}
          repeat={3}
          enableRollingZIndex={true}
          dragSensitivity={0.01}
          className="absolute inset-0 w-full h-full"
          responsive={true}
          grabCursor={true}
        >
          {imgs.map((img, i) => (
            <div key={i} className="w-16 h-16 rounded-xl overflow-hidden border border-[#1F4A35] shadow-lg cursor-pointer">
              <img
                src={img}
                alt={`Example ${i}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </MarqueeAlongSvgPath>
      </div>
    </div>
  )
}
