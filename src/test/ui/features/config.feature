@ui
Feature: Polarstar Config Page

Scenario: Configure a Polestar 3 vehicle
Given I navigate to the configurated URL
Then I select Polestar 3
Then I configure the Polestar 3
Then I continue the configuration
Then I search for a location and click on Continue