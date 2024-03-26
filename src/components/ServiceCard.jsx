const ServiceCard = ({ count, text }) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-32 gap-2 border rounded-md cursor-pointer lg:w-52 border-white/30 group hover:border-primary bg-bgPrimary"
      style={{ boxShadow: "inset 0 0 10px rgba(255,255,255,0.3)" }}
    >
      <div
        className={`hidden group-hover:block absolute -inset-1 blur-md bg-gradient-to-br from-primary to-secondary -z-10 group-hover:transition-all transition-all`}
        >
        </div>
        
      <p className="font-sans text-2xl tracking-widest capitalize text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">{count}</p>
      <p className="text-base text-texlight group-hover:text-white ">{text}</p>

    </div>
  );
};

export default ServiceCard;
