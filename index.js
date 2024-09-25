 const apiUrl = 'https://fakestoreapi.com/products';

    let description = document.querySelector(".description");
// console.log(description);


fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        // Assuming you have a container element in your HTML where you'll add the products
        const container = document.querySelector('.product-list'); 

        data.forEach(item => {
            // Create a new div for each item
            const itemDiv = document.createElement('div');
            itemDiv.className = 'product-item';

            const img = document.createElement("img")
            img.setAttribute("src", item.image)
            // Create and populate elements for title, description, and price
            const title = document.createElement('h4');
            title.innerText = item.title.slice(0, 10);

            const description = document.createElement('p');
            description.innerText = item.description.slice(0, 50)

            const price = document.createElement('p');
            price.innerText = `Price: $${item.price}`;

            // Append the elements to the itemDiv
            itemDiv.appendChild(img)
            itemDiv.appendChild(title);
            itemDiv.appendChild(description);
            itemDiv.appendChild(price);

            // Append the itemDiv to the container
            container.appendChild(itemDiv);
        });
    })
    .catch(err => console.log(err));
