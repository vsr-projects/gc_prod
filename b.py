# fix_paths.py
"""
Rewrites <img src="assets/OLD_NAME"> in all src/components/*.html
to the correct new paths under assets/, based on your Asset Dictionary.
Run with: python fix_paths.py
"""

import re
from pathlib import Path

# 1. Define your mapping: old base filename -> new relative asset path under assets/
MAPPING = {
    # Hero icons & background
    'hero-bg.png':                         'hero-bg.png',
    'imps.svg':                            'icons/imps.svg',
    'upi.svg':                             'icons/upi.svg',
    'bbps.svg':                            'icons/bbps.svg',
    'qr.svg':                              'icons/qr.svg',
    'web.svg':                             'icons/web.svg',

    # About
    'about-illustration.png':              'about-illustration.png',

    # Services
    'prepaid-cards.svg':                   'our-services/prepaid_cards.png',
    'api-developer.svg':                   'our-services/api_for_developers.png',
    'merchant-acq.svg':                    'our-services/merchant_aquisition_platform.png',
    'payout-links.svg':                    'our-services/gencash_payout_links.png',
    'payment-collection.svg':              'our-services/payment_collection.png',

    # Benefits
    'secure.svg':                          'benefits/increasedefficiency.svg',
    'instant.svg':                         'benefits/improvecashflowmanagement.svg',
    'support.svg':                         'benefits/reducemanualwork.svg',

    # Testimonials (logos)
    'logo1.svg':                           'logo1.png',
    'logo2.svg':                           'logo2.png',
    'logo3.svg':                           'logo3.png',
    'logo4.svg':                           'logo3.png',  # if you only have 3 logos
    'logo5.svg':                           'logo3.png',  # fallback to same

    # Clientle logos
    'IDFC-logo-website.svg':               'clientle/IDFC-logo-website.svg',
    'Kotak_Mahindra_Group_logo.svg':       'clientle/Kotak_Mahindra_Group_logo.svg',
    'Suryodaylogo_1_1_a157d376fe.webp':    'clientle/Suryodaylogo_1_1_a157d376fe.webp',
    'Sab-Paisa-small.png':                 'clientle/Sab-Paisa-small.png',
    'phonepe_logo.svg':                    'clientle/phonepe_logo.svg',

    # UPI Switch
    'test.png':                            'test.png',
    'upi-switch.svg':                      'upi-switch.gif',
    'upi-user.svg':                        'test.png',
    'upi-bank.svg':                        'our-services/npci_certified.png',

    # KYC/KYB icons
    'kyc-icon.svg':                        'solution/individualverification.svg',
    'kyb-icon.svg':                        'solution/businessverification.svg',

    # Contact
    'post_mail.png':                       'get_in_touch.png'
}

# 2. Walk through each component HTML
for html_file in Path('src/components').rglob('*.html'):
    text = html_file.read_text(encoding='utf-8')
    original = text

    # Replace any src="assets/<old>"
    for old_name, new_path in MAPPING.items():
        # build regex for src="assets/old_name"
        pattern = re.compile(rf'src=["\']assets/{re.escape(old_name)}["\']')
        replacement = f'src="assets/{new_path}"'
        text = pattern.sub(replacement, text)

    # Write back if changed
    if text != original:
        html_file.write_text(text, encoding='utf-8')
        print(f"✔ Updated {html_file}")
    else:
        print(f"- No changes in {html_file}")

print("Done. Now restart your dev server (npm start) and reload.")    
