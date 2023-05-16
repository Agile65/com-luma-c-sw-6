@smoke @regression
Feature: Verifying the Men menu tests

  Scenario: User should add product successfully to shopping cart
    Given I am on the homepage
    And I hover on men menu
    And I hover on bottoms
    And I click on pants
    And I hover on product name ‘Cronus Yoga Pant’ and click on size 32
    And I hover on product name ‘Cronus Yoga Pant’ and click on colour Black.
    And I hover on product name ‘Cronus Yoga Pant’ and click on ‘Add To Cart’ Button.
    Then I can see text ‘You added Cronus Yoga Pant to your shopping cart.’
    And I click on ‘shopping cart’ Link into message
    Then I can see the text ‘Shopping Cart.’
    Then I can see the product name ‘Cronus Yoga Pant’
    Then I can see the product size 32
    Then I can see the product colour ‘Black’