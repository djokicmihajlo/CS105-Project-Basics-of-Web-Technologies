


const hamburgerButton = document.getElementById("hamburger-button");
const navLinks = document.getElementById("nav-links");
let visible = false;

const toggleNav = () => {
  visible = !visible;
  if (visible === false) {
    navLinks.style.display = "block";
  } else {
    navLinks.style.display = "none";
  }
};

hamburgerButton.addEventListener("click", toggleNav);
//Kontakt

const nameInput = document.getElementById("input-name");
const lastNameInput = document.getElementById("input-lastname");
const phoneInput = document.getElementById("input-phone");
const typeInput = document.getElementById("input-type");
const titleInput = document.getElementById("input-title");
const messageInput = document.getElementById("input-message");
const formSubmitBtn = document.getElementById("form-submit");

const nameError = document.getElementById("name-error-span");
const lastNameError = document.getElementById("lastname-error-span");
const phoneError = document.getElementById("phone-error-span");
const typeError = document.getElementById("type-error-span");
const titleError = document.getElementById("title-error-span");
const messageError = document.getElementById("message-error-span");

const contactInputDataSection = document.getElementById("contact-input-data");
const contactInputDataTable = document.getElementById(
  "contact-input-data-table"
);

const hasSpaces = (string) => {
  if (string.includes(" ")) {
    return true; //ako ima space vraca true
  } else {
    return false;
  }
};

const hasNumbers = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(string[i])) {
      return true; //alo ima broj vraca true u suprotnom false
    }
  }
  return false;
};

const phoneValidityChecker = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (i === 0 && string[i] === "+") {
      continue;
    }
    if (isNaN(string[i])) {
      // ako string nije broj return false
      return false;
    }
  }
  return true;
};

const FormSubmitHandler = (event) => {
  event.preventDefault();
  nameError.innerHTML = "";
  lastNameError.innerHTML = "";
  phoneError.innerHTML = "";
  typeError.innerHTML = "";
  titleError.innerHTML = "";
  messageError.innerHTML = "";
  if (
    hasSpaces(nameInput.value) == true || //
    hasNumbers(nameInput.value) == true || //
    hasSpaces(lastNameInput.value) == true || //
    hasNumbers(lastNameInput.value) == true || //
    phoneValidityChecker(phoneInput.value) == false || //
    messageInput.value.length < 1 || //
    messageInput.value.length > 500 || //
    nameInput.value == "" || //
    lastNameInput.value == "" || //
    phoneInput.value == "" || //
    typeInput.value == "" ||
    titleInput.value == ""
  ) {
    if (
      hasSpaces(nameInput.value) == true ||
      hasNumbers(nameInput.value) == true ||
      nameInput.value == ""
    ) {
      nameError.innerHTML =
        "Ime ne sme da ima razmake,da sadrži brojeve ili da bude prazno!";
    }
    if (
      hasSpaces(lastNameInput.value) == true ||
      hasNumbers(lastNameInput.value) == true ||
      lastNameInput.value == ""
    ) {
      lastNameError.innerHTML =
        "Prezime ne sme da ima razmake,da sadrži brojeve ili da bude prazno!";
    }
    if (
      phoneValidityChecker(phoneInput.value) == false ||
      phoneInput.value == ""
    ) {
      phoneError.innerHTML =
        "Broj telefona može da sadrži samo brojeve i '+' kao prvi karakter!";
    }
    if (messageInput.value.length < 1 || messageInput.value.length > 500) {
      messageError.innerHTML =
        "Poruka ne sme da bude prazna ili duža od 500 karaktera!";
    }
    if (typeInput.value == "") {
      typeError.innerHTML = "Izaberite tip poruke!";
    }
    if (titleInput.value == "") {
      titleError.innerHTML = "Naslov poruke ne sme da bude prazan!";
    }
  } else {
    contactInputDataSection.style.display = "block";
    //
    const tableRow = document.createElement("tr");
    contactInputDataTable.appendChild(tableRow);
    //
    const tableCellName = document.createElement("td");
    tableCellName.innerHTML = nameInput.value;
    tableRow.appendChild(tableCellName);
    //
    const tableCellLastName = document.createElement("td");
    tableCellLastName.innerHTML = lastNameInput.value;
    tableRow.appendChild(tableCellLastName);
    //
    const tableCellPhone = document.createElement("td");
    tableCellPhone.innerHTML = phoneInput.value;
    tableRow.appendChild(tableCellPhone);
    //
    const tableCellType = document.createElement("td");
    tableCellType.innerHTML = typeInput.value;
    tableRow.appendChild(tableCellType);
    //
    const titleCellType = document.createElement("td");
    titleCellType.innerHTML = titleInput.value;
    tableRow.appendChild(titleCellType);
    //
    const messageCellType = document.createElement("td");
    messageCellType.innerHTML = messageInput.value;
    tableRow.appendChild(messageCellType);
  }
};
//DEMO
const websiteOptions = document.getElementById("website-options");
const ecomOptions = document.getElementById("ecom-options");
const websitePagesInput = document.getElementById("web-pages");
const websiteSectionsInput = document.getElementById("web-sections");
const ecomPagesInput = document.getElementById("ecom-pages");
const ecomProductsInput = document.getElementById("ecom-products");
const costDiv = document.getElementById("cost-div");
const demoContact = document.getElementById("demo-contact");
demoContact.style.display = "none";

const handleServiceChange = () => {
  const selectedValue = document.getElementById("service-select").value;

  if (selectedValue === "web") {
    websiteOptions.style.display = "block";
    ecomOptions.style.display = "none";
    costDiv.innerHTML = "";
  } else if (selectedValue === "ecom") {
    ecomOptions.style.display = "block";
    websiteOptions.style.display = "none";
    costDiv.innerHTML = "";
  }
};

const calculateCostWeb = () => {
  let costResult = 0;
  let pagesCost = 0;
  let sectionsCost = 0;
  if (websitePagesInput.value == 1 && websiteSectionsInput.value == 4) {
    costResult = 1000;
  } else {
    if (websitePagesInput.value > 1) {
      pagesCost = (websitePagesInput.value - 1) * 400;
    }
    if (websiteSectionsInput.value > 4) {
      sectionsCost = (websiteSectionsInput.value - 4) * 200;
    }
    costResult = 1000 + pagesCost + sectionsCost;
  }

  costDiv.innerHTML = "Cena datog vebsajta bi iznosila: <b>" + costResult + "$</b>";
  demoContact.style.display = "block";
};

const calculateCostEcom = () => {
  let costResult = 0;
  let pagesCost = 0;
  let productsCost = 0;
  if (ecomPagesInput.value == 5 && ecomProductsInput.value == 20) {
    costResult = 2000;
  } else {
    if (ecomPagesInput.value > 5) {
      pagesCost = (ecomPagesInput.value - 5) * 500;
    }
    if (ecomProductsInput.value > 20) {
      productsCost = (ecomProductsInput.value - 20) * 25;
    }
    costResult = 2000 + pagesCost + productsCost;
  }

  costDiv.innerHTML =
    "Cena date E-commerce platforme bi iznosila: <b>" + costResult + "$</b>";
  demoContact.style.display = "block";
};


