// searchPDFs.js
import { samsungPDFs } from './samsung.js';
import { huaweiPDFs } from './huawei.js';
import { applePDFs } from './apple.js';

// Map brand names to their respective PDF arrays
const pdfs = {
    samsung: samsungPDFs,
    huawei: huaweiPDFs,
    apple: applePDFs,
};

// Display search results
function searchPDFs() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const brand = document.getElementById("brandSelect").value; // Updated to select from dropdown
    const resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = ""; // Clear previous results

    // Check if a brand is selected
    if (!brand) {
        resultsContainer.innerHTML = ""; // Clear results if no brand is selected
        return;
    }

    // Check if the search input is empty
    if (query.trim() === "") {
        resultsContainer.innerHTML = ""; // Clear results if the input is empty
        return;
    }

    // Get the PDFs for the selected brand
    const brandPDFs = pdfs[brand];

    // Filter PDFs based on the search query and limit to 5 results
    const results = brandPDFs.filter(pdf => pdf.name.toLowerCase().includes(query)).slice(0, 5);
    
    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
        return;
    }

    // Display results
    results.forEach(pdf => {
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = pdf.name;
        link.onclick = () => loadPDF(pdf.file); // Load the selected PDF
        resultsContainer.appendChild(link);
        resultsContainer.appendChild(document.createElement("br")); // Line break
    });
}

// Function to load PDF in viewer
function loadPDF(pdfFile) {
    const viewer = document.getElementById("pdf-js-viewer");
    viewer.src = `web/viewer.html?file=${encodeURIComponent(pdfFile)}`;
}

// Prevent form submission when pressing Enter
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default form submission
        searchPDFs(); // Call search function
    }
});

// Add event listeners to trigger search
document.getElementById("searchInput").addEventListener("input", searchPDFs);
document.getElementById("brandSelect").addEventListener("change", searchPDFs);
