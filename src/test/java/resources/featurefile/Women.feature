Feature: Verifying the Women menu tests
@smoke @regression
  Scenario: Verify the sort by product name filter
    Given I am on the homepage
    And I hover on women menu
    And I hover on tops
    And I click on jackets
    And I select on sort by filter product name
    Then the product name display in alphabetical order
@sanity @regression
    Scenario: Verify the sort by price filter
      Given I am on the homepage
      And I hover on women menu
      And I hover on tops
      And I click on jackets
      And I select on sort by filter price
      Then the product price display in low to high