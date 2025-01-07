@api
Feature: User API operations

Scenario: Get users
    Given I send a GET request to the "api_url" endpoint
    Then the response status should be 200

Scenario: Create a new user
    Given I send a POST request to the "api_url" endpoint with valid user data
    Then the response status should be 201
    And I should save the user ID

Scenario: Update an existing user
    Given I send a PUT request to the "api_url" endpoint with valid user data and a valid user ID
    Then the response status should be 200

Scenario: Delete a user
    Given I send a DELETE request to the "api_url" endpoint with a valid user ID
    Then the response status should be 204
