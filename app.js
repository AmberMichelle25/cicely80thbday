// Cicely's 80th Birthday Celebration — Web Application Logic

// Current Filter State
const state = {
  activeTab: 'party',
  restaurantCity: 'all',
  restaurantMeal: 'all',
  restaurantQuery: '',
  activityCategory: 'all',
  activityQuery: '',
  shoppingCity: 'all'
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  // Sync tab from URL hash if present
  const hash = window.location.hash.replace('#', '');
  if (['party', 'gifts', 'lodging', 'travel', 'restaurants', 'entertainment', 'shopping'].includes(hash)) {
    state.activeTab = hash;
  }
  
  // Render initial datasets
  renderLodging();
  renderRestaurants();
  renderDayPlans();
  renderActivities();
  renderShopping();
  
  // Initialize UI components
  initTabs();
  startCountdown();
  initLucide();
});

// Helper to safely run lucide icons
function initLucide() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

/* ========================================================
   TAB NAVIGATION SYSTEM
   ======================================================== */
function initTabs() {
  openTab(state.activeTab, false);
}

function openTab(tabId, updateHash = true) {
  state.activeTab = tabId;
  
  // Update nav buttons
  const navBtns = document.querySelectorAll('.nav-tab-btn');
  navBtns.forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
      // Ensure the active tab is scrolled into view on mobile
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    } else {
      btn.classList.remove('active');
    }
  });

  // Update tab panels
  const panels = document.querySelectorAll('.tab-panel');
  panels.forEach(panel => {
    if (panel.id === `tab-${tabId}`) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });

  if (updateHash) {
    history.replaceState(null, null, `#${tabId}`);
    // On mobile, scroll gently to the top of the main container when switching tabs
    const mainEl = document.querySelector('main');
    if (mainEl && window.innerWidth < 768) {
      const topOffset = mainEl.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  }

  initLucide();
}

/* ========================================================
   COUNTDOWN TIMER
   ======================================================== */
function startCountdown() {
  const targetDate = new Date(siteData.partyInfo.targetDate || '2026-10-10T18:30:00').getTime();

  function update() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      const cdDays = document.getElementById('cdDays');
      const cdHours = document.getElementById('cdHours');
      const cdMinutes = document.getElementById('cdMinutes');
      const cdSeconds = document.getElementById('cdSeconds');

      if (cdDays) cdDays.textContent = String(days).padStart(2, '0');
      if (cdHours) cdHours.textContent = String(hours).padStart(2, '0');
      if (cdMinutes) cdMinutes.textContent = String(minutes).padStart(2, '0');
      if (cdSeconds) cdSeconds.textContent = String(seconds).padStart(2, '0');
    } else {
      const timerContainer = document.getElementById('countdownTimer');
      if (timerContainer) {
        timerContainer.innerHTML = `
          <div class="text-gold-300 font-serif text-xl sm:text-2xl font-bold py-2">
            🎉 Today is Cicely's Big Day! Let's Celebrate! 🎉
          </div>
        `;
      }
    }
  }

  update();
  setInterval(update, 1000);
}

/* ========================================================
   RENDER: RECOMMENDED LODGING & HOTELS
   ======================================================== */
