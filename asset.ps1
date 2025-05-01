# fix-assets.ps1
# Run from your project root:
#   .\fix-assets.ps1

# 1. Locate dist/assets folder
$distAssets = Join-Path $PSScriptRoot 'dist\assets'
if (-not (Test-Path $distAssets)) {
    Write-Error "Folder not found: $distAssets"
    exit 1
}

Write-Host "Scanning $distAssets for asset files…" -ForegroundColor Cyan

# 2. Build filename → relative-path map
$assetMap = @{}
Get-ChildItem -Path $distAssets -Recurse -File | ForEach-Object {
    $name = $_.Name.ToLower()
    # relative path under assets, convert backslashes to forward
    $rel  = $_.FullName.Substring($distAssets.Length + 1) -replace '\\', '/'
    if (-not $assetMap.ContainsKey($name)) {
        $assetMap[$name] = $rel
    }
}

# 3. Regex to find src="assets/filename"
$pattern = 'src\s*=\s*"assets/([^"]+)"'
$regex   = [regex]$pattern

# 4. Update each component HTML
Get-ChildItem -Path 'src\components' -Filter '*.html' -Recurse | ForEach-Object {
    $file    = $_.FullName
    $content = Get-Content -Path $file -Raw
    $updated = $regex.Replace($content, {
        param($m)
        $fn = $m.Groups[1].Value.ToLower()
        if ($assetMap.ContainsKey($fn)) {
            $newPath = $assetMap[$fn]
            return 'src="assets/' + $newPath + '"'
        } else {
            Write-Warning "  ▶ Asset not found: $fn (left unchanged)"
            return $m.Value
        }
    })

    if ($updated -ne $content) {
        Set-Content -Path $file -Value $updated
        Write-Host "  ✔ Updated $file" -ForegroundColor Green
    } else {
        Write-Host "  - No changes in $file" -ForegroundColor DarkGray
    }
}

Write-Host "Asset paths synced!" -ForegroundColor Cyan
