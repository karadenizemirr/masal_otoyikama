import Link from "next/link";
import React from "react";

export default function NavbarComponent(){
    return (
        <div className="grid grid-cols-12 container mx-auto py-4 items-center">
            <div className="col-span-3">
                <h1 className="text-2xl font-extrabold" >
                    Masal Oto Kuaför
                </h1>
            </div>
            <div className="col-span-6">
                <ul className="flex flex-1 gap-10 justify-center" >
                    <li>
                        Anasayfa
                    </li>
                    <li>
                        Hakkımızda
                    </li>
                    <li>
                        İletişim
                    </li>
                </ul>
            </div>
            <div className="col-span-3 flex flex-1 items-end justify-end gap-5">
                <button className="btn-primary">
                    Rezervasyon
                </button>
            </div>
        </div>
    )
}