const Appointment = () => {
    return (
        <div className="bg-slate-200 relative z-10 -mt-36">
            <form className="border-2 border-red-500 max-w-7xl mx-auto relative z-10 bg-white py-16 px-4 md:px-8 mt-32 -translate-y-32 opacity-90">
                <div className="text-center py-12">
                    <p>WE ALWAY READY HELPS YOU</p>
                    <p className="text-2xl md:text-4xl">
                        <span className="text-red-600 font-bold">Book An</span> Appointment
                    </p>
                </div>
                <div className="flex flex-col md:flex-row mb-12 gap-8 justify-between p-4">
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <input
                            type="text"
                            placeholder="Type name"
                            className="w-full border-0 border-b border-black focus:border-b focus:border-black focus:outline-none focus:ring-0 ml-2"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <input
                            type="email"
                            placeholder="Type email"
                            className="w-full border-0 border-b border-black focus:border-b focus:border-black focus:outline-none focus:ring-0 ml-2"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <input
                            type="number"
                            placeholder="Phone Number"
                            className="w-full border-0 border-b border-black focus:border-b focus:border-black focus:outline-none focus:ring-0 ml-2"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <input
                            type="date"
                            placeholder="Type here"
                            className="w-full border-0 border-b border-black focus:border-b focus:border-black focus:outline-none focus:ring-0 ml-2"
                        />
                    </div>
                </div>
                <div className="mb-8 py-8">
                    <textarea
                        className="textarea border-0 border-b border-black focus:border-b focus:border-black focus:outline-none focus:ring-0 rounded-none w-full"
                        placeholder="Details"
                    ></textarea>
                </div>
                <div className="text-center mx-auto flex items-center justify-center mt-20">
                    <button className="btn bg-red-600 text-white text-lg md:text-2xl mb-8 rounded-none">
                        MAKE AN APPOINTMENT
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Appointment;
