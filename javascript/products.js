function openModal(title, image, description, price) {
    document.getElementById('modalTitle').innerHTML = title;
    document.getElementById('modalImage').src = image;
    document.getElementById('modalDescription').innerHTML = description;
    document.getElementById('modalPrice').innerHTML = price;
    document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}