let container = document.getElementById("beds-main-cont");
let objects = [
  {
    id: "Patient ID",
    icon: "",
    number: 5321344,
  },
  {
    id: "Visit ID",
    icon: "",
    number: 2735678,
  },
  {
    id: "Ward",
    icon: "",
    number: "Ward 2A",
  },
];

function patients(each) {
  console.log(each);
  let bedsCont = document.createElement("div");
  let patentCont = document.createElement("div");
  let patentIdPara = document.createElement("p");
  let numCont = document.createElement("div");
  let icon = document.createElement("i");

  bedsCont.appendChild(patentCont);
  bedsCont.classList.add("beds-cont");
  bedsCont.appendChild(numCont);
  container.classList.add("beds-main-cont");
  container.appendChild(bedsCont);

  patentIdPara.textContent = each.id;
  patentIdPara.classList.add("id-text");

  patentCont.classList.add("patient-id");
  patentCont.appendChild(patentIdPara);

  patentCont.appendChild(icon);

  bedsCont.classList.add("number");
  numCont.textContent = each.number;
  bedsCont.appendChild(numCont);
}

for (let item in objects) {
  patients(objects[item]);
}
