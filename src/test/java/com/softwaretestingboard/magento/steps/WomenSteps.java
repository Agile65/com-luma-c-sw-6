package com.softwaretestingboard.magento.steps;

import com.softwaretestingboard.magento.pages.HomePage;
import com.softwaretestingboard.magento.pages.WomenPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class WomenSteps {
    @Given("^I am on the homepage$")
    public void iAmOnTheHomepage() {
    }

    @And("^I hover on women menu$")
    public void iHoverOnWomenMenu() {
        new HomePage().mouseHoverToWomenMenu();
    }

    @And("^I hover on tops$")
    public void iHoverOnTops() {
        new HomePage().mouseHoverToWomenTops();
    }

    @And("^I click on jackets$")
    public void iClickOnJackets() {
        new HomePage().clickOnJackets();
    }

    @And("^I select on sort by filter product name$")
    public void iSelectOnSortByFilterProductName() {
        new WomenPage().selectSortByFilterProductName();
    }

    @Then("^the product name display in alphabetical order$")
    public void theProductNameDisplayInAlphabeticalOrder() {
        new WomenPage().verifyProductsNameAlphabeticalOrder();
    }

    @And("^I select on sort by filter price$")
    public void iSelectOnSortByFilterPrice() {
        new WomenPage().selectSortByFilterPrice();
    }

    @Then("^the product price display in low to high$")
    public void theProductPriceDisplayInLowToHigh() {
        new WomenPage().verifyProductsPriceLowToHigh();
    }
}
