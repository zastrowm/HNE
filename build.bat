set FIREFOX="HNEP-firefox.zip" 
set CHROMES="HNEP-chrome.zip" 

del "%FIREFOX%"
del "%CHROMES%"

"C:\Program Files\7-Zip\7z.exe" a -tzip "%FIREFOX%" * -r -xr!.git -xr!*screenshots* -xr!build.bat -xr!*notes* -xr!js/jquery-3.2.1.js -xr!%FIREFOX% -xr!%CHROMES%
"C:\Program Files\7-Zip\7z.exe" a -tzip "%CHROMES%" * -r -xr!.git -xr!*screenshots* -xr!build.bat -xr!*notes* -xr!js/jquery-3.2.1.js -xr!%FIREFOX% -xr!%CHROMES%