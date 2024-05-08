const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
  ];
  
  // Function to perform search
  function search() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous results
  
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
  
    if (filteredProducts.length === 0) {
      searchResults.innerHTML = "<p>No results found.</p>";
    } else {
      const ul = document.createElement('ul');
      filteredProducts.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product.name;
        ul.appendChild(li);
      });
      searchResults.appendChild(ul);
    }
  }
  
  // Event listener for input change
  document.getElementById('searchInput').addEventListener('input', search);