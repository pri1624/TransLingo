import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="flex items-center text-xl justify-between m-4 gap-4 p-4">
        <a href="/">
          <h1 className="font-medium">
            Trans<span className="text-[#ee8e46] bold">Lingo</span>
          </h1>
        </a>

        <a
          href="/"
          className="flex items-center justify-between gap-2 specialBtn px-4 text-lg py-3 m-4 rounded-lg text-[#ff6f00]"
        >
          <p>New</p>
          <i className="fa-solid fa-plus"></i>
        </a>
      </header>
    </div>
  );
}

export default Header