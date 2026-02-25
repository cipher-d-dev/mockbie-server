@echo off
set /p commitMessage="Enter commit message: "
call npm run build
git add .
git commit -m "%commitMessage%"
git push -u origin main