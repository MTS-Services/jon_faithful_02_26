export default function Index() {
    return (
        <div>
            <div className="container mx-auto py-20">
                <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                    {/* Card 1 */}
                    <div className="flex h-[220px] w-full max-w-sm items-center justify-center rounded-xl bg-primary hover:bg-secondary transition-all duration-300 px-6 text-center shadow-lg">
                        <a href="/admin/login" className="text-lg font-semibold text-white">
                            Property Owner / Manager <br /> (Rentals)
                        </a>
                    </div>

                    {/* Card 2 */}
                    <div className="flex h-[220px] w-full max-w-sm items-center justify-center rounded-xl bg-primary hover:bg-secondary transition-all duration-300 px-6 text-center shadow-lg">
                        <a href="login" className="text-lg font-semibold text-white">
                            Realtor (Homes for Sale)
                        </a>
                    </div>

                    {/* Card 3 */}
                    <div className="flex h-[220px] w-full max-w-sm items-center justify-center rounded-xl bg-primary hover:bg-secondary transition-all duration-300 px-6 text-center shadow-lg">
                        <a href="login" className="text-lg font-semibold text-white">
                            Both (Realtor & Rentals)
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
