export default function Visualization({ img, title, desc, onClick }) {
    return (
        <div 
            onClick={onClick} 
            className="selection-none hover:cursor-pointer active:scale-95 py-4 h-min sm:py-6 md:py-8 bg-white rounded-lg border-2 border-slate-300 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition duration-300 ease-in-out hover:scale-105"
        >
            <img
                src={img}
                alt="Visualization"
                className="h-[80%] w-[80%] sm:h-[85%] sm:w-[85%] md:h-[90%] md:w-[90%] rounded-lg overflow-hidden border-2"
            />
            <h1 className="mt-2 md:mt-4 font-bold text-xl sm:text-2xl md:text-3xl text-secondary">
                {title || "Data Visualization"}
            </h1>
            <p className="font-bold text-sm sm:text-base md:text-md text-tertiary">
                {desc || "Details about the visualization"}
            </p>
        </div>
    );
}
