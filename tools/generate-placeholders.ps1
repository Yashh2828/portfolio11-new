$root = "c:\Users\Yash Sinha\Desktop\Projects\Projects\front end\portfolio"
$projectsDir = Join-Path $root "public\images\projects"
$certsDir = Join-Path $root "public\images\certifications"

New-Item -ItemType Directory -Force -Path $projectsDir, $certsDir | Out-Null
Add-Type -AssemblyName System.Drawing

function New-PlaceholderPng {
    param(
        [string]$Path,
        [string]$Title,
        [string]$Subtitle,
        [int]$Width = 1200,
        [int]$Height = 800,
        [string]$ColorA = "#0F172A",
        [string]$ColorB = "#2563EB"
    )

    $bmp = New-Object System.Drawing.Bitmap $Width, $Height
    $graphics = [System.Drawing.Graphics]::FromImage($bmp)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

    $rect = New-Object System.Drawing.Rectangle 0, 0, $Width, $Height
    $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        $rect,
        [System.Drawing.ColorTranslator]::FromHtml($ColorA),
        [System.Drawing.ColorTranslator]::FromHtml($ColorB),
        45
    )
    $graphics.FillRectangle($brush, $rect)

    $overlayBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(40, 255, 255, 255))
    $graphics.FillEllipse($overlayBrush, -150, -100, 500, 500)
    $graphics.FillEllipse($overlayBrush, $Width - 350, $Height - 320, 500, 500)

    $titleFont = New-Object System.Drawing.Font("Segoe UI", 54, [System.Drawing.FontStyle]::Bold)
    $subtitleFont = New-Object System.Drawing.Font("Segoe UI", 28, [System.Drawing.FontStyle]::Regular)
    $titleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $subtitleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(220, 255, 255, 255))

    $titleSize = $graphics.MeasureString($Title, $titleFont)
    $subtitleSize = $graphics.MeasureString($Subtitle, $subtitleFont)
    $xTitle = [math]::Round(($Width - $titleSize.Width) / 2)
    $yTitle = [math]::Round(($Height - $titleSize.Height) / 2) - 30
    $xSubtitle = [math]::Round(($Width - $subtitleSize.Width) / 2)
    $ySubtitle = $yTitle + $titleSize.Height + 24

    $graphics.DrawString($Title, $titleFont, $titleBrush, $xTitle, $yTitle)
    $graphics.DrawString($Subtitle, $subtitleFont, $subtitleBrush, $xSubtitle, $ySubtitle)

    $graphics.Dispose()
    $brush.Dispose()
    $overlayBrush.Dispose()
    $titleFont.Dispose()
    $subtitleFont.Dispose()
    $titleBrush.Dispose()
    $subtitleBrush.Dispose()
    $bmp.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
}

New-PlaceholderPng -Path (Join-Path $projectsDir "project-1.png") -Title "E-Commerce Platform" -Subtitle "Placeholder Image" -ColorA "#0F172A" -ColorB "#1D4ED8"
New-PlaceholderPng -Path (Join-Path $projectsDir "project-3.png") -Title "AI Content Generator" -Subtitle "Placeholder Image" -ColorA "#111827" -ColorB "#7C3AED"
New-PlaceholderPng -Path (Join-Path $projectsDir "project-4.png") -Title "Fitness Tracking Dashboard" -Subtitle "Placeholder Image" -ColorA "#052E16" -ColorB "#16A34A"
New-PlaceholderPng -Path (Join-Path $projectsDir "project-5.png") -Title "Real Estate Platform" -Subtitle "Placeholder Image" -ColorA "#3F1D0A" -ColorB "#EA580C"
New-PlaceholderPng -Path (Join-Path $projectsDir "project-6.png") -Title "Portfolio Template" -Subtitle "Placeholder Image" -ColorA "#1E1B4B" -ColorB "#6366F1"
New-PlaceholderPng -Path (Join-Path $certsDir "gcp-dev.png") -Title "Google Cloud" -Subtitle "Professional Cloud Developer" -Width 900 -Height 900 -ColorA "#0F172A" -ColorB "#0EA5E9"
New-PlaceholderPng -Path (Join-Path $certsDir "meta-fe.png") -Title "Meta" -Subtitle "Front-End Developer" -Width 900 -Height 900 -ColorA "#111827" -ColorB "#14B8A6"
New-PlaceholderPng -Path (Join-Path $certsDir "mongodb.png") -Title "MongoDB" -Subtitle "Certified Developer" -Width 900 -Height 900 -ColorA "#052E16" -ColorB "#22C55E"

Write-Host "Created placeholder PNGs."