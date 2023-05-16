package com.softwaretestingboard.magento.steps;

import com.softwaretestingboard.magento.pages.GearPage;
import com.softwaretestingboard.magento.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class GearSteps {

    @And("^I hover on gear menu$")
    public void iHoverOnGearMenu() {
        new HomePage().hoverOnGearMenu();
    }

    @And("^I click on bags$")
    public void iClickOnBags() {
        new HomePage().clickOnBags();
    }

    @And("^I click on Product Name ‘Overnight Duffle’$")
    public void iClickOnProductNameOvernightDuffle() {
        new GearPage().clickOnOvernightDuffle();
    }

    @Then("^I can see the text ‘Overnight Duffle’$")
    public void iCanSeeTheTextOvernightDuffle() {
        Assert.assertEquals(new GearPage().getTextOvernightDuffle(),"Overnight Duffle","Error");
    }

    @And("^change Qty (\\d+)$")
    public void changeQty(int qty) {
        new GearPage().changeQuantity();
    }

    @And("^click on ‘Add to Cart’ Button\\.$")
    public void clickOnAddToCartButton() {
        new GearPage().clickOnAddToCartButton();
    }

    @Then("^I can see the text ‘You added Overnight Duffle to your shopping cart\\.’$")
    public void iCanSeeTheTextYouAddedOvernightDuffleToYourShoppingCart() {
        Assert.assertEquals(new GearPage().gettextaddedDuffle(),"You added Overnight Duffle to your shopping cart.","Error");
    }

    @And("^I click on the ‘shopping cart’ Link into message$")
    public void iClickOnTheShoppingCartLinkIntoMessage() {
        new GearPage().clickOnShoppingCartLink();
    }

    @Then("^I should see the product name ‘Cronus Yoga Pant’$")
    public void iShouldSeeTheProductNameCronusYogaPant() {
        Assert.assertEquals(new GearPage().gettextCronusYogaPant(),"Overnight Duffle","Error");
    }

    @Then("^I can see the Qty is ‘(\\d+)’$")
    public void iCanSeeTheQtyIs(int qty) {
        Assert.assertEquals(new GearPage().getTextQuantity3(),String.valueOf(qty),"Error");
    }

    @Then("^I can see the product price \"([^\"]*)\"$")
    public void iCanSeeTheProductPrice(String price) {
        Assert.assertEquals(new GearPage().getTextProductPrice(),price,"Error");
    }

    @And("^change Qty to \"([^\"]*)\"$")
    public void changeQtyTo(String qty5)  {
        new GearPage().changeQuantityTo5();
    }

    @And("^click on ‘Update Shopping Cart’ button$")
    public void clickOnUpdateShoppingCartButton() {
        new GearPage().clickOnUpdateShoppingCartButton();
    }

    @Then("^I should see the product price \"([^\"]*)\"$")
    public void iShouldSeeTheProductPrice(String arg0)  {
        Assert.assertEquals(new GearPage().getTextProductPrice225(),"$225.00","Error");
    }

}
