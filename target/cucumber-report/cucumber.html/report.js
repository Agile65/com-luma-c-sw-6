$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Gear.feature");
formatter.feature({
  "line": 2,
  "name": "Verifying the gear menu tests",
  "description": "",
  "id": "verifying-the-gear-menu-tests",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5220685800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should add product successfully to shopping cart",
  "description": "",
  "id": "verifying-the-gear-menu-tests;user-should-add-product-successfully-to-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I hover on gear menu",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on bags",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Product Name ‘Overnight Duffle’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I can see the text ‘Overnight Duffle’",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "change Qty 3",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on ‘Add to Cart’ Button.",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see the text ‘You added Overnight Duffle to your shopping cart.’",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on the ‘shopping cart’ Link into message",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the product name ‘Cronus Yoga Pant’",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I can see the Qty is ‘3’",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I can see the product price \"$135.00\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "change Qty to \"5\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on ‘Update Shopping Cart’ button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the product price \"$225.00\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 103995800,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.iHoverOnGearMenu()"
});
formatter.result({
  "duration": 690179899,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.iClickOnBags()"
});
formatter.result({
  "duration": 842959401,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.iClickOnProductNameOvernightDuffle()"
});
formatter.result({
  "duration": 1063386801,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.iCanSeeTheTextOvernightDuffle()"
});
formatter.result({
  "duration": 166765399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    }
  ],
  "location": "GearSteps.changeQty(int)"
});
formatter.result({
  "duration": 153044000,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.clickOnAddToCartButton()"
});
formatter.result({
  "duration": 157881100,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.iCanSeeTheTextYouAddedOvernightDuffleToYourShoppingCart()"
});
formatter.result({
  "duration": 1516698000,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.iClickOnTheShoppingCartLinkIntoMessage()"
});
formatter.result({
  "duration": 1489398899,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.iShouldSeeTheProductNameCronusYogaPant()"
});
formatter.result({
  "duration": 119132800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 22
    }
  ],
  "location": "GearSteps.iCanSeeTheQtyIs(int)"
});
formatter.result({
  "duration": 96059500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$135.00",
      "offset": 29
    }
  ],
  "location": "GearSteps.iCanSeeTheProductPrice(String)"
});
formatter.result({
  "duration": 48226100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    }
  ],
  "location": "GearSteps.changeQtyTo(String)"
});
formatter.result({
  "duration": 178055500,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.clickOnUpdateShoppingCartButton()"
});
formatter.result({
  "duration": 70599800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$225.00",
      "offset": 32
    }
  ],
  "location": "GearSteps.iShouldSeeTheProductPrice(String)"
});
formatter.result({
  "duration": 3160945300,
  "status": "passed"
});
formatter.after({
  "duration": 795831100,
  "status": "passed"
});
formatter.uri("Men.feature");
formatter.feature({
  "line": 2,
  "name": "Verifying the Men menu tests",
  "description": "",
  "id": "verifying-the-men-menu-tests",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 2455581300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should add product successfully to shopping cart",
  "description": "",
  "id": "verifying-the-men-menu-tests;user-should-add-product-successfully-to-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I hover on men menu",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I hover on bottoms",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on pants",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I hover on product name ‘Cronus Yoga Pant’ and click on size 32",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I hover on product name ‘Cronus Yoga Pant’ and click on colour Black.",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I hover on product name ‘Cronus Yoga Pant’ and click on ‘Add To Cart’ Button.",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can see text ‘You added Cronus Yoga Pant to your shopping cart.’",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on ‘shopping cart’ Link into message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I can see the text ‘Shopping Cart.’",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I can see the product name ‘Cronus Yoga Pant’",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I can see the product size 32",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I can see the product colour ‘Black’",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 23901,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iHoverOnMenMenu()"
});
formatter.result({
  "duration": 817542800,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iHoverOnBottoms()"
});
formatter.result({
  "duration": 180336800,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iClickOnPants()"
});
formatter.result({
  "duration": 1150237999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 61
    }
  ],
  "location": "MenSteps.iHoverOnProductNameCronusYogaPantAndClickOnSize(int)"
});
formatter.result({
  "duration": 257640201,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iHoverOnProductNameCronusYogaPantAndClickOnColourBlack()"
});
formatter.result({
  "duration": 326756800,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iHoverOnProductNameCronusYogaPantAndClickOnAddToCartButton()"
});
formatter.result({
  "duration": 309975800,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iCanSeeTextYouAddedCronusYogaPantToYourShoppingCart()"
});
formatter.result({
  "duration": 1566385500,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iClickOnShoppingCartLinkIntoMessage()"
});
formatter.result({
  "duration": 2647764700,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iCanSeeTheTextShoppingCart()"
});
formatter.result({
  "duration": 39111299,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iCanSeeTheProductNameCronusYogaPant()"
});
formatter.result({
  "duration": 22953700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 27
    }
  ],
  "location": "MenSteps.iCanSeeTheProductSize(int)"
});
formatter.result({
  "duration": 23127900,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iCanSeeTheProductColourBlack()"
});
formatter.result({
  "duration": 24849699,
  "status": "passed"
});
formatter.after({
  "duration": 827092400,
  "status": "passed"
});
formatter.uri("Women.feature");
formatter.feature({
  "line": 1,
  "name": "Verifying the Women menu tests",
  "description": "",
  "id": "verifying-the-women-menu-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2704287400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify the sort by product name filter",
  "description": "",
  "id": "verifying-the-women-menu-tests;verify-the-sort-by-product-name-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@smoke"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I hover on women menu",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I hover on tops",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on jackets",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select on sort by filter product name",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the product name display in alphabetical order",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 41199,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iHoverOnWomenMenu()"
});
formatter.result({
  "duration": 711546101,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iHoverOnTops()"
});
formatter.result({
  "duration": 139640201,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iClickOnJackets()"
});
formatter.result({
  "duration": 1072346299,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iSelectOnSortByFilterProductName()"
});
formatter.result({
  "duration": 1377854000,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.theProductNameDisplayInAlphabeticalOrder()"
});
formatter.result({
  "duration": 249965000,
  "status": "passed"
});
formatter.after({
  "duration": 709743000,
  "status": "passed"
});
formatter.before({
  "duration": 3188297101,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify the sort by price filter",
  "description": "",
  "id": "verifying-the-women-menu-tests;verify-the-sort-by-price-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I hover on women menu",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I hover on tops",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on jackets",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select on sort by filter price",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the product price display in low to high",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 13100,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iHoverOnWomenMenu()"
});
formatter.result({
  "duration": 453855701,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iHoverOnTops()"
});
formatter.result({
  "duration": 167645000,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iClickOnJackets()"
});
formatter.result({
  "duration": 1160995000,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iSelectOnSortByFilterPrice()"
});
formatter.result({
  "duration": 1054025999,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.theProductPriceDisplayInLowToHigh()"
});
formatter.result({
  "duration": 236570400,
  "status": "passed"
});
formatter.after({
  "duration": 707723800,
  "status": "passed"
});
});