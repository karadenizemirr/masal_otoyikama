"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, Form, Formik } from "formik";
import React from "react";

export default function ReservationContainer(){
    return (
        <div className="grid grid-cols-12 container mx-auto mt-20 min-h-[70vh] gap-5">
            <div className="col-span-6 bg-light h-full rounded-xl shadow-lg flex flex-1 items-center justify-center">
                <Formik initialValues={{
                    name:"",
                    surname: "",
                    carPlate: "",
                    reservationDate: ""
                }}
                onSubmit={() => {}}
                >
                    <Form>
                        <div className="title text-center mb-10">
                            <h1 className="text-2xl font-extrabold" >
                                Online Randevu Oluşturun
                            </h1>
                        </div>
                        <div className="row flex flex-1 gap-5" >
                            <Field name="name" placeholder="Adınız" className="form-element" autoComplete="off" />
                            <Field name="surname" placeholder="Soyadınız" className="form-element" autoComplete="off" />
                        </div>
                        <div className="row flex flex-1 gap-5 mt-5">
                            <Field>
                                {({field, form}: {field:any, form:any}) => (
                                    <input type="date" name="reservationDate" className="form-element" />
                                )}
                            </Field>
                            <Field name="carPlate" className="form-element" placeholder="Araç Plakası" />
                        </div>
                        <div className="row flex flex-1 items-center justify-center mt-10">
                            <button className="btn-secondary" >
                                Randevu Al
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
            <div className="col-span-6 flex flex-1 items-center justify-center">
                <div className="content text-center flex flex-col flex-wrap items-center justify-center">
                    <img src="/images/icons/reservation.png" alt="" style={{width: '100px'}} className="mb-5"/>
                    <h1 className="font-extrabold text-2xl" >
                        Aracınızı Yıkatmak İçin Önden Randevu Alın
                    </h1>
                    <p className="mt-10">
                    Araç bakımınızın önemini biliyoruz ve bu nedenle size en iyi hizmeti sunabilmek için daha iyi bir deneyim sağlamak istiyoruz. Araç yıkama hizmetlerimizde bekleme sürelerini en aza indirmek ve sizlere daha hızlı hizmet sunabilmek için önden randevu almamız gerektiğini fark ettik. Randevu alarak, aracınızı yıkamak için sıra beklemek zorunda kalmayacak ve vakit kaybı yaşamayacaksınız.
                    </p >
                    <button className="btn-secondary mt-10" >
                        Bizi Arayın
                    </button>
                </div>
            </div>
        </div>
    )
}