import ServicesCard from "@/components/ServicesCard"

const services = () => {
  return (
    <section className="w-full mt-10">
      <div className="container mx-auto">
      <div className="text-center flex flex-col items-center gap-6 xl:mt-[100px]">
        <h1 className="text-8xl uppercase font-extrabold">Services</h1>
      </div>
      <div className="w-full h-full mx-auto flex items-center justify-center mt-5">
          <ServicesCard />
      </div>
      <div className="text-center flex flex-col items-center mt-10">
        <p className="w-[60%] text-sm">Delivering tailored software engineering solutions that drive innovation, streamline processes, and elevate your digital presence, from concept to deployment and beyond</p>
      </div>
      
      </div>
    </section>
  )
}

export default services