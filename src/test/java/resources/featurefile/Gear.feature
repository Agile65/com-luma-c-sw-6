@smoke @regression
Feature: Verifying the gear menu tests
  Scenario: User should add product successfully to shopping cart
    Given I am on the homepage
    And I hover on gear menu
    And I click on bags
    And I click on Product Name ‘Overnight Duffle’
    Then I can see the text ‘Overnight Duffle’
    And change Qty 3
    And click on ‘Add to Cart’ Button.
    Then I can see the text ‘You added Overnight Duffle to your shopping cart.’
    And I click on the ‘shopping cart’ Link into message
    Then I should see the product name ‘Cronus Yoga Pant’
    Then I can see the Qty is ‘3’
    Then I can see the product price "$135.00"
    And change Qty to "5"
    And click on ‘Update Shopping Cart’ button
    Then I should see the product price "$225.00"