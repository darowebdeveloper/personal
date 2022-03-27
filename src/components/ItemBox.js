import React from 'react';

function ItemBox({ item, set = 'set3' }) {
  return (
    <div key={item.id}>
      <div className="p-10 border-2 border-gray-400 text-center rounded-bl-3xl rounded-tr-3xl relative overflow-hidden">
        <img
          src={`https://robohash.org/${item.name}?set=${set}`}
          alt={item.name}
          className="w-full inline-block"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 flex-col opacity-0 hover:opacity-80 px-10">
          <h1 className="text-2xl text-white font-semibold mb-5">
            {item.name}
          </h1>
          <button className="border-2 rounded border-white py-2 px-5 hover:bg-teal-500 text-white">
            DEMO
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemBox;
