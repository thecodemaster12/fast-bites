import { useState } from "react"

const App = () => {
  const [cart, setCart] = useState(0);

  const addToCart = () => {
    setCart((prev) => prev + 1);
  }

  const removeFromCart = () => {
    setCart((prev) => prev - 1);
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="menu-wrapper flex max-w-4xl w-full min-h-96">
          <div className="menu-left flex-1 p-3 bg-orange">
            <div className="heading">
              <h2 className="title uppercase text-6xl font-bold mb-4">menu</h2>
              <p className="data-time mb-4">
                Everyday from 10:00 am to 10:00 pm
              </p>
            </div>

            <div className="menu-items border-t mt-6 first:mt-0">
              <h4 className="item-heading uppercase text-2xl font-bold mb-1">Burgers</h4>
              <a href="#" className="menu-item flex justify-between hover:bg-amber-200 transition-all duration-150"><span>Normal Burger</span> <span>$14</span></a>
              <a href="#" className="menu-item flex justify-between hover:bg-amber-200 transition-all duration-150"><span>Normal Burger</span> <span>$14</span></a>
              <a href="#" className="menu-item flex justify-between hover:bg-amber-200 transition-all duration-150"><span>Normal Burger</span> <span>$14</span></a>
            </div>
            <div className="menu-items border-t mt-6 first:mt-0">
              <h4 className="item-heading uppercase text-2xl font-bold mb-1">Burgers</h4>
              <a href="#" className="menu-item flex justify-between hover:bg-amber-200 transition-all duration-150"><span>Normal Burger</span> <span>$14</span></a>
              <a href="#" className="menu-item flex justify-between hover:bg-amber-200 transition-all duration-150"><span>Normal Burger</span> <span>$14</span></a>
              <a href="#" className="menu-item flex justify-between hover:bg-amber-200 transition-all duration-150"><span>Normal Burger</span> <span>$14</span></a>
            </div>
          </div>
          <div className="menu-right flex-2 p-3 bg-light-orange">
            <div className="menu-card space-y-4">
              <div className="menu-card-image rounded-md object-cover overflow-hidden">
                <img src="https://placehold.co/600x400" draggable="false" className="w-full select-none" alt="" />
              </div>
              <div className="menu-card-content space-y-4">
                <div className="flex justify-between items-start">                  
                  <h4 className="menu-card-title font-bold text-2xl">Crispy Burger Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur. </h4><span className="menu-card-price font-bold text-2xl">$14</span>
                </div>
                <p className="menu-card-description text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, magni. Sit illum tenetur ratione odit!</p>
                <div className="flex gap-6">
                  <span className="rating">⭐ 4.1</span>
                  <span className="time-to-make">30 min</span>
                  <span className="calories">500 cal</span>
                </div>

                <div className="order-area flex gap-4">
                  <div className="item-count bg-black text-white shrink-0 flex gap-2 rounded">
                    <button onClick={removeFromCart} className="minus p-2">-</button>
                    <span className="count p-2">{cart}</span>
                    <button  onClick={addToCart} className="plus p-2">+</button>
                  </div>
                  <button className="add-to-cart bg-orange hover:bg-amber-200 transition-all duration-150 flex-1 rounded">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App