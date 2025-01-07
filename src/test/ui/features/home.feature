@ui
Feature: Polarstar Home Page

@lambdaTest
Scenario: Verify the page title
Given I navigate to the configurated URL
Then I verify the title matches the configured value
