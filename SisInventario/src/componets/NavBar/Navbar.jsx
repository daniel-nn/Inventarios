import movingBox from '../../assets/MovingBox.png'

const NavBar = () => {

    return (
        <header className="bg-slate-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
                <div className="flex items-center gap-3">
                    <img src={movingBox} alt="Moving box" className="h-10 w-auto object-contain" />
                    <h1 className="text-lg font-semibold">SisTema De Inventarios</h1>
                </div>
                <h1 className="text-sm">Usuario</h1>

            </div>
        </header>

    );

};

export default NavBar;