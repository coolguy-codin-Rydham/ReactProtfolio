import { ServiceCard } from "../components";
import { ServiceData } from "../utils/helper.js";
const ServiceCount = () => {
  return (
    <div className="flex flex-wrap items-center justify-center w-full gap-8 py-6 mt-24 lg:py-4">
      {ServiceData &&
        ServiceData.map((data) => (
          <ServiceCard key={data.text} count={data.count} text={data.text} />
        ))}
    </div>
  );
};

export default ServiceCount;
