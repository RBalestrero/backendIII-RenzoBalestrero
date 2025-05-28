const funtion = async () => {
    const response = await fetch('http://localhost:8080/spareParts',{
        method: 'GET'
    });
    const data = await response.json();
    console.log(data);

    const tabla = document.createElement('table');
    tabla.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Cantidad</th>
        </tr>
    `;

    data.forEach((part) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');

        td1.innerText = part.id;
        td2.innerText = part.name;
        td3.innerText = part.description;
        td4.innerText = part.price;
        td5.innerText = part.quantity;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        tabla.appendChild(tr);
    });

    document.getElementById('app').appendChild(tabla);
}

funtion();