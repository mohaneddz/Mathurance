export default function Final({ result }) {
    return (
        <div className="w-full text-center text-primary p-6 bg-white rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition duration-300 ease-in-out hover:scale-101">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-700 to-rose-500 bg-clip-text text-transparent mb-4">
                {result || "600.000$"}
            </h1>
            <q className="text-sm text-gray-500">
                alpha*P1+beta*P2+theta*P3+gamma*p4 = TP
            </q>

        </div>
    );
};
