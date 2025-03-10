document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");
    const categoryLinks = document.querySelectorAll(".category h2 a");
    const categoryLinksTwo = document.querySelectorAll(".category h2");
    const headerTitle = document.querySelector(".header h1");
    const categoryList = document.querySelectorAll(".category ul li a");


    function showTab(tabId, updateUrl = true) {
        // Hide all tab contents
        tabContents.forEach(content => content.classList.remove("active"));

        // Show the selected tab
        document.getElementById(tabId).classList.add("active");

        // Change category link colors based on active tab
        if (tabId === "book-tab") {
            categoryLinks.forEach(link => link.style.color = "#794e3b");
            categoryLinksTwo.forEach(link => link.style.color = "#794e3b");
            categoryList.forEach(link => link.style.color = "#794e3b");
            const containers = document.querySelectorAll(".category");
			containers.forEach(container => container.style.backgroundImage = 'url("bg-textures/tile-leather.png")');
            headerTitle.textContent = "BOOKS";
        } else if (tabId === "comic-tab") {
            categoryLinks.forEach(link => link.style.color = "#6a67ad");
            categoryLinksTwo.forEach(link => link.style.color = "#6a67ad");
            categoryList.forEach(link => link.style.color = "#787878");
            const containers = document.querySelectorAll(".category");
			containers.forEach(container => container.style.backgroundImage = 'url("bg-textures/tile-papergray.png")');
            headerTitle.textContent = "COMICS";
        } else {
            categoryLinks.forEach(link => link.style.color = "#bf3d3e");
            categoryLinksTwo.forEach(link => link.style.color = "#bf3d3e");
            categoryList.forEach(link => link.style.color = "#787878");
            const containers = document.querySelectorAll(".category");
			containers.forEach(container => container.style.backgroundImage = 'url("bg-textures/tile-paper.png")');
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
