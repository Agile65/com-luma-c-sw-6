package com.softwaretestingboard.magento.steps;

import com.softwaretestingboard.magento.pages.HomePage;
import com.softwaretestingboard.magento.pages.MenPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class MenSteps {

    @And("^I hover on men menu$")
    public void iHoverOnMenMenu() {
        new HomePage().mouseHoverToMenMenu();
    }

    @And("^I hover on bottoms$")
    public void iHoverOnBottoms() {
        new HomePage().mouseHoverToMenTops();
    }

    @And("^I click on pants$")
    public void iClickOnPants() {
        new HomePage().clickOnPants();
    }

    @And("^I hover on product name ‘Cronus Yoga Pant’ and click on size (\\d+)$")
    public void iHoverOnProductNameCronusYogaPantAndClickOnSize(int arg0) {
        new MenPage().hoverAndClickProduct();
    }

    @And("^I hover on product name ‘Cronus Yoga Pant’ and click on colour Black\\.$")
    public void iHoverOnProductNameCronusYogaPantAndClickOnColourBlack() {
        new MenPage().hoverAndClickProductColour();
    }

    @And("^I hover on product name ‘Cronus Yoga Pant’ and click on ‘Add To Cart’ Button\\.$")
    public void iHoverOnProductNameCronusYogaPantAndClickOnAddToCartButton() {
        new MenPage().hoverAndClickOnAddToCartButton();
    }

    @Then("^I can see text ‘You added Cronus Yoga Pant to your shopping cart\\.’$")
    public void iCanSeeTextYouAddedCronusYogaPantToYourShoppingCart() {
        Assert.assertEquals(new MenPage().getTextAddedPantToShoppingCart(),"You added Cronus Yoga Pant to your shopping cart.","Error");
    }

    @And("^I click on ‘shopping cart’ Link into message$")
    public void iClickOnShoppingCartLinkIntoMessage() {
        new MenPage().clickOnShoppingCart();
    }

    @Then("^I can see the text ‘Shopping Cart\\.’$")
    public void iCanSeeTheTextShoppingCart() {
        Assert.assertEquals( new MenPage().getTextShoppingCart(),"Shopping Cart","Error");
    }

    @Then("^I can see the product name ‘Cronus Yoga Pant’$")
    public void iCanSeeTheProductNameCronusYogaPant() {
        Assert.assertEquals(new MenPage().getTextCronusYogaPant(),"Cronus Yoga Pant","Error");
    }

    @Then("^I can see the product size (\\d+)$")
    public void iCanSeeTheProductSize(int size) {
        Assert.assertEquals(new MenPage().getTextSize32(),String.valueOf(size),"Error");
    }

    @Then("^I can see the product colour ‘Black’$")
    public void iCanSeeTheProductColourBlack() {
        Assert.assertEquals(new MenPage().getTextBlack(),"Black","Error");
    }

}
