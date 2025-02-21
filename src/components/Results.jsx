export default function Results({ title, data, desc, pred, err, ldesc, rdesc }) {
    return (
        <div className="hover:cursor-pointer active:scale-95 selection-none w-full flex flex-col gap-4 sm:grid-cols-2 md:grid-cols-4 rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition duration-300 ease-in-out hover:scale-103 overflow-hidden">
            {/* fake results, 2 rows 2 cols grid */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h1 className="text-lg font-bold text-secondaryDark">{title || "NAT-CAT"}</h1>
                <p className="text-sm text-gray-500">{desc || "Error Value, consectetur adipiscing elit"}.</p>

                <div className="flex justify-between mt-4">

                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500">{ldesc || "Error Value"}</span>
                        <span className="text-sm font-bold text-rose-700">{err || "0%"}</span>

                    </div>

                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500">{rdesc || "Expected Sum"}</span>
                        <span className="text-sm font-bold text-emerald-700">{pred || "100.000"}</span>
                    </div>
                </div>

            </div>

        </div>
    );
};
