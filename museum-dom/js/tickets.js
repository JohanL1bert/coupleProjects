const totalPrice = document.querySelector(".amount__price");

const seniorButton = document.querySelector(".senior__group");
const seniorCount = document.querySelector(".senior__field");

const basicButton = document.querySelector(".basic__group");
const basicCount = document.querySelector(".basic__btn-field");

let numb = 0;
let inputNumberSeniour = 0;
let inputBasicNumber = 0;
let total;
let totalBasic;
let ticketType = "permanent";

const permanentEx = "permanent exhibition";
const temporaryEx = "temporary exhibition";
const combinedEx = "combined Admission";

const ticketFilter = (type) => {
  if (ticketType === "permanent" && type === "senior") {
    return 10;
  } else if (ticketType === "temporary" && type === "senior") {
    return 12.5;
  } else if (ticketType === "combined" && type === "senior") {
    return 20;
  } else if (ticketType === "permanent" && type === "basic") {
    return 20;
  } else if (ticketType === "temporary" && type === "basic") {
    return 25;
  } else {
    return 40;
  }
};

// Секция кнопки Сеньйор
const plus = seniorButton.childNodes[5];
plus.addEventListener("click", () => {
  const number = ticketFilter("senior");
  total = +totalPrice.textContent;
  total += 10;
  totalPrice.textContent = total;
  ++inputNumberSeniour;
  seniorCount.value = inputNumberSeniour;
});

const minus = seniorButton.childNodes[1];

minus.addEventListener("click", () => {
  if (seniorCount.value <= 0) return;
  const number = ticketFilter("senior");
  total = +totalPrice.textContent;
  total -= number;
  totalPrice.textContent = total;
  --inputNumberSeniour;
  seniorCount.value = inputNumberSeniour;
});

// Секция бейзик кнопки

const plusBasic = basicButton.childNodes[5];
plusBasic.addEventListener("click", () => {
  const number = ticketFilter("basic");
  totalBasic = +totalPrice.textContent;
  totalBasic += number;
  totalPrice.textContent = totalBasic;
  ++inputBasicNumber;
  basicCount.value = inputBasicNumber;
});

const minusBasic = basicButton.childNodes[1];

minusBasic.addEventListener("click", () => {
  if (basicCount.value <= 0) return;
  const number = ticketFilter("basic");
  totalBasic = +totalPrice.textContent;
  totalBasic -= number;
  totalPrice.textContent = totalBasic;
  --inputBasicNumber;
  basicCount.value = inputBasicNumber;
});

const permanent = document.getElementById("permanent");
const temporary = document.getElementById("temporary");
const combined = document.getElementById("combined");

const filterTicketsType = (arr) => {
  let checkedBtn;
  arr.forEach((el) => {
    if (el.checked) checkedBtn = el;
  });
  changeValueGroup(checkedBtn);
};

const changeValueGroup = (element) => {
  if (element.value == "permanent") {
    ticketType = "permanent";
    const revert = +basicCount.value * 20 + +seniorCount.value * 10;
    totalPrice.textContent = revert;
  }
  if (element.value == "temporary") {
    ticketType = "temporary";
    const revert = +basicCount.value * 25 + +seniorCount.value * 12.5;
    totalPrice.textContent = revert;
  }
  if (element.value == "combined") {
    ticketType = "combined";
    const revert = +basicCount.value * 40 + +seniorCount.value * 20;
    totalPrice.textContent = revert;
  }
};

const getAllType = () => {
  const permanent = document.getElementById("permanent");
  const temporary = document.getElementById("temporary");
  const combined = document.getElementById("combined");
  filterTicketsType([permanent, temporary, combined]);
};

permanent.addEventListener("click", getAllType);
temporary.addEventListener("click", getAllType);
combined.addEventListener("click", getAllType);
