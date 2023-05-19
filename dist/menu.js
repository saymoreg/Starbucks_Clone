$.getJSON("/data/dbMenu.json", function(data) {
  const drinksContainer = $("#drinksContainer");
  const foodContainer = $("#foodContainer");
  const homeCoffeeContainer = $("#homeCoffeeContainer");
  const merchandiseContainer = $("#merchandiseContainer");
  const giftCardsContainer = $("#giftCardsContainer");

  const createItemElement = function(item) {
      const imageElement = $("<img>", {
          "class": "w-24 h-24 rounded-full",
          "src": item.imageUrl
      });

      const nameElement = $("<p>", {
          "class": "mt-2 mx-6 items-center",
          "text": item.name
      });

      const itemElement = $("<div>", {
          "class": "flex flex-row items-center cursor-pointer"
      }).append(imageElement).append(nameElement);

      return itemElement;
  };

  $.each(data.drinks, function(index, drink) {
      const drinkElement = createItemElement(drink);
      drinksContainer.append(drinkElement);
  });

  $.each(data.food, function(index, food) {
      const foodElement = createItemElement(food);
      foodContainer.append(foodElement);
  });

  $.each(data.home_coffee, function(index, homeCoffee) {
      const homeCoffeeElement = createItemElement(homeCoffee);
      homeCoffeeContainer.append(homeCoffeeElement);
  });

  $.each(data.merchandise, function(index, merchandise) {
      const merchandiseElement = createItemElement(merchandise);
      merchandiseContainer.append(merchandiseElement);
  });

  $.each(data.gift_cards, function(index, giftCard) {
      const giftCardElement = createItemElement(giftCard);
      giftCardsContainer.append(giftCardElement);
  });
});
