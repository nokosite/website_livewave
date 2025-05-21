// Function to format price
function formatPrice(price, currency, unit) {
    return `${currency} ${price} ${unit}`;
}

// Function to render pricing cards
async function renderPricingCards() {
    try {
        const response = await fetch('/js/pricing.json');
        const data = await response.json();
        const pricingContainer = document.getElementById('pricing-cards');
        
        if (!pricingContainer) return;

        const cards = data.packages.map(pkg => {
            const isPopular = pkg.isPopular ? `
                <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span class="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">Most Popular</span>
                </div>
            ` : '';

            const borderStyle = pkg.isPopular ? 'border-2 border-blue-600' : 'border border-gray-100';
            const shadowStyle = pkg.isPopular ? 'shadow-md hover:shadow-lg' : 'shadow-sm hover:shadow-md';
            
            const buttonStyle = pkg.buttonStyle === 'primary' 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white';

            const features = pkg.features.map(feature => `
                <li class="flex items-start text-sm text-gray-600">
                    <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    ${feature}
                </li>
            `).join('');

            return `
                <div class="bg-white rounded-lg ${shadowStyle} transition-shadow duration-300 ${borderStyle} relative flex flex-col min-h-[420px]">
                    ${isPopular}
                    <div class="p-6 flex-grow">
                        <div class="text-center mb-6">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">${pkg.name}</h3>
                            <div class="flex items-baseline justify-center">
                                <span class="text-3xl font-bold text-blue-600">${pkg.currency} ${pkg.price}</span>
                                <span class="text-lg text-gray-500 ml-1">${pkg.unit}</span>
                                <span class="text-sm text-gray-400 ml-1">/${pkg.period}</span>
                            </div>
                        </div>
                        <ul class="space-y-3">
                            ${features}
                        </ul>
                    </div>
                    <div class="p-6 pt-0 mt-auto">
                        <a href="#contact" class="block w-full text-center ${buttonStyle} py-3 rounded-md transition-all duration-300 text-sm font-medium transform hover:-translate-y-1 hover:shadow-lg">
                            Pilih Paket
                        </a>
                    </div>
                </div>
            `;
        }).join('');

        pricingContainer.innerHTML = cards;

        // Add GSAP animation for the cards
        gsap.from("#pricing-cards > div", {
            scrollTrigger: {
                trigger: "#pricing-cards",
                start: "top center+=100",
                toggleActions: "play none none reverse"
            },
            duration: 1,
            y: 100,
            opacity: 0,
            stagger: 0.2,
            ease: "power3.out"
        });

    } catch (error) {
        console.error('Error loading pricing data:', error);
    }
}

// Initialize pricing cards when DOM is loaded
document.addEventListener('DOMContentLoaded', renderPricingCards); 