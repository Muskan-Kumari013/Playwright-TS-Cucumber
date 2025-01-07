@ui
Feature: Polarstar Login Page

Scenario: Verify error message on invalid login
Given I navigate to the configurated URL
Then I clicked on the login button
Then I entered the email address
Then I entered the password
Then I clicked on login
Then I verified the error message is as expected
