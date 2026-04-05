$ErrorActionPreference = "Stop"

Add-Type -AssemblyName PresentationCore

$videoPath = "C:\Users\Turjoy\Desktop\05.04.2026_01.19.04_REC.mp4"
$outputPath = "C:\Users\Turjoy\Desktop\Job_project_Goal\tmp_services_frame.png"

$player = New-Object System.Windows.Media.MediaPlayer
$opened = $false
$failed = $false

Register-ObjectEvent -InputObject $player -EventName MediaOpened -Action {
  $script:opened = $true
} | Out-Null

Register-ObjectEvent -InputObject $player -EventName MediaFailed -Action {
  $script:failed = $true
} | Out-Null

$player.Open([Uri]$videoPath)

for ($i = 0; $i -lt 60 -and -not $opened -and -not $failed; $i++) {
  Start-Sleep -Milliseconds 100
}

Write-Output "OPENED=$opened FAILED=$failed"

$player.Position = [TimeSpan]::FromMilliseconds(500)
Start-Sleep -Milliseconds 700

$width = $player.NaturalVideoWidth
$height = $player.NaturalVideoHeight

Write-Output "SIZE=$width x $height"

if ($width -gt 0 -and $height -gt 0) {
  $drawingVisual = New-Object System.Windows.Media.DrawingVisual
  $drawingContext = $drawingVisual.RenderOpen()
  $drawingContext.DrawVideo(
    $player,
    (New-Object System.Windows.Rect 0, 0, $width, $height)
  )
  $drawingContext.Close()

  $bitmap = New-Object System.Windows.Media.Imaging.RenderTargetBitmap(
    $width,
    $height,
    96,
    96,
    [System.Windows.Media.PixelFormats]::Pbgra32
  )
  $bitmap.Render($drawingVisual)

  $encoder = New-Object System.Windows.Media.Imaging.PngBitmapEncoder
  $encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($bitmap))

  $stream = [System.IO.File]::Open($outputPath, [System.IO.FileMode]::Create)
  $encoder.Save($stream)
  $stream.Close()

  Write-Output "FRAME_SAVED=$outputPath"
}

$player.Close()
