import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function FooterComponent(){
    return (
        <div className="w-full mt-20 bg-black text-white p-5 " >
            <div className="bottom grid grid-cols-12 mt-10 container mx-auto">
                <div className="col-span-3 flex items-center">
                    <ul className="flex flex-1 items-center text-gray-300 gap-10" >
                        <li className="text-sm" >
                            <FontAwesomeIcon icon={faFacebook} width={15} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} width={15} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faTiktok} width={15} />
                        </li>
                    </ul>
                </div>
                <div className="col-span-6 flex flex-1 justify-center items-center">
                <div className="title flex flex-1 items-center justify-center h-full">
                <h1 className="text-4xl font-extrabold" >
                    Masal Oto Kuaför
                </h1>
            </div>
                </div>
                <div className="col-span-3 flex flex-1 justify-center text-xs">
                    <ul className="flex flex-col items-center justify-center gap-5">    
                        <li>
                        <p className="flex gap-3 items-center" >
                        <FontAwesomeIcon icon={faAddressCard} width={20} />112 Acil Çağrı Merkezi Arkası - Merkez/ARDAHAN
                    </p>
                        </li>
                        <li>
                            <p className="flex gap-3 items-center" >
                                <FontAwesomeIcon icon={faPhone} width={15} /> Uğur ATMACA - 0507651 0758
                            </p>
                        </li>
                        <li>
                        <p className="flex gap-3 items-center" >
                                <FontAwesomeIcon icon={faPhone} width={15} /> Mert ATMACA - 0507651 0758
                            </p>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}