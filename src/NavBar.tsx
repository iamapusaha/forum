

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">

                <a className="btn btn-ghost text-xl">HelpDesk</a>
            </div>

            <div className="navbar-end">
                <div className="relative group">
                    <img className="w-[50px] h-[50px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="" />
                    <span className="h-4 w-4 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                    <span className="h-4 w-4 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                </div>
            </div>

        </div>
    );
};

export default NavBar;