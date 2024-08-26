import ServicesCard from "@/components/ServicesCard"

const services = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
      <div className="text-center flex flex-col items-center gap-6">
        <h1 className="text-5xl uppercase font-extrabold">Services</h1>
        <p className="w-[60%] text-sm">Delivering tailored software engineering solutions that drive innovation, streamline processes, and elevate your digital presence, from concept to deployment and beyond</p>
      </div>
      <div className="w-full mx-auto flex items-center justify-center mt-5">
          <ServicesCard />
      </div>
      </div>
    </section>
  )
}

export default services