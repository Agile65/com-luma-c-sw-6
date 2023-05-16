package com.softwaretestingboard.magento.pages;

import com.softwaretestingboard.magento.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(css = "a[id='ui-id-4'] span:nth-child(1)")
    WebElement womenMenu;
    @CacheLookup
    @FindBy(css = "a[id='ui-id-9'] span:nth-child(1)")
    WebElement womenTops;
    @CacheLookup
    @FindBy(css = "a[id='ui-id-11'] span:nth-child(1)")
    WebElement womenJackets;
    @CacheLookup
    @FindBy(css = "li.level0.nav-3>a.level-top.ui-corner-all>span:nth-of-type(1)")
    WebElement menMenu;
    @CacheLookup
    @FindBy(css = "#ui-id-18 span")
    WebElement menBottoms;
    @CacheLookup
    @FindBy(css = "#ui-id-23 span")
    WebElement menPants;
    @CacheLookup
    @FindBy(css = "a[id='ui-id-6'] span:nth-child(2)")
    WebElement gearMenu;
    @CacheLookup
    @FindBy(css = "a[id='ui-id-25'] span")
    WebElement bags;

    public void hoverOnGearMenu() {
        mouseHoverToElement(gearMenu);
        log.info("Mouse hover to gear menu : " + gearMenu.toString());
    }

    public void clickOnBags() {
        clickOnElement(bags);
        log.info("Click on bags : " + bags.toString());
    }

    public void mouseHoverToWomenMenu() {
        mouseHoverToElement(womenMenu);
        log.info("Mouse hover to Women menu : " + womenMenu.toString());
    }

    public void mouseHoverToWomenTops(){
        mouseHoverToElement(womenTops);
        log.info("Mouse hover to Women Tops : " + womenTops.toString());
    }
    public void clickOnJackets() {
        clickOnElement(womenJackets);
        log.info("Click on Jackets : " + womenJackets.toString());
    }

    public void mouseHoverToMenMenu() {
        {
            mouseHoverToElement(menMenu);
            log.info("Mouse hover to women tops : " + menMenu.toString());
        }
        mouseHoverToElement(menMenu);
        log.info("Mouse hover to Men menu : " + menMenu.toString());
    }

    public void mouseHoverToMenTops() {
        mouseHoverToElement(menBottoms);
        log.info("Mouse hover to Men tops : " + menBottoms.toString());
    }

    public void clickOnPants() {
        clickOnElement(menPants);
        log.info("Mouse hover to Men menu : " + menPants.toString());
    }
}
