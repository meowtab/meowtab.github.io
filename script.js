document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");
    const categoryLinks = document.querySelectorAll(".category h2 a");
    const categoryLinksTwo = document.querySelectorAll(".category h2");
    const categoryList = document.querySelectorAll(".category ul li a");
    const headerTitle = document.querySelector(".header h1");


    function showTab(tabId, updateUrl = true) {
        // Hide all tab contents
        tabContents.forEach(content => content.classList.remove("active"));

        // Show the selected tab
        document.getElementById(tabId).classList.add("active");

        // Change category link colors based on active tab
        if (tabId === "book-tab") {
            headerTitle.textContent = "BOOKS";
        } else if (tabId === "comic-tab") {
            headerTitle.textContent = "COMICS";
        } else if (tabId === "blog-tab") {
            headerTitle.textContent = "BLOGS";
        } else if (tabId === "media-tab") {
            headerTitle.textContent = "SOCIAL MEDIA";
        } else if (tabId === "shopping-tab") {
            headerTitle.textContent = "SHOPPING";
        } else if (tabId === "kemetic-tab") {
            headerTitle.textContent = "KEMETIC";
        } else {
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
