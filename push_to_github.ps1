Write-Host "Git configuration और GitHub push process शुरू हो रहा है..." -ForegroundColor Green

Write-Host ""
Write-Host "Git user name set कर रहे हैं..." -ForegroundColor Yellow
git config --global user.name "tivra258-png"

Write-Host ""
Write-Host "Git user email set कर रहे हैं..." -ForegroundColor Yellow
git config --global user.email "tivra258-png@gmail.com"

Write-Host ""
Write-Host "Git repository initialize कर रहे हैं..." -ForegroundColor Yellow
git init

Write-Host ""
Write-Host "सभी files को Git में add कर रहे हैं..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "Code को commit कर रहे हैं..." -ForegroundColor Yellow
git commit -m "Initial commit - API Project"

Write-Host ""
Write-Host "Main branch set कर रहे हैं..." -ForegroundColor Yellow
git branch -M main

Write-Host ""
Write-Host "GitHub remote add कर रहे हैं..." -ForegroundColor Yellow
git remote add origin https://github.com/tivra258-png/Api.git

Write-Host ""
Write-Host "Code को GitHub में push कर रहे हैं..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "Process complete! आपका code GitHub पर push हो गया है।" -ForegroundColor Green
Write-Host "Repository URL: https://github.com/tivra258-png/Api.git" -ForegroundColor Cyan
