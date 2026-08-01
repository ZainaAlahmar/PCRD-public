$files = Get-ChildItem -Path src -Recurse -Include "*.tsx","*.ts"

foreach ($file in $files) {
    $content = Get-Content $file.FullName

    # Backgrounds
    $content = $content -replace 'bg-slate-50\b', 'bg-white'
    $content = $content -replace 'bg-neutral-50\b', 'bg-white'
    $content = $content -replace 'bg-neutral-100\b', 'bg-[#f4f4f4]'
    $content = $content -replace 'bg-neutral-800\b', 'bg-[#1a1a1a]'
    $content = $content -replace 'bg-neutral-700\b', 'bg-[#2a2a2a]'
    $content = $content -replace 'bg-neutral-600\b', 'bg-[#3a3a3a]'

    # Borders
    $content = $content -replace 'border-slate-100\b', 'border-[#0D0D0D]/10'
    $content = $content -replace 'border-slate-200\b', 'border-[#0D0D0D]/20'
    $content = $content -replace 'border-neutral-100\b', 'border-[#0D0D0D]/10'
    $content = $content -replace 'border-neutral-200\b', 'border-[#0D0D0D]/20'
    $content = $content -replace 'border-neutral-300\b', 'border-[#0D0D0D]/30'

    # Text - Slate (mostly dark text)
    $content = $content -replace 'text-slate-400\b', 'text-[#0D0D0D]/50'
    $content = $content -replace 'text-slate-500\b', 'text-[#0D0D0D]/60'
    $content = $content -replace 'text-slate-600\b', 'text-[#0D0D0D]/70'
    $content = $content -replace 'text-slate-700\b', 'text-[#0D0D0D]/80'
    $content = $content -replace 'text-slate-900\b', 'text-[#0D0D0D]'

    # Text - Neutral (mostly light text used on dark backgrounds before)
    $content = $content -replace 'text-neutral-100\b', 'text-white/80'
    $content = $content -replace 'text-neutral-200\b', 'text-white/70'
    $content = $content -replace 'text-neutral-300\b', 'text-white/60'
    $content = $content -replace 'text-neutral-400\b', 'text-white/50'

    # Any remaining blues that got missed
    $content = $content -replace 'bg-blue-950\b', 'bg-[#0D0D0D]'
    $content = $content -replace 'bg-blue-900\b', 'bg-[#0D0D0D]'
    $content = $content -replace 'bg-blue-800\b', 'bg-[#1a1a1a]'
    $content = $content -replace 'bg-blue-700\b', 'bg-[#2a2a2a]'
    $content = $content -replace 'bg-blue-600\b', 'bg-[#3a3a3a]'
    $content = $content -replace 'bg-blue-50\b', 'bg-white'
    
    $content = $content -replace 'text-blue-950\b', 'text-[#0D0D0D]'
    $content = $content -replace 'text-blue-900\b', 'text-[#0D0D0D]'
    $content = $content -replace 'text-blue-200\b', 'text-white/70'
    $content = $content -replace 'text-blue-100\b', 'text-white/80'

    # Update prose
    $content = $content -replace 'prose-slate\b', 'prose-neutral'

    # Clean up gradients one more time in case any missed
    $content = $content -replace 'bg-gradient-to-br from-\[#0D0D0D\] via-\[#0D0D0D\] to-\[#1a1a1a\]', 'bg-[#0D0D0D]'
    $content = $content -replace 'bg-gradient-to-br from-\[#0D0D0D\] to-\[#1a1a1a\]', 'bg-[#0D0D0D]'
    $content = $content -replace 'bg-gradient-to-br from-\[#0D0D0D\] to-neutral-800', 'bg-[#0D0D0D]'
    $content = $content -replace 'bg-gradient-to-br from-\[#0D0D0D\] to-neutral-700', 'bg-[#0D0D0D]'

    Set-Content $file.FullName -Value $content
}

Write-Host "Color cleanup complete"
