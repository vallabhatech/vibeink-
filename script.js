
        function goToGallery() {
            const username = document.getElementById("username").value;
            if (username.trim() === "") {
                document.getElementById("usernameError").style.display = "block";
            } else {
                document.getElementById("usernameError").style.display = "none";
                document.getElementById("entryPage").style.display = "none";
                document.getElementById("galleryPage").style.display = "block";
                document.getElementById("greeting").textContent = "Hello, " + username + "!";
                document.getElementById("userImage").src = "https://www.gravatar.com/avatar/" + username.hashCode();
            }
        }

        function goBack() {
            document.getElementById("galleryPage").style.display = "none";
            document.getElementById("entryPage").style.display = "block";
        }

        function goToGenreSelection() {
            document.getElementById("galleryPage").style.display = "none";
            document.getElementById("genreSelectionPage").style.display = "block";
        }

        function goBackToGallery() {
            document.getElementById("genreSelectionPage").style.display = "none";
            document.getElementById("galleryPage").style.display = "block";
        }

        function submitGenres() {
            const fantasyChecked = document.getElementById("fantasy").checked;
            const comedyChecked = document.getElementById("comedy").checked;
            const romanceChecked = document.getElementById("romance").checked;
            const thrillerChecked = document.getElementById("thriller").checked;
            const actionChecked = document.getElementById("action").checked;
            const dramaChecked = document.getElementById("drama").checked;

            if (fantasyChecked) {
                document.getElementById("fantasyPage").style.display = "block";
                document.getElementById("genreSelectionPage").style.display = "none";
            } else if (comedyChecked) {
                document.getElementById("comedyPage").style.display = "block";
                document.getElementById("genreSelectionPage").style.display = "none";
            } else if (romanceChecked) {
                document.getElementById("romancePage").style.display = "block";
                document.getElementById("genreSelectionPage").style.display = "none";
            } else if (thrillerChecked) {
                document.getElementById("thrillerPage").style.display = "block";
                document.getElementById("genreSelectionPage").style.display = "none";
            } else if (actionChecked) {
                document.getElementById("actionPage").style.display = "block";
                document.getElementById("genreSelectionPage").style.display = "none";
            } else if (dramaChecked) {
                document.getElementById("dramaPage").style.display = "block";
                document.getElementById("genreSelectionPage").style.display = "none";
            } else {
                alert("Please select a genre.");
            }
        }

        function goBackToGenres() {
            document.getElementById("fantasyPage").style.display = "none";
            document.getElementById("comedyPage").style.display = "none";
            document.getElementById("romancePage").style.display = "none";
            document.getElementById("thrillerPage").style.display = "none";
            document.getElementById("actionPage").style.display = "none";
            document.getElementById("dramaPage").style.display = "none";
            document.getElementById("genreSelectionPage").style.display = "block";
        }
    