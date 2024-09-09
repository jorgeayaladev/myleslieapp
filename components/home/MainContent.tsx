import Image from "next/image"
import React from "react"
import {
  BookSolidIcon,
  BugSolidIcon,
  PhotoSolidIcon,
  SettingsSolidIcon,
  StatisticsSolidIcon,
} from "../Icons"
import Link from "next/link"

const MainContent = () => {
  return (
    <>
      {/* FIRST SECTION */}
      <section className="px-5 py-10 lg:p-10 flex flex-col gap-5 text-white bg-gradient-to-tr from-lime-700 to-lime-950 sm:rounded-2xl shadow-2xl">
        {/* OUR PROJECT */}
        <div className="flex items-center gap-4">
          <SettingsSolidIcon styles="size-6 xl:size-8" />
          <h2 className="text-3xl xl:text-4xl font-bold underline">
            Nuestro proyecto
          </h2>
        </div>
        {/* DESCRIPTION */}
        <div className="sm:mx-10 flex flex-col gap-5">
          <Image
            className="h-[200px] xl:h-[300px] object-cover rounded-lg"
            src={`https://i.postimg.cc/bv8cyXYr/pantanos.png`}
            alt="Leslie Logo"
            width={1227}
            height={800}
          />
          <p className="text-sm xl:text-lg">
            El proyecto abarca el desarrollo y la implementación de una
            aplicación web basada en el modelo de Leslie, diseñada para{" "}
            <b className="text-amber-400">
              gestionar y predecir el crecimiento poblacional de diversas
              especies que habitan en Los Pantanos de Villa, Lima.
            </b>{" "}
            La aplicación proporcionará una plataforma interactiva y accesible
            que permitirá a los usuarios, incluyendo investigadores, gestores
            ambientales, y la comunidad en general, visualizar y analizar datos
            específicos de <b className="text-amber-400">natalidad</b>,{" "}
            <b className="text-amber-400">supervivencia</b> y{" "}
            <b className="text-amber-400">población inicial</b> de cada especie.
          </p>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="px-5 py-10 lg:p-10 flex flex-col gap-5 text-white bg-gradient-to-tr from-lime-700 to-lime-950 sm:rounded-2xl shadow-2xl">
        {/* THE MODEL */}
        <div className="flex items-center gap-4">
          <BookSolidIcon styles="size-6 xl:size-8" />
          <h2 className="text-3xl xl:text-4xl font-bold underline">
            El modelo
          </h2>
        </div>
        {/* DESCRIPTION */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-10">
          <Image
            className="w-[200px] xl:w-[300px] rounded-[50%] shadow-xl"
            src={`https://i.postimg.cc/43kt8ZbW/leslie3.png`}
            alt="Leslie Modelo"
            width={710}
            height={710}
          />
          <div className="sm:w-[50%] flex flex-col items-start">
            <p className="text-sm xl:text-lg">
              El <b className="text-amber-400">modelo de Leslie</b> es un
              concepto fundamental en la dinámica de poblaciones y es utilizado
              para estudiar la evolución de una población estructurada por edad
              o clases de edad a lo largo del tiempo. Desarrollado por Patrick
              H. Leslie en 1945, este modelo se basa en el{" "}
              <b className="text-amber-400">álgebra matricial</b> y es un
              ejemplo de un modelo de proyección matricial. Su principal
              objetivo es predecir cómo cambiarán las poblaciones en diferentes
              clases de edad con el tiempo, teniendo en cuenta factores como la{" "}
              <b className="text-amber-400">fecundidad</b> y la{" "}
              <b className="text-amber-400">supervivencia</b>.
            </p>
            <Link href="/about" className="mt-5 px-5 py-2 flex items-center gap-2 bg-gradient-to-tr from-amber-600 to-amber-800 rounded-2xl shadow-lg">
              <BookSolidIcon styles="size-5" />
              <p className="text-base xl:text-lg text-white font-semibold">
                Leer más...
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* THIRD SECTION */}
      <section className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 lg:gap-10">
        {/* PART 1 */}
        <div className="px-5 py-10 lg:p-10 flex flex-col gap-5 text-white bg-gradient-to-tr from-lime-700 to-lime-950 sm:rounded-2xl shadow-2xl">
          {/* SPECIES */}
          <div className="flex items-center gap-4">
            <BugSolidIcon styles="size-6 xl:size-8" />
            <h2 className="text-3xl xl:text-4xl font-bold underline">
              Especies
            </h2>
          </div>
          {/* DESCRIPTION */}
          <div className="flex flex-col items-center gap-5">
            <Image
              className="h-[200px] xl:h-[300px] object-cover rounded-xl shadow-xl"
              src={`https://i.postimg.cc/cJR32jF0/leslie4.png`}
              alt="Leslie Especies"
              width={710}
              height={710}
            />
            <div className="flex flex-col items-start">
              <p className="text-sm xl:text-lg">
                Te mostramos{" "}
                <b className="text-amber-400">todas las especies</b> y sus
                características como su crecimiento poblacional en cualquier
                periodo de tiempo.
              </p>
              <Link href="/species" className="mt-5 px-5 py-2 flex items-center gap-2 bg-gradient-to-tr from-amber-600 to-amber-800 rounded-2xl shadow-lg">
                <BugSolidIcon styles="size-5" />
                <p className="text-base xl:text-lg text-white font-semibold">
                  Ver especies
                </p>
              </Link>
            </div>
          </div>
        </div>
        {/* PART 2 */}
        <div className="px-5 py-10 lg:p-10 flex flex-col gap-5 text-white bg-gradient-to-tr from-lime-700 to-lime-950 sm:rounded-2xl shadow-2xl">
          {/* PICTURES */}
          <div className="flex items-center gap-4">
            <PhotoSolidIcon styles="size-6 xl:size-8" />
            <h2 className="text-3xl xl:text-4xl font-bold underline">
              Galería
            </h2>
          </div>
          {/* DESCRIPTION */}
          <div className="flex flex-col items-center gap-5">
            <Image
              className="h-[200px] xl:h-[300px] object-cover rounded-xl shadow-xl"
              src={`https://i.postimg.cc/K83ZPpZD/flamencos.png`}
              alt="Flamencos"
              width={1199}
              height={800}
            />
            <div className="flex flex-col items-start">
              <p className="text-sm xl:text-lg">
                Te mostramos{" "}
                <b className="text-amber-400">todas las imágenes</b> de las
                especies de animales que habitan en los Pantanos de Villa
                tomadas por reconocidos fotógrafos.
              </p>
              <Link href="/gallery" className="mt-5 px-5 py-2 flex items-center gap-2 bg-gradient-to-tr from-amber-600 to-amber-800 rounded-2xl shadow-lg">
                <PhotoSolidIcon styles="size-5" />
                <p className="text-base xl:text-lg text-white font-semibold">
                  Ver galería
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOURTH SECTION */}
      <section className="px-5 py-10 lg:p-10 flex flex-col gap-5 text-white bg-gradient-to-tr from-lime-700 to-lime-950 sm:rounded-2xl shadow-2xl">
        <div className="flex items-center gap-4">
          <StatisticsSolidIcon styles="size-6 xl:size-8" />
          <h2 className="text-3xl xl:text-4xl font-bold underline">
            Estadísticas
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 xl:gap-10">
          <Image
            className="h-[200px] object-cover rounded-xl shadow-xl"
            src={`https://i.postimg.cc/PrGtTs1s/bandada.png`}
            alt="Leslie Modelo"
            width={900}
            height={600}
          />
          <div className="sm:w-[50%] flex flex-col items-start">
            <p className="text-sm xl:text-lg">
              Te mostramos todas las{" "}
              <b className="text-amber-400">estadísticas poblacionales</b> de
              las diferentes especies así como una comparativa entre ellas para
              una mejor información.
            </p>
            <Link href="/statistics" className="mt-5 px-5 py-2 flex items-center gap-2 bg-gradient-to-tr from-amber-600 to-amber-800 rounded-2xl shadow-lg">
              <StatisticsSolidIcon styles="size-5" />
              <p className="text-base xl:text-lg text-white font-semibold">
                Estadísticas
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainContent
