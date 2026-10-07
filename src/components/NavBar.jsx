export const Navbar = () => {
  return (
    <nav className="w-full bg-slate-900 text-white px-4 sm:px-6">
      <ul className="flex items-center gap-8 py-4">
        <li className="hover:text-blue-400 cursor-pointer">Inicio</li>

        <li className="ml-auto">
          <button className="hover:text-red-400 cursor-pointer">
            Cerrar Sesión
          </button>
        </li>
      </ul>
    </nav>
  );
};
