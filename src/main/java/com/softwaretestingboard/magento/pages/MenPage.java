package com.softwaretestingboard.magento.pages;

import com.softwaretestingboard.magento.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MenPage extends Utility {
        private static final Logger log = LogManager.getLogger(MenPage.class.getName());

        public MenPage() {
                PageFactory.initElements(driver, this);
        }
        @CacheLookup
        @FindBy(css=".product-item-link")
        WebElement productName;
        @CacheLookup
        @FindBy(xpath="(//div[@id='option-label-size-143-item-175'])[1]")
        WebElement size32;
        @CacheLookup
        @FindBy(css="#option-label-color-93-item-49")
        WebElement colourBlack;
        @CacheLookup
        @FindBy(css=".action.tocart.primary")
        WebElement addToCartButton;
        @CacheLookup
        @FindBy(xpath="//div[@data-bind='html: $parent.prepareMessageForHtml(message.text)']")
        WebElement addedPant;
        @CacheLookup
        @FindBy(css=".message-success.success.message div a")
        WebElement linkShoppingCart;
        @CacheLookup
        @FindBy(css="main div h1 span")
        WebElement textShoppingCart;
        @CacheLookup
        @FindBy(xpath="//td[@class='col item']//a[normalize-space()='Cronus Yoga Pant']")
        WebElement textCronusYogaPant;
        @CacheLookup
        @FindBy(css=".item-options>dd:first-of-type")
        WebElement textSize32;
        @CacheLookup
        @FindBy(css=".item-options>dd:last-of-type")
        WebElement textBlack;

        public void hoverAndClickProduct(){
                mouseHoverToElement(productName);
                clickOnElement(size32);
                log.info("Hover and click product : " + productName.toString()+" "+size32.toString());
        }
        public void hoverAndClickProductColour(){
                mouseHoverToElement(productName);
                mouseHoverToElementAndClick(colourBlack);
                log.info("Hover and click product colour : " + productName.toString()+" "+colourBlack.toString());
        }
        public void hoverAndClickOnAddToCartButton(){
                mouseHoverToElement(productName);
                mouseHoverToElementAndClick(addToCartButton);
                log.info("Hover and click product colour : " + productName.toString()+" "+addToCartButton.toString());
        }
        public String getTextAddedPantToShoppingCart(){
                log.info("Get text added pant to shopping cart " + addedPant.toString());
                return getTextFromElement(addedPant);
        }
        public void clickOnShoppingCart(){
                clickOnElement(linkShoppingCart);
                log.info("Click on shopping cart" + linkShoppingCart.toString());
        }
        public String getTextShoppingCart(){
                log.info("Get text shopping cart " + textShoppingCart.toString());
                return getTextFromElement(textShoppingCart);
        }
        public String getTextCronusYogaPant(){
                log.info("Get text cronus yoga pant " + textCronusYogaPant.toString());
                return getTextFromElement(textCronusYogaPant);
        }
        public String getTextSize32(){
                log.info("Get text size 32 " + textSize32.toString());
                return getTextFromElement(textSize32);
        }
        public String getTextBlack(){
                log.info("Get text Black " + textBlack.toString());
                return getTextFromElement(textBlack);
        }
}
