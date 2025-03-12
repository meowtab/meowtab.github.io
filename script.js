document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");
    const categoryLinks = document.querySelectorAll(".category h2 a");
    const categoryLinksTwo = document.querySelectorAll(".category h2");
    const categoryList = document.querySelectorAll(".category ul li a");
    const headerTitle = document.querySelector(".header h1");
    const searchButton = document.querySelector(".search-bar button");


    function showTab(tabId, updateUrl = true) {
        // Hide all tab contents
        tabContents.forEach(content => content.classList.remove("active"));

        // Show the selected tab
        document.getElementById(tabId).classList.add("active");

        // Change category link colors based on active tab
        categoryList.forEach(link => link.style.color = "#787878");
        const containers = document.querySelectorAll(".category");
		containers.forEach(container => container.style.backgroundImage = 'linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)), url("textures/tile-paper.png")');
        if (tabId === "book-tab") {
            categoryLinks.forEach(link => link.style.color = "#412a06");
            categoryLinksTwo.forEach(link => link.style.color = "#412a06");
            searchButton.style.backgroundColor = "#907145";
            categoryList.forEach(link => link.style.color = "#765635");
            const containers = document.querySelectorAll(".category");
			containers.forEach(container => container.style.backgroundImage = 'linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)), url("textures/tile-leather.png")');
            headerTitle.textContent = "BOOKS";
        } else if (tabId === "comic-tab") {
            categoryLinks.forEach(link => link.style.color = "#6a67ad");
            categoryLinksTwo.forEach(link => link.style.color = "#6a67ad");
            searchButton.style.backgroundColor = "#6a67ad";
            headerTitle.textContent = "COMICS";
        } else if (tabId === "blog-tab") {
            categoryLinks.forEach(link => link.style.color = "#568ec7");
            categoryLinksTwo.forEach(link => link.style.color = "#568ec7");
            searchButton.style.backgroundColor = "#568ec7";
            headerTitle.textContent = "BLOGS";
        } else if (tabId === "media-tab") {
            categoryLinks.forEach(link => link.style.color = "#bd3a3b");
            categoryLinksTwo.forEach(link => link.style.color = "#bd3a3b");
            searchButton.style.backgroundColor = "#bd3a3b";
            headerTitle.textContent = "SOCIAL MEDIA";
        } else if (tabId === "shopping-tab") {
            categoryLinks.forEach(link => link.style.color = "#be4292");
            categoryLinksTwo.forEach(link => link.style.color = "#be4292");
            searchButton.style.backgroundColor = "#be4292";
            headerTitle.textContent = "SHOPPING";
        } else if (tabId === "kemetic-tab") {
            categoryLinks.forEach(link => link.style.color = "#74544b");
            categoryLinksTwo.forEach(link => link.style.color = "#74544b");
            searchButton.style.backgroundColor = "#74544b";
            const containers = document.querySelectorAll(".category");
            headerTitle.textContent = "KEMETIC";
        } else {
            categoryLinks.forEach(link => link.style.color = "#454544");
            categoryLinksTwo.forEach(link => link.style.color = "#454544");
            categoryList.forEach(link => link.style.color = "#787878");
            searchButton.style.backgroundColor = "#454544";
            headerTitle.textContent = "WELCOME";
        }

        // Update the URL without refreshing
        if (updateUrl) {
            history.pushState(null, "", `#${tabId}`);
        }
    }

    // Add event listeners to tabs
    tabs.forEach(tab => {
        tab.addEventListener("click", function (event) {
            event.preventDefault();
            const tabId = tab.getAttribute("data-tab");
            showTab(tabId);
        });
    });

    // Load correct tab from URL on page load
    const hash = window.location.hash.substring(1); // Get hash without #
    if (hash && document.getElementById(hash)) {
        showTab(hash, false); // Do not update URL on initial load
    } else {
        showTab("home-tab", false); // Default to Home tab
    }

    // Handle back/forward navigation
    window.addEventListener("popstate", function () {
        const hash = window.location.hash.substring(1);
        if (hash && document.getElementById(hash)) {
            showTab(hash, false);
        }
    });
});