function renderLodging() {
  const container = document.getElementById('lodgingCardsGrid');
  if (!container) return;

  container.innerHTML = siteData.lodgingList.map(hotel => {
    const phoneClean = hotel.phone.replace(/[^0-9]/g, '');
    const mapQuery = encodeURIComponent(`${hotel.name} ${hotel.address}`);
    const isSpecial = hotel.specialRecognition !== "Recommended";
    
    return `
      <div class="luxury-card p-5 sm:p-6 flex flex-col justify-between ${hotel.overallPick ? 'border-cranberry-500/60 shadow-lg shadow-cranberry-900/30' : ''}">
        <div>
          <div class="flex items-start justify-between gap-2 mb-3">
            <span class="${hotel.overallPick || hotel.luxuryPick ? 'badge-cranberry' : (isSpecial ? 'badge-gold' : 'badge-dark')} text-[10px]">
              ${hotel.specialRecognition}
            </span>
            <span class="text-xs font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-0.5 rounded-full shrink-0">
              Avg: ${hotel.avgRate}
            </span>
          </div>

          <h3 class="font-serif text-lg sm:text-xl font-bold text-white mb-2">${hotel.id}. ${hotel.name}</h3>
          
          <div class="space-y-1.5 text-xs text-slate-300 mb-3.5">
            <div class="flex items-start gap-2">
              <i data-lucide="map-pin" class="w-4 h-4 text-cranberry-400 shrink-0 mt-0.5"></i>
              <span class="leading-snug">${hotel.address}</span>
            </div>
            <div class="flex items-center gap-2">
              <i data-lucide="phone" class="w-4 h-4 text-gold-400 shrink-0"></i>
              <a href="tel:${phoneClean}" class="hover:text-gold-400 font-medium">${hotel.phone}</a>
            </div>
          </div>

          <!-- Highlight -->
          <p class="text-xs text-slate-300 mb-3.5 italic leading-relaxed">
            "${hotel.highlight}"
          </p>

          <!-- Amenities -->
          <div class="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1.5 text-xs text-slate-400 mb-4">
            <div class="font-semibold text-slate-300 text-[10px] uppercase tracking-wider mb-1">Key Amenities:</div>
            ${hotel.amenities.map(a => `
              <div class="flex items-center gap-1.5">
                <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400 shrink-0"></i>
                <span class="text-[11px] sm:text-xs">${a}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pt-3.5 border-t border-white/10 flex items-center justify-between gap-2">
          <a href="tel:${phoneClean}" class="btn-ghost text-xs py-2 px-3 flex-1 justify-center">
            <i data-lucide="phone-call" class="w-3.5 h-3.5"></i> Call
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noopener" class="btn-gold text-xs py-2 px-3 flex-1 justify-center">
            <i data-lucide="navigation" class="w-3.5 h-3.5"></i> Maps
          </a>
        </div>
      </div>
    `;
  }).join('');
}

/* ========================================================
   RENDER & FILTER: RESTAURANTS DIRECTORY
   ======================================================== */
function setRestaurantCity(city, el) {
  state.restaurantCity = city;
  el.parentElement.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderRestaurants();
}

function setRestaurantMeal(meal, el) {
  state.restaurantMeal = meal;
  el.parentElement.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderRestaurants();
}

function filterRestaurants() {
  const searchInput = document.getElementById('restaurantSearchInput');
  const clearBtn = document.getElementById('clearRestaurantSearch');
  const val = searchInput ? searchInput.value : '';
  state.restaurantQuery = val.toLowerCase().trim();
  
  if (clearBtn) {
    if (val.length > 0) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }
  }

  renderRestaurants();
}

function clearRestaurantSearch() {
  const searchInput = document.getElementById('restaurantSearchInput');
  if (searchInput) searchInput.value = '';
  filterRestaurants();
}

function resetRestaurantFilters() {
  state.restaurantCity = 'all';
  state.restaurantMeal = 'all';
  state.restaurantQuery = '';

  const searchInput = document.getElementById('restaurantSearchInput');
  if (searchInput) searchInput.value = '';
  
  const clearBtn = document.getElementById('clearRestaurantSearch');
  if (clearBtn) clearBtn.classList.add('hidden');

  document.querySelectorAll('#tab-restaurants .filter-chip').forEach(c => {
    if (c.dataset.city === 'all' || c.dataset.meal === 'all') {
      c.classList.add('active');
    } else {
      c.classList.remove('active');
    }
  });

  renderRestaurants();
}

function renderRestaurants() {
  const grid = document.getElementById('restaurantsGrid');
  const countEl = document.getElementById('restaurantResultsCount');
  if (!grid) return;

  const filtered = siteData.restaurants.filter(item => {
    const matchCity = state.restaurantCity === 'all' || item.city.toLowerCase() === state.restaurantCity.toLowerCase();
    const matchMeal = state.restaurantMeal === 'all' || item.meal.toLowerCase() === state.restaurantMeal.toLowerCase();
    const matchQuery = !state.restaurantQuery || 
      item.name.toLowerCase().includes(state.restaurantQuery) ||
      item.type.toLowerCase().includes(state.restaurantQuery) ||
      item.city.toLowerCase().includes(state.restaurantQuery) ||
      item.notes.toLowerCase().includes(state.restaurantQuery) ||
      item.estFor4.toLowerCase().includes(state.restaurantQuery);

    return matchCity && matchMeal && matchQuery;
  });

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${siteData.restaurants.length} restaurants`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12 glass-panel p-6">
        <i data-lucide="utensils" class="w-10 h-10 text-slate-500 mx-auto mb-3"></i>
        <h4 class="font-serif text-lg text-white font-bold mb-1">No Restaurants Found</h4>
        <p class="text-xs text-slate-400 mb-4">Try changing your search term or filter category.</p>
        <button onclick="resetRestaurantFilters()" class="btn-gold text-xs py-2 px-4">Reset Filters</button>
      </div>
    `;
    initLucide();
    return;
  }

  grid.innerHTML = filtered.map(r => {
    const mapQuery = encodeURIComponent(`${r.name} ${r.address}`);
    const phoneClean = r.phone ? r.phone.replace(/[^0-9]/g, '') : '';
    
    return `
      <div class="luxury-card p-5 flex flex-col justify-between">
        <div>
          <!-- Tags Header -->
          <div class="flex items-center justify-between gap-2 mb-2.5">
            <span class="badge-cranberry text-[10px]">${r.city} • ${r.meal}</span>
            <span class="text-[11px] font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-full shrink-0">
              4: ${r.estFor4}
            </span>
          </div>

          <h3 class="font-serif text-base sm:text-lg font-bold text-white mb-1 leading-snug">${r.name}</h3>
          <div class="text-xs font-medium text-gold-300 mb-2.5">${r.type}</div>

          <p class="text-xs text-slate-400 mb-3.5 leading-relaxed">${r.notes}</p>

          <div class="space-y-1.5 text-xs text-slate-300 mb-4">
            <div class="flex items-start gap-2">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5"></i>
              <span class="truncate">${r.address}</span>
            </div>
            ${r.phone ? `
              <div class="flex items-center gap-2">
                <i data-lucide="phone" class="w-3.5 h-3.5 text-gold-400 shrink-0"></i>
                <a href="tel:${phoneClean}" class="hover:text-gold-400 font-medium">${r.phone}</a>
              </div>
            ` : ''}
          </div>
        </div>

        <div class="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
          ${r.phone ? `
            <a href="tel:${phoneClean}" class="btn-ghost text-xs py-1.5 px-3 flex-1 justify-center">
              <i data-lucide="phone-call" class="w-3 h-3"></i> Call
            </a>
          ` : '<div class="flex-1"></div>'}
          <a href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noopener" class="btn-gold text-xs py-1.5 px-3 flex-1 justify-center">
            <i data-lucide="navigation" class="w-3 h-3"></i> Maps
          </a>
        </div>
      </div>
    `;
  }).join('');

  initLucide();
}

/* ========================================================
   RENDER: DAY PLANS & ENTERTAINMENT
   ======================================================== */
function renderDayPlans() {
  const container = document.getElementById('dayPlansGrid');
  if (!container) return;

  container.innerHTML = siteData.familyDayPlans.map(plan => `
    <div class="luxury-card p-5 sm:p-6 border-gold-500/20 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 text-gold-400 mb-2">
          <i data-lucide="${plan.icon || 'compass'}" class="w-5 h-5 shrink-0"></i>
          <span class="text-[11px] sm:text-xs uppercase tracking-wider font-bold">Suggested Itinerary</span>
        </div>
        <h4 class="font-serif text-lg sm:text-xl font-bold text-white mb-1">${plan.title}</h4>
        <p class="text-xs text-gold-300/80 mb-3 italic">Best for: ${plan.bestFor}</p>

        <ol class="space-y-2 text-xs text-slate-300">
          ${plan.stops.map((stop, idx) => `
            <li class="flex items-start gap-2">
              <span class="w-5 h-5 rounded-full bg-gold-500/20 text-gold-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">${idx + 1}</span>
              <span class="leading-snug">${stop}</span>
            </li>
          `).join('')}
        </ol>
      </div>
    </div>
  `).join('');
}

function renderActivities() {
  const grid = document.getElementById('activitiesGrid');
  if (!grid) return;

  grid.innerHTML = siteData.entertainmentList.map(act => {
    const mapQuery = encodeURIComponent(`${act.name} ${act.address}`);
    return `
      <div class="luxury-card flex flex-col justify-between overflow-hidden">
        ${act.image ? `
          <div class="card-img-header">
            <img src="${act.image}" alt="${act.name}" loading="lazy" />
            <div class="card-img-overlay"></div>
            <div class="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
              <span class="badge-cranberry text-[10px]">${act.category}</span>
              <span class="text-[10px] text-gold-300 font-semibold bg-black/60 px-2 py-0.5 rounded-full border border-white/10">${act.ages}</span>
            </div>
          </div>
        ` : ''}

        <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
          <div>
            ${!act.image ? `
              <div class="flex items-start justify-between gap-2 mb-2">
                <span class="badge-cranberry text-[10px]">${act.category}</span>
                <span class="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded">${act.ages}</span>
              </div>
            ` : ''}

            <h3 class="font-serif text-base sm:text-lg font-bold text-white mb-2 leading-snug">${act.name}</h3>
            
            <p class="text-xs text-slate-400 mb-3.5 leading-relaxed">${act.notes}</p>

            <div class="space-y-1.5 text-xs text-slate-300 mb-4">
              <div class="flex items-start gap-2">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-cranberry-400 shrink-0 mt-0.5"></i>
                <span class="truncate">${act.address}</span>
              </div>
              ${act.phone ? `
                <div class="flex items-center gap-2">
                  <i data-lucide="phone" class="w-3.5 h-3.5 text-gold-400 shrink-0"></i>
                  <a href="tel:${act.phone.replace(/[^0-9]/g, '')}" class="hover:text-gold-400 font-medium">${act.phone}</a>
                </div>
              ` : ''}
            </div>
          </div>

          <div class="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
            <a href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noopener" class="btn-ghost text-xs py-1.5 px-3 flex-1 justify-center">
              <i data-lucide="navigation" class="w-3 h-3"></i> Map
            </a>
            <a href="${act.website}" target="_blank" rel="noopener" class="btn-gold text-xs py-1.5 px-3 flex-1 justify-center">
              <span>Tickets / Info</span>
              <i data-lucide="external-link" class="w-3 h-3"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  initLucide();
}

/* ========================================================
   RENDER: SHOPPING CENTERS
   ======================================================== */
function setShoppingCity(city, el) {
  state.shoppingCity = city;
  el.parentElement.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderShopping();
}

function renderShopping() {
  const grid = document.getElementById('shoppingGrid');
  if (!grid) return;

  const filtered = siteData.shoppingCenters.filter(item => {
    return state.shoppingCity === 'all' || item.city.toLowerCase() === state.shoppingCity.toLowerCase();
  });

  grid.innerHTML = filtered.map(shop => `
    <div class="luxury-card flex flex-col justify-between overflow-hidden">
      ${shop.image ? `
        <div class="card-img-header">
          <img src="${shop.image}" alt="${shop.name}" loading="lazy" />
          <div class="card-img-overlay"></div>
          <div class="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            <span class="badge-cranberry text-[10px]">${shop.city}</span>
            <span class="text-[10px] text-gold-300 font-semibold bg-black/60 px-2.5 py-0.5 rounded-full border border-white/10">${shop.storesCount}</span>
          </div>
        </div>
      ` : ''}

      <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          ${!shop.image ? `
            <div class="flex items-start justify-between gap-2 mb-2">
              <span class="badge-cranberry text-[10px]">${shop.city}</span>
              <span class="text-[10px] text-gold-300 font-semibold">${shop.storesCount}</span>
            </div>
          ` : ''}

          <h3 class="font-serif text-lg sm:text-xl font-bold text-white mb-1 leading-snug">${shop.name}</h3>
          <div class="text-xs text-gold-400/90 font-medium mb-3">${shop.type}</div>

          <p class="text-xs text-slate-300 mb-3.5 leading-relaxed">${shop.description}</p>

          <div class="p-3 rounded-xl bg-black/40 border border-white/5 text-xs mb-3.5">
            <div class="font-semibold text-slate-300 mb-1 text-[10px] uppercase tracking-wider">Key Highlights / Anchors:</div>
            <div class="text-slate-400 text-xs">${shop.anchorStores}</div>
          </div>

          <div class="flex items-start gap-2 text-xs text-slate-400 mb-4">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-cranberry-400 shrink-0 mt-0.5"></i>
            <span class="leading-snug">${shop.address}</span>
          </div>
        </div>

        <div class="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
          <a href="${shop.mapUrl}" target="_blank" rel="noopener" class="btn-ghost text-xs py-1.5 px-3 flex-1 justify-center">
            <i data-lucide="navigation" class="w-3 h-3"></i> Directions
          </a>
          <a href="${shop.website}" target="_blank" rel="noopener" class="btn-gold text-xs py-1.5 px-3 flex-1 justify-center">
            <span>Website</span>
            <i data-lucide="external-link" class="w-3 h-3"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');

  initLucide();
}

/* ========================================================
   CALENDAR EXPORT HELPER (ICS & GOOGLE CALENDAR)
   ======================================================== */
function downloadCalendarInvite() {
  const title = "Cicely's 80th Birthday Celebration";
  const description = "Cicely's 80th Birthday Celebration! Attire: Dress to Impress in ALL BLACK. Venue: The White Room, 2227 W Park Row Dr, Pantego, TX 76013.";
  const location = "The White Room, 2227 W Park Row Dr, Pantego, TX 76013";
  const start = "20261010T183000";
  const end = "20261010T223000";

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Cicely 80th Birthday Celebration//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
DTSTART;TZID=America/Chicago:${start}
DTEND;TZID=America/Chicago:${end}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "Cicelys_80th_Birthday_Celebration.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

/* ========================================================
   CLIPBOARD & QUICK COPY HELPER
   ======================================================== */
function copyToClipboard(text, label = 'Copied to clipboard!') {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(label);
    }).catch(() => {
      fallbackCopy(text, label);
    });
  } else {
    fallbackCopy(text, label);
  }
}

function fallbackCopy(text, label) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(label);
  } catch (err) {
    console.error('Unable to copy', err);
  }
  document.body.removeChild(textArea);
}

function showToast(message) {
  let toast = document.getElementById('quickToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'quickToast';
    toast.className = 'fixed bottom-20 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#1c0d15] text-gold-300 border border-gold-500/50 shadow-2xl px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all duration-300 opacity-0 pointer-events-none transform translate-y-4';
    document.body.appendChild(toast);
  }
  
  toast.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i> <span>${message}</span>`;
  initLucide();

  // Trigger animation
  toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
  }, 2400);
}
