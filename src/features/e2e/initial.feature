Feature: Access the Webdriver IO website

Scenario: Validate the site title

Given I access the "Webdriver IO" website
When the page is loaded
Then I should see the page title equals to "WebdriverIO - WebDriver bindings for Node.js"