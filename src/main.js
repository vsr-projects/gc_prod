// src/main.js
import { initHeroAnimation }            from "./components/hero/hero.js";
import { initServicesAnimation }        from "./components/services/services.js";
import { initBenefitsAnimation }        from "./components/benefits-block/benefits-block.js";
import { initUpiSwitchAnimation }       from "./components/upi-switch/upi-switch.js";
import { initKycAnimation }             from "./components/kyc/kyc.js";
import { initClientsLogosAnimation }    from "./components/clients-logos/clients-logos.js";
import { initTestimonialsAnimation }    from "./components/testimonials/testimonials.js";
import { initStatsCountersAnimation }   from "./components/stats-counters/stats-counters.js";
import {
  initContactFormAnimation,
  initContactFormSubmit
} from "./components/contact-form/contact-form.js";
import { initFooter }                   from "./components/footer/footer.js";

document.addEventListener("DOMContentLoaded", () => {
  initHeroAnimation();
  initServicesAnimation();
  initBenefitsAnimation();
  initUpiSwitchAnimation();
  initKycAnimation();
  initClientsLogosAnimation();
  initTestimonialsAnimation();
  initStatsCountersAnimation();
  initContactFormAnimation();
  initContactFormSubmit();
  initFooter();
});
