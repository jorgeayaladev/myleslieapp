import Aside from "@/components/home/Aside"
import Banner from "@/components/home/Banner"
import MainContent from "@/components/home/MainContent"

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <Banner />

      <hr className="my-5 md:my-10 h-1 bg-white rounded-lg" />

      {/* MAIN LAYOUT */}
      <main className="flex gap-10">
        {/* MAIN CONTENT */}
        <div className="w-full lg:w-[75%] flex flex-col gap-5 lg:gap-10">
          <MainContent />
        </div>

        {/* ASIDES */}
        <Aside />
      </main>
    </>
  )
}
