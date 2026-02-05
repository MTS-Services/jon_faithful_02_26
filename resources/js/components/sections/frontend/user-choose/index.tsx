export default function Index() {
    return (
        <div>
            <div className="container mx-auto py-20">
                <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                    {/* Card 1 */}
                    <a href="/admin/login" className="flex h-[220px] w-full max-w-sm items-center justify-center rounded-xl bg-primary px-6 text-center shadow-lg transition-all duration-300 hover:bg-secondary">
                        <div >
                            <p
                                className="text-lg font-semibold text-white"
                            >
                                Property Owner / Manager <br /> (Rentals)
                            </p>
                        </div>
                    </a>

                    {/* Card 2 */}
                    <a href="login" className="flex h-[220px] w-full max-w-sm items-center justify-center rounded-xl bg-primary px-6 text-center shadow-lg transition-all duration-300 hover:bg-secondary">
                        <div >
                            <p className="text-lg font-semibold text-white">
                                Realtor (Homes for Sale)
                            </p>
                        </div>
                    </a>

                    {/* Card 3 */}
                    <a href="login" className="flex h-[220px] w-full max-w-sm items-center justify-center rounded-xl bg-primary px-6 text-center shadow-lg transition-all duration-300 hover:bg-secondary">
                        <div >
                            <p className="text-lg font-semibold text-white">
                                Both (Realtor & Rentals)
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
