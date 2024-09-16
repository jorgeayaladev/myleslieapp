"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Navigation, Autoplay, Pagination, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { EyeSolidIcon } from "@/components/Icons"
import { SpecieData } from "@/types/dataTypes"
import { supabase } from "@/lib/supabase"
import { preservationState } from "@/constants/data"

const Information = ({ data }: { data: SpecieData }) => {
  const [swiper, setSwiper] = useState<any>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Other data
  const [classData, setClassData] = useState<any>()
  const [orderData, setOrderData] = useState<any>()
  const [familyData, setFamilyData] = useState<any>()

  const aM = [data.youth_data, data.adult_data, data.mature_data]
  const conservation = preservationState.find((state) => state.id === data.iucn)

  useEffect(() => {
    const fetchFamily = async () => {
      const { data: familyTable, error } = await supabase
        .from("family")
        .select("*")
        .eq("id", data.id)

      if (error) {
        console.error("Error fetching species:", error)
      } else if (familyTable) {
        setFamilyData(familyTable[0])

        const { data: orderTable } = await supabase
          .from("order")
          .select("*")
          .eq("id", familyTable[0].order_id)
        if (orderTable) {
          setOrderData(orderTable[0])

          const { data: classTable } = await supabase
            .from("class")
            .select("*")
            .eq("id", orderTable[0].class_id)
          if (classTable) setClassData(classTable[0])
        }
      }
    }

    fetchFamily()
  }, [])

  return (
    <section className="row-span-1 col-span-2 xl:col-span-1 xl:row-span-3 h-min p-5 md:p-10 flex flex-col items-center gap-4 sm:gap-5 bg-white sm:rounded-2xl shadow-2xl">
      {/* TITTLE */}
      <div className="w-full">
        <h2 className="text-xl md:text-3xl xl:text-4xl font-bold">
          {data.spanish_name}
        </h2>
        <small className="mt-2 text-sm md:text-lg italic">
          {data.scientific_name}
        </small>
      </div>

      {/* DEFINITIONS */}
      <div className="grid grid-cols-2 text-center text-xs sm:text-sm md:text-base shadow-md rounded-lg">
        <div className="col-span-2 px-2 py-1 sm:px-5 sm:py-2.5 text-left bg-gray-200 border-2 border-gray-800 rounded-t-lg">
          <b className="underline">Definición</b>:<p>{data.description}</p>
        </div>
        <div className="col-span-2 px-2 py-1 sm:px-5 sm:py-2.5 bg-gray-800 text-gray-200">
          <p>
            <b>Otras definiciones</b>: {data.english_name}
            {data.portuguese_name && `, ${data.portuguese_name}`}
          </p>
        </div>
        <div className="col-span-1 px-2 py-1 sm:px-5 sm:py-2.5 bg-gray-600 text-gray-200">
          <b>Familia</b>: <u>{familyData?.scientific_name}</u>
        </div>
        <div className="col-span-1 px-2 py-1 sm:px-5 sm:py-2.5 bg-gray-200 text-gray-800 rounded-bl-lg">
          <b>Orden</b>: <u>{orderData?.scientific_name}</u>
        </div>
        <div className="col-span-1 px-2 py-1 sm:px-5 sm:py-2.5 bg-gray-200 text-gray-800">
          <b>Clase</b>: <u>{classData?.scientific_name}</u>
        </div>
        <div
          className="col-span-1 px-2 py-1 sm:px-5 sm:py-2.5 text-black"
          style={{ background: conservation?.color }}
        >
          <b>Estado</b>: <u>{conservation?.name}</u>
        </div>
      </div>

      {/* INFORMATION */}
      <div className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-3 gap-2 md:gap-4">
        {/* SLIDER */}
        <div className="col-span-3 lg:row-span-3 xl:row-span-1  rounded-lg shadow-xl cursor-move">
          <Swiper
            modules={[Navigation, Autoplay, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => setSwiper(swiper)}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          >
            {data.images &&
              data.images.map((link, index) => (
                <SwiperSlide key={`S00${index}`}>
                  <Image
                    className="h-[300px] xl:h-[400px] object-cover rounded-lg"
                    src={link}
                    alt={`specie_${index}`}
                    width={1227}
                    height={800}
                    priority
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        {/* IMAGES */}
        {data.images &&
          data.images.map((link, index) => (
            <div
              className="relative rounded-lg shadow-xl cursor-pointer"
              onClick={() => {
                swiper.slideTo(index)
                setCurrentSlide(index)
              }}
              key={`S00${index}`}
            >
              <Image
                className="h-[80px] lg:h-[89px] object-cover rounded-lg"
                src={link}
                alt={`specie_${index}`}
                width={1227}
                height={800}
                priority
              />
              {index === currentSlide && (
                <div className="absolute w-full h-full top-0 flex items-center justify-center text-white bg-black bg-opacity-60 rounded-lg">
                  <EyeSolidIcon styles="size-6" />
                </div>
              )}
            </div>
          ))}
      </div>

      {/* TITTLE */}
      <div className="w-full">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold underline">
          Detalles poblacionales
        </h2>
        <small className="mt-2 text-xs sm:text-sm md:text-base italic">
          Datos principales en la población de hembras de la especie
        </small>
      </div>

      {/* DATA TABLE */}
      <div className="w-full relative overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-xs sm:text-sm md:text-base text-left table-auto">
          <thead>
            <tr className="bg-gray-800 text-white">
              {[
                "Clase",
                "Fecundidad",
                "Supervivencia",
                "Población inicial",
              ].map((head, index) => (
                <th
                  scope="col"
                  className="px-2 py-1 sm:px-5 sm:py-2.5"
                  key={index}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {["Juveniles", "Adultos Jóvenes", "Adultos maduros"].map(
              (el, index) => (
                <tr
                  className="odd:bg-gray-500 even:bg-white odd:text-white even:text-black"
                  key={index}
                >
                  <td className="font-bold px-2 py-1 sm:px-5 sm:py-2.5 capitalize">
                    {el}
                  </td>
                  <td className="px-2 py-1 sm:px-5 sm:py-2.5">
                    {(aM[index][0] * 100).toFixed(0)}%
                  </td>
                  <td className="px-2 py-1 sm:px-5 sm:py-2.5">
                    {(aM[index][1] * 100).toFixed(0)}%
                  </td>
                  <td className="px-2 py-1 sm:px-5 sm:py-2.5">
                    {aM[index][2].toFixed(0)}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Information
