displayHome();

let bagItems = [];
function addTobag(itemId) {
  bagItems.push(itemId);
  displayBagicon();
}
function displayBagicon() {
  let bagitemcount = document.querySelector(".bagitem-count");
  bagitemcount.innerText = bagItems.length;
}

function displayHome() {
  let itemscontainerElement = document.querySelector(".items-container");
  let innerHtml = "";

  items.forEach((item) => {
    innerHtml += `<div class="item-container">
    <img class="item-image" src=${item.image} alt="" />
    <div class="rating">${item.rating.stars} ⭐ | ${item.rating.count}</div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
      <span class="current-price">RS ${item.current_price}</span>
      <span class="original-price">RS ${item.original_price}</span>
      <span class="discount">(${item.discount_price} % OFF)</span>
    </div>
    <button class="btn-add-bag" onClick="addTobag(${item.id})">Add to Bag</button>
  </div>`;
  });
  itemscontainerElement.innerHTML = innerHtml;
}
