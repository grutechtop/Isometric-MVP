import { Block } from "./GridUtils";

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
  return (
    <div className="flex flex-col absolute bg-white rounded-2xl">
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
      <div className="overlay  flex flex-wrap w-80 pt-10 pb-10 bg-white gap-3 justify-center rounded-xl overflow-auto h-96">
        {props.blocks.map((block, index) => (
          <div className="flex flex-col basis-1/4 w-5 bg-white shadow-2xl p-4 justify-around rounded-xl" key={index}>
            <div className="block-images flex flex-col text-center text-amber-950 font-serif font-bold justify-center">
              <div className="flex justify-center">
                <img
                  className="block-item content-center center object-fill h-8 w-8 mb-3"
                  src={block.url}
                  width={30}
                  height={30}
                  alt="block"
                  key={block.url}
                />
              </div>
              <h1 className="text-[8px]">{block.label}</h1>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => props.onSelect(block)}
                className="bg-green-600 text-white w-full rounded text-[10px]"
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
