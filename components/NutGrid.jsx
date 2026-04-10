import Image from 'next/image';

const NUTS_DATA = [
  { id: 1, name: 'Cashew', src: '/img/cashew.png', description: 'A lorem doromu suis turpis egestas sad suis' },
  { id: 2, name: 'Peanut', src: '/img/peanut.png', description: 'A lorem doromu suis turpis egestas sad suis' },
  { id: 3, name: 'Pistachio', src: '/img/pistachio.png', description: 'A lorem doromu suis turpis egestas sad suis' },
  { id: 4, name: 'Hazelnut', src: '/img/hazelnut.png', description: 'A lorem doromu suis turpis egestas sad suis' },
  { id: 5, name: 'Walnut', src: '/img/walnut.png', description: 'A lorem doromu suis turpis egestas sad suis' },
  { id: 6, name: 'Pecan Nut', src: '/img/pecan.png', description: 'A lorem doromu suis turpis egestas sad suis' },
  { id: 7, name: 'Almond', src: '/img/almond.png', description: 'A lorem doromu suis turpis egestas sad suis' },
  { id: 8, name: 'Cola Nut', src: '/img/cola-nut.png', description: 'A lorem doromu suis turpis egestas sad suis' },
];

export default function NutGrid() {
  return (
    <section className="w-full bg-[#fffdf1] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center pb-10 sm:pb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
            All about the nuts
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mt-2">
            Turpis egestas sed
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {NUTS_DATA.map((nut) => (
            <div 
              key={nut.id} 
              className="bg-[#faf6ea] border border-gray-200 p-6 sm:p-8 flex flex-col items-center text-center rounded-xl transition hover:shadow-md"
            >
              {/* Image */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4">
                <Image
                  src={nut.src}
                  alt={nut.name}
                  fill
                  className="object-contain"
                  priority={nut.id <= 4}
                />
              </div>
              
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {nut.name}
              </h2>
              
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                {nut.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}