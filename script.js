
function searchProduct() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const Nomproducts = document.querySelectorAll('.case');

    Nomproducts.forEach(button => {
        const productName = button.getAttribute('data-name');
        if (productName.toLowerCase().includes(searchInput)) {
        button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
}
