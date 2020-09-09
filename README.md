# loginpage
Inlämningsuppgiften "Skapa en inloggningssida"

När programmet startas så körs följande:

Om användaren är inloggad
	Vi tömmer mainplaceholder inner html
	Vi sätter in inloggad vyn
Annars
	Vi tömmer mainplaceholder inner html
	Vi sätter in inloggning vyn

Om användaren inte är inloggad så kan hen försöka logga in.

Om användaren har angett korrekt användarnamn och lösenord
	Vi sätter in en bool variabel håller koll ifall användaren är inloggad eller inte, till true, i local storage.
	Vi tömmer mainplaceholder inner html
	Vi sätter in inloggad vyn
Om inte
	Vi tömmer mainplaceholder inner html
	Vi sätter in försökigen vyn.

I inloggad vyn så kan användaren klicka på logga ut:
	Vi tömmer mainplaceholder inner html
	Då töms localstorage (tar bort bool variabeln)
	Vi sätter in inloggning vyn

I försökigen vyn så kan användaren klicka på försök igen:
	Vi tömmer mainplaceholder inner html
	Vi sätter in inloggning vyn