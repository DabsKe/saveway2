import {
  Package,
  Truck,
  MapPin,
  Warehouse,
  FileCheck,
  Navigation,
  Thermometer,
  AlertTriangle,
} from 'lucide-react';

function Services() {
  const transportServices = [
    {
      icon: Package,
      title: 'General Cargo Transportation',
      description: 'Reliable delivery of general merchandise and goods',
    },
    {
      icon: Package,
      title: 'Containerized Cargo Delivery',
      description: '20ft & 40ft container transport solutions',
    },
    {
      icon: Truck,
      title: 'Bulk Cargo & Construction Materials',
      description: 'Heavy-duty haulage for construction and bulk materials',
    },
    {
      icon: Thermometer,
      title: 'Refrigerated Transport',
      description: 'Temperature-controlled solutions (future expansion)',
    },
    {
      icon: AlertTriangle,
      title: 'Hazardous Cargo Transport',
      description: 'Specialized compliance for dangerous goods',
    },
  ];

  const logisticsServices = [
    {
      icon: Navigation,
      title: 'Freight Coordination',
      description: 'End-to-end freight management and coordination',
    },
    {
      icon: MapPin,
      title: 'Route Planning & Scheduling',
      description: 'Optimized routes for timely and efficient delivery',
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Distribution',
      description: 'Storage and distribution support services',
    },
    {
      icon: FileCheck,
      title: 'Customs Clearing Facilitation',
      description: 'Streamlined customs processing through partners',
    },
    {
      icon: Truck,
      title: 'Last-Mile Delivery',
      description: 'Final delivery solutions to end customers',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-blue-500">Services</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive transport and logistics solutions designed to meet
            your business needs across East Africa
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <Truck className="h-8 w-8 text-blue-500" />
            <h2 className="text-3xl font-bold text-slate-900">
              Transport & Trucking Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transportServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-400 hover:-translate-y-1"
                >
                  <div className="bg-blue-100 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <MapPin className="h-8 w-8 text-blue-500" />
            <h2 className="text-3xl font-bold text-slate-900">
              Logistics Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {logisticsServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-400 hover:-translate-y-1"
                >
                  <div className="bg-blue-100 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed text-blue-50">
              To become a trusted logistics partner delivering efficient, safe,
              and reliable transport solutions across East Africa.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed text-slate-200">
              To enhance trade and supply chain efficiency by providing
              professional trucking, logistics, and commission services
              committed to reliability, transparency, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
