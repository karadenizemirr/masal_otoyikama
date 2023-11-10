import React from "react";

export default function ServicesComponent(){
    return (
        <div className="container mx-auto mt-20 mb-20" >
            <div className="title">
                <h1 className="text-2xl font-bold text-center" >
                    Hizmetlerimiz
                </h1>
            </div>
            <div className="servicesCard flex flex-1 items-center flex-wrap gap-10 justify-center items-center mt-10">
                <div className="cardContainer bg-white lg:w-1/5 w-full rounded-lg shadow-xl p-3 flex flex-col justify-center items-center gap-5 h-52 overflow-hidden">
                    <div className="icon">
                        <img src="/images/icons/icon1.png" alt="" style={{width: '70px'}} />
                    </div>
                    <div className="title text-center">
                        <h1 className="text-xl font-bold" >
                            Detaylı Temizlik
                        </h1>
                        <p>
                            Aracınız detaylı olarak yıkanır.
                        </p>
                    </div>
                </div>
                <div className="cardContainer bg-white lg:w-1/5 w-full rounded-lg shadow-xl p-3 flex flex-col justify-center items-center gap-5 h-52 overflow-hidden">
                    <div className="icon">
                        <img src="/images/icons/icon2.png" alt="" style={{width: '70px'}} />
                    </div>
                    <div className="title text-center">
                        <h1 className="text-xl font-bold" >
                            Dış Bakım
                        </h1>
                        <p>
                            Tüm dış parçalar temizlenir.
                        </p>
                    </div>
                </div>
                <div className="cardContainer bg-white lg:w-1/5 w-full rounded-lg shadow-xl p-3 flex flex-col justify-center items-center gap-5 h-52 overflow-hidden">
                    <div className="icon">
                        <img src="/images/icons/icon3.png" alt="" style={{width: '70px'}} />
                    </div>
                    <div className="title text-center">
                        <h1 className="text-xl font-bold" >
                            Online Takip
                        </h1>
                        <p>
                            Aracınızı çevrimiçi takip edin.
                        </p>
                    </div>
                </div>
                <div className="cardContainer bg-white lg:w-1/5 w-full rounded-lg shadow-xl p-3 flex flex-col justify-center items-center gap-5 h-52 overflow-hidden">
                    <div className="icon">
                        <img src="/images/icons/icon4.png" alt="" style={{width: '70px'}} />
                    </div>
                    <div className="title text-center">
                        <h1 className="text-xl font-bold" >
                            Detaylı Temizlik
                        </h1>
                        <p>
                            Her parça temizlenir.   
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}