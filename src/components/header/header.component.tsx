import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

export default function HeaderComponent() {
    return (
        <div className="bg-light min-h-[70vh]" >
            <div className="grid grid-cols-12 container h-full gap-10">
                <div className="col-span-5 text-center flex flex-1 items-center">
                    <div className="contentContainer">
                        <h1 className="text-primary font-medium text-xl" >
                            Masal Oto Kuaför'e Hoş Geldiniz
                        </h1>
                        <p className="text-black text-6xl font-extrabold mt-10" >
                            Araçlarınız İçin Güvenli Yıkama
                        </p>
                        <p className="italic  mt-5" >
                            Araçlarınızı uzman ellere emanet edin, güvenli yıkama ile parlamasını sağlayın.
                        </p>

                        <div className="buttonGroup mt-10 flex flex-1 items-center justify-center gap-5">
                            <button className="btn-primary border border-black" >
                                Rezervasyon
                            </button>
                            <button className="btn-primary border border-gray-500 bg-transparent text-black" >
                                Araç Sorgula
                            </button>
                        </div>

                        <div className="socialIcons">
                            <ul className="flex flex-1 gap-5 items-center justify-center my-10" >
                                <li>
                                    <FontAwesomeIcon icon={faFacebook} width={20} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faInstagram} width={20} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faTiktok} width={20} />
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-7 rounded-xl shadow-lg mt-10 relative">
                    <img src="/images/header.jpg" alt="" className="rounded-xl opacity-80" />

                    <div className="contactCard absolute top-10 left-20 bg-white p-5 px-10 rounded-xl shadow-lg">
                        <ul className="flex flex-1 gap-4 items-center" >
                            <li>
                                <FontAwesomeIcon icon={faUser} width={15} />
                            </li>
                            <li>
                                Emirhan Karadeniz
                            </li>
                        </ul>
                    </div>
                    <div className="contactCard absolute bottom-10 right-20 bg-white p-5 px-10 rounded-xl shadow-lg">
                        <span>
                            Emrhan KAradeniz
                        </span>
                        <span className="text-sm">
                            0507 651 0758
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}