function llenarSelect(selectElement, valores, placeholder = "") {
  // Vacía el select
  selectElement.innerHTML = "";

  // Agrega la opción por defecto
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = placeholder;
  selectElement.appendChild(defaultOption);

  // Agrega cada valor único como opción
  valores.forEach((valor) => {
    const option = document.createElement("option");
    option.value = valor;
    option.textContent = valor;
    selectElement.appendChild(option);
  });
}

(async () => {
  const response = await fetch("http://localhost:8080/spareParts", {
    method: "GET",
  });

  const fabricantes = ["Zebra", "Entust", "Matica", "HID", "TSC", "Godex"];
  const categorias = [
    "Impresora de etiq.",
    "Impresora de cred.",
    "Financiera",
    "Perifericos",
    "Insumos",
  ];

  const data = await response.json();

  // Suponiendo que ya tenés estas referencias
  const filtroPN = document.getElementById("fabricante");
  const filtroMarca = document.getElementById("categoria");
  const filtroNombre = document.getElementById("disponibilidad");

  // Llenar selects
  llenarSelect(filtroPN, fabricantes, "Todos los fabricantes");
  llenarSelect(filtroMarca, categorias, "Todas las categorias");
  llenarSelect(filtroNombre, ["Sin stock","Poco stock"], "Disponible");


  const tabla = document.createElement("table");
  tabla.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Cantidad</th>
        </tr>
    `;

  data.forEach((part) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td6 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    td1.innerText = part.id;
    td6.innerText = part.marca;
    td2.innerText = part.name;
    td3.innerText = part.description;
    td4.innerText = part.price;
    td5.innerText = part.quantity;

    tr.appendChild(td1);
    tr.appendChild(td6);    
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    tabla.appendChild(tr);
  });
  document.getElementById("app").appendChild(tabla);
})();

