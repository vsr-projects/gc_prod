# Save this as scaffold.ps1, then run in your project root:
#    .\scaffold.ps1

# List out every file we want
$files = @(
  "gulpfile.js",
  "package.json",
  "src/index.html",
  "src/assets/.gitkeep",
  "src/styles/_variables.scss",
  "src/styles/_mixins.scss",
  "src/styles/main.scss",
  "src/components/hero/hero.html",
  "src/components/hero/hero.scss",
  "src/components/hero/hero.js",
  "src/components/services/services.html",
  "src/components/services/services.scss",
  "src/components/services/services.js",
  "src/components/benefits-block/benefits-block.html",
  "src/components/benefits-block/benefits-block.scss",
  "src/components/benefits-block/benefits-block.js",
  "src/components/upi-switch/upi-switch.html",
  "src/components/upi-switch/upi-switch.scss",
  "src/components/upi-switch/upi-switch.js",
  "src/components/kyc/kyc.html",
  "src/components/kyc/kyc.scss",
  "src/components/kyc/kyc.js",
  "src/components/clients-logos/clients-logos.html",
  "src/components/clients-logos/clients-logos.scss",
  "src/components/clients-logos/clients-logos.js",
  "src/components/testimonials/testimonials.html",
  "src/components/testimonials/testimonials.scss",
  "src/components/testimonials/testimonials.js",
  "src/components/stats-counters/stats-counters.html",
  "src/components/stats-counters/stats-counters.scss",
  "src/components/stats-counters/stats-counters.js",
  "src/components/contact-form/contact-form.html",
  "src/components/contact-form/contact-form.scss",
  "src/components/contact-form/contact-form.js",
  "src/components/footer/footer.html",
  "src/components/footer/footer.scss",
  "src/components/footer/footer.js"
)

foreach ($file in $files) {
    # Determine the directory portion of the path
    $dir = Split-Path $file -Parent

    # Create directory if it doesn't exist
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }

    # Create an empty file (or overwrite to clear any existing content)
    New-Item -Path $file -ItemType File -Force | Out-Null
}

Write-Host "Scaffold complete! All folders/files are in place."
