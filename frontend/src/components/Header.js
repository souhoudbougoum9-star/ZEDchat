import React from 'react';
import { FiLogOut, FiMenu } from 'react-icons/fi';

function Header({ title, onLogout, onMenuClick }) {
  return (
    <header className="bg-green-500 text-white px-4 py-3 shadow-md flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 hover:bg-green-600 rounded-lg"
        >
          <FiMenu size={24} />
        </button>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <button
        onClick={onLogout}
        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
      >
        <FiLogOut /> Déconnexion
      </button>
    </header>
  );
}

export default Header;
