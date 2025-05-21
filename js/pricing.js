// Pricing data langsung di JS (tanpa fetch)
const pricingData = {
  packages: [
    {
      id: 1,
      name: "Basic Package",
      price: 1500000,
      currency: "Rp",
      unit: "",
      period: "/acara",
      isPopular: false,
      features: [
        "2 Kamera Full HD",
        "1 Operator",
        "Live Streaming ke 1 Platform",
        "Dokumentasi Video Rekap"
      ],
      buttonStyle: "primary"
    },
    {
      id: 2,
      name: "Professional Package",
      price: 3500000,
      currency: "Rp",
      unit: "",
      period: "/acara",
      isPopular: true,
      features: [
        "3 Kamera Full HD",
        "2 Operator",
        "Live Streaming ke 2 Platform",
        "Dokumentasi Video & Foto",
        "Overlay Grafis"
      ],
      buttonStyle: "primary"
    },
    {
      id: 3,
      name: "Premium Package",
      price: 6000000,
      currency: "Rp",
      unit: "",
      period: "/acara",
      isPopular: false,
      features: [
        "4 Kamera Full HD",
        "3 Operator",
        "Live Streaming ke Multi Platform",
        "Dokumentasi Video & Foto Full",
        "Overlay Grafis & Animasi",
        "After Movie"
      ],
      buttonStyle: "primary"
    }
  ]
};

function formatPrice(price, currency, unit, period) {
  return `${currency} ${price.toLocaleString()}${unit} <span class='text-gray-400'>${period}</span>`;
}

function renderPricingCards() {
  const pricingContainer = document.getElementById('pricing-cards');
  if (!pricingContainer) return;
  pricingContainer.innerHTML = pricingData.packages.map(pkg => `
    <div class="relative flex flex-col bg-white rounded-xl shadow-md p-8 border border-blue-100">
      ${pkg.isPopular ? `<div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow">Most Popular</div>` : ''}
      <h3 class="text-xl font-bold text-blue-800 mb-2">${pkg.name}</h3>
      <div class="text-3xl font-bold text-blue-700 mb-4" >${formatPrice(pkg.price, pkg.currency, pkg.unit, pkg.period)}</div>
      <ul class="mb-6 space-y-2 text-gray-600 text-sm">
        ${pkg.features.map(f => `<li class="flex items-center gap-2"><span class="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>${f}</li>`).join('')}
      </ul>
      <a href="#contact" class="block mt-auto px-5 py-2 text-sm font-semibold text-center text-white bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 rounded-md shadow hover:from-blue-700 hover:via-blue-500 hover:to-blue-300 transition-colors">Pilih Paket</a>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderPricingCards); 