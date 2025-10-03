const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex items-center justify-between">
                    <h1 className="text-lg font-bold">My Website</h1>
                    <ul className="flex space-x-4">
                        <li className="hover:underline cursor-pointer">Home</li>
                        <li className="hover:underline cursor-pointer">About</li>
                        <li className="hover:underline cursor-pointer">Contact</li>
                    </ul>
                </div>
            </div>
            
            {/* <h1>My Website</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul> */}
        </nav>
    );
}