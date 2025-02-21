import { useState } from "react";

export default function LiquidityMatrix({ title, data }) {
    const [hoveredCol, setHoveredCol] = useState(null);
    const [hoveredRow, setHoveredRow] = useState(null);

    // Sample Data (if not provided)
    data = data || [
        { category: "2014", "1": 50000, "2": 120000, "3": 180000, "4": 250000, "5": 300000, "6": 350000, "7": 400000 },
        { category: "2015", "1": 30000, "2": 100000, "3": 160000, "4": 220000, "5": 270000, "6": 320000, "7": 370000 },
        { category: "2016", "1": 10000, "2": 50000, "3": 120000, "4": 200000, "5": 280000, "6": 350000, "7": 400000 },
        { category: "2017", "1": 20000, "2": 70000, "3": 140000, "4": 210000, "5": 260000, "6": 310000, "7": 360000 },
        { category: "2018", "1": 15000, "2": 60000, "3": 110000, "4": 180000, "5": 250000, "6": 300000, "7": 350000 },
        { category: "2019", "1": 12000, "2": 45000, "3": 95000, "4": 160000, "5": 230000, "6": 280000, "7": 330000 },
        { category: "2020", "1": 137000, "2": 445000, "3": 805000, "4": 1220000, "5": 1598000, "6": 1965000, "7": 2210000 },
    ];

    return (
        <div className="selection-none p-6 bg-white rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <h2 className="text-xl font-bold text-secondary mb-4">{title || "Liquidity Matrix"}</h2>
            <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border border-gray-300 rounded-lg text-sm md:text-base">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-3 py-2 text-left border">Year</th>
                            {[...Array(7)].map((_, i) => (
                                <th 
                                    key={i} 
                                    className={`px-3 py-2 text-center border ${hoveredCol === i ? "bg-gray-200" : ""}`}
                                    onMouseEnter={() => setHoveredCol(i)}
                                    onMouseLeave={() => setHoveredCol(null)}
                                >
                                    {i + 1}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr 
                                key={rowIndex} 
                                className={`border transition ${hoveredRow === rowIndex ? "bg-gray-200" : ""}`}
                                onMouseEnter={() => setHoveredRow(rowIndex)}
                                onMouseLeave={() => setHoveredRow(null)}
                            >
                                <td className="px-3 py-2 border font-medium whitespace-nowrap">{row.category}</td>
                                {[...Array(7)].map((_, colIndex) => (
                                    <td 
                                        key={colIndex} 
                                        className={`px-3 py-2 text-center border transition ${
                                            hoveredRow === rowIndex || hoveredCol === colIndex ? "bg-gray-100" : ""
                                        }`}
                                        onMouseEnter={() => { setHoveredCol(colIndex); setHoveredRow(rowIndex); }}
                                        onMouseLeave={() => { setHoveredCol(null); setHoveredRow(null); }}
                                    >
                                        ${row[colIndex + 1].toLocaleString()}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
