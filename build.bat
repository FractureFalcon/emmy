SETLOCAL 

SET zipFileName="EMDR HTML5 App.zip"
ECHO %zipFileName%

DEL %zipFileName%

7z a %zipFileName% *.html *.css *.js

ENDLOCAL