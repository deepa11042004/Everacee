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
    <section className="h-screen bg-[#fffdf1] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
            All about the nuts
          </h1>
          <p className="text-gray-600 text-lg">Turpis egestas sed</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NUTS_DATA.map((nut) => (
            <div 
              key={nut.id} 
              className="bg-[#faf6ea] border border-gray-300 p-8 flex flex-col items-center text-center"
            >
              {/* Image Container */}
              <div className="relative w-24 h-20 mb-6">
                <Image
                  src={nut.src}
                  alt={nut.name}
                  fill
                  className="object-contain"
                  priority={nut.id <= 4} // Loads top row faster
                />
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {nut.name}
              </h2>
              
              <p className="text-gray-500 text-sm leading-relaxed max-w-50">
                {nut.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}