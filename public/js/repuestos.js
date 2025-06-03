//Obtengo los datos de la base y los cargo en la sessionStorage del navegador
(async () => {
  const response = await fetch("http://localhost:8080/spareParts", {
    method: "GET",
  });
  sessionStorage.setItem("repuestos", JSON.stringify(await response.json()));
})();

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

const renderTable = async (repuestos) => {
  const fabricantes = ["Zebra", "Entust", "Matica", "HID", "TSC", "Godex"];
  const categorias = [
    "Impresora de etiq.",
    "Impresora de cred.",
    "Financiera",
    "Perifericos",
    "Insumos",
  ];

  // Suponiendo que ya tenés estas referencias
  const filtroPN = document.getElementById("fabricante");
  const filtroMarca = document.getElementById("categoria");
  const filtroNombre = document.getElementById("disponibilidad");

  // Llenar selects
  llenarSelect(filtroPN, fabricantes, "Todos los fabricantes");
  llenarSelect(filtroMarca, categorias, "Todas las categorias");
  llenarSelect(filtroNombre, ["Sin stock", "Poco stock"], "Disponible");


  const tabla = document.createElement("table");

  // Agrega el encabezado con checkbox general
  tabla.innerHTML = `
    <tr>
        <th>Part Number</th>
        <th>Marca</th>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th><input type="checkbox" id="select-all"></th>
    </tr>
    `;

  repuestos.forEach((part, index) => {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    const td6 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const tdCheck = document.createElement("td");

    td1.innerText = part.id;
    td6.innerText = part.marca;
    td2.innerText = part.name;
    td3.innerText = part.description;
    td4.innerText = part.price;
    td5.innerText = part.quantity;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("row-checkbox");
    tdCheck.appendChild(checkbox);

    tr.appendChild(td1);
    tr.appendChild(td6);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(tdCheck);

    tabla.appendChild(tr);
  });

  document.getElementById("app").appendChild(tabla);

  // Lógica para seleccionar/deseleccionar todos
  document.getElementById("select-all").addEventListener("change", function () {
    const checkboxes = tabla.querySelectorAll(".row-checkbox");
    checkboxes.forEach((cb) => (cb.checked = this.checked));
  });
};
renderTable(JSON.parse(sessionStorage.getItem("repuestos")));

//Filtros para la tabla de repuestos

//Filtrado por datos ingresados por INPUT
const input = document.getElementById("filtroDescripcion");
let repuestosFiltrados = [];

//Con un ENTER
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let repuestos = JSON.parse(sessionStorage.getItem("repuestos"));
    repuestos.forEach((repuesto) => {
      if (
        repuesto.description
          .toLowerCase()
          .includes(input.value.toLowerCase()) ||
        repuesto.name.toLowerCase().includes(input.value.toLowerCase())
      ) {
        repuestosFiltrados.push(repuesto);
      }
    });
    document.querySelector('table').remove();
    renderTable(repuestosFiltrados);
    repuestosFiltrados = [];
  }
});
// Con desenfoque
input.addEventListener("blur", (e) => {
  let repuestos = JSON.parse(sessionStorage.getItem("repuestos"));
  repuestos.forEach((repuesto) => {
    if (
      repuesto.description.toLowerCase().includes(input.value.toLowerCase()) ||
      repuesto.name.toLowerCase().includes(input.value.toLowerCase())
    ) {
      repuestosFiltrados.push(repuesto);
    }
    
  });
  document.querySelector('table').remove();
    renderTable(repuestosFiltrados);
    repuestosFiltrados = [];
});
