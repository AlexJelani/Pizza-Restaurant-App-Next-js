import React, { useState } from "react";
import Product from "../Product.json";

export default function ProductFilter() {
    const [items, setItems] = useState(Product);

    const filterItems = (catItem) => {
        const updateItems = Product.filter((curItem) => {
            return curItem.category === catItem;
        });
        setItems(updateItems);
    };

    return (
        <div className="bg-white min-h-screen " id='menu' >
            <div className="container mx-auto pt-5 pb-10" >
                <h1 className="text-3xl font-bold mb-5 " >Taki Menu</h1>
                <div className="flex justify-center mb-5 space-x-3">
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                        onClick={() => setItems(Product)}
                    >
                        メニュー
                    </button>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                        onClick={() => filterItems("pizzas")}
                    >
                        ピザ
                    </button>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                        onClick={() => filterItems("burgerdogs")}
                    >
                        ハンバーガー&ホットドッグ
                    </button>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                        onClick={() => filterItems("desserts")}
                    >
                        アイスクリーム&シェイク
                    </button>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                        onClick={() => filterItems("specials")}
                    >
                        スペシャル
                    </button>
                </div>
                <hr className="mb-5" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {items.map((val, index) => (
                        <div key={index} className="card">
                            <img src={val.image} className="card-img-top img-fluid p-3" alt="..." />
                            <div className="card-body">
                                {/*<div className="flex justify-between">*/}
                                <p>{val.title.substring(0, 15)}</p>
                                <p className="bg-red-500 text-white px-2 py-1 rounded-md">{val.price}</p>
                                {/*</div>*/}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
