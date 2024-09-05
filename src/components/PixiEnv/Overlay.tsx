import { Block } from "./GridUtils";
import {motion} from "framer-motion"
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

interface OverlayProps {
  blocks: Block[];
  onSelect: (block: Block) => void;
  position: { x: number; y: number };
}

const Overlay = (props: OverlayProps) => {
  const handleClose = () => {
    props.onSelect({
      url: "/img/iso/grid-block-fill.png",
      offset: 0,
      hitboxOffset: 0,
    });
  };
  const scrollRef = useHorizontalScroll();
  return (
    <div className="flex flex-col absolute bg-white right-[30vw] z-30 top-[30vh] rounded-2xl ">
      <div className="flex flex-row justify-between">
        <div className="title text-amber-950 mt-5 ml-8 mb-1 font-serif font-bold">
          <h1>Build City</h1>
        </div>
        <div className="title text-amber-950 mt-5 mr-7 font-sans font-bold">
          <button
            onClick={handleClose}
            className="bg-none rounded-xl w-5 hover:bg-gray-100 active:bg-amber-50"
          >
            X
          </button>
        </div>
      </div>
      <div className="overlay  flex flex-wrap w-96 pt-10 pb-10 bg-white gap-3 justify-center min-h-56 overflow-auto z-50 scroll-smooth rounded-xl h-96" ref = {scrollRef}>
        {props.blocks.map((block, index) => (
          <div className="flex flex-col basis-1/4 w-8 bg-white shadow-2xl p-4 justify-around rounded-xl" key={index}>
            <div className="block-images flex flex-col text-center text-amber-950 font-serif font-bold justify-center">
              <div className="flex justify-center">
                <motion.img
                  className="block-item content-center center object-fill h-12 w-9 mb-4"
                  src={block.url}
                  width={30}
                  alt="block"
                  key={block.url}
                  style={{height: 0}}
                  animate={{height: 48.45, width: 72}}
                  transition={{
                    type: "spring",
                    damping: 10,
                    mass: 0.75,
                    stiffness: 100,
                    duration: 2
                }}
                />
              </div>
              <h1 className="text-[8px]">{block.label}</h1>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => props.onSelect(block)}
                className="bg-[#8DC63F] h-6 text-white w-full rounded text-[10px]"
              >
                Place
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overlay;
