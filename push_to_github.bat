@echo off
echo Git configuration और GitHub push process शुरू हो रहा है...

echo.
echo Git user name set कर रहे हैं...
git config --global user.name "tivra258-png"

echo.
echo Git user email set कर रहे हैं...
git config --global user.email "tivra258-png@gmail.com"

echo.
echo Git repository initialize कर रहे हैं...
git init

echo.
echo सभी files को Git में add कर रहे हैं...
git add .

echo.
echo Code को commit कर रहे हैं...
git commit -m "Initial commit - API Project"

echo.
echo Main branch set कर रहे हैं...
git branch -M main

echo.
echo GitHub remote add कर रहे हैं...
git remote add origin https://github.com/tivra258-png/Api.git

echo.
echo Code को GitHub में push कर रहे हैं...
git push -u origin main

echo.
echo Process complete! आपका code GitHub पर push हो गया है।
echo Repository URL: https://github.com/tivra258-png/Api.git
pause
