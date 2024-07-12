document.getElementById('vehicleForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const formData = new FormData(this);
    const formDataObj = Object.fromEntries(formData.entries());
  
    try {
      const response = await fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObj),
      });
  
      if (response.ok) {
        alert('Details submitted successfully!');
        this.reset();
      } else {
        alert('Failed to submit details');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit details');
    }
  });
  












  document.getElementById('vehicleForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const brand = document.getElementById('brand').value;
    const chassis = document.getElementById('chassis').value;

    const response = await fetch('/addVehicle', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, address, brand, chassis })
    });

    const result = await response.json();
    alert('Vehicle added successfully');
    document.getElementById('vehicleForm').reset();
});

document.getElementById('viewVehicles').addEventListener('click', async () => {
    const response = await fetch('/getVehicles');
    const vehicles = await response.json();
    const vehicleList = document.getElementById('vehicleList');
    vehicleList.innerHTML = '';
    vehicles.forEach(vehicle => {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${vehicle.name}, Email: ${vehicle.email}, Phone: ${vehicle.phone}, Address: ${vehicle.address}, Brand: ${vehicle.brand}, Chassis: ${vehicle.chassis}`;
        vehicleList.appendChild(listItem);
    });
});
