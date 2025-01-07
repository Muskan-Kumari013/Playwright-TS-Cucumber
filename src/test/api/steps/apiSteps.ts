import { Given, When, Then, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { APIRequestContext, expect, request as playwrightRequest } from '@playwright/test';
import * as fs from 'fs';

let apiUrl: string;
let userid: string;
let request: APIRequestContext;
let response: any;
let config: any;

// Load config data from config.json
BeforeAll(async () =>{
    config = JSON.parse(fs.readFileSync('src/test/api/config/apiConfig.json', 'utf8'));
    apiUrl = config.api_url;
    // Initialize the request context for API requests
    request = await playwrightRequest.newContext();
    //let apiConfigData = JSON.parse(fs.readFileSync('src/test/api/config/apiConfig.json', 'utf8'));
});

AfterAll(async () => {
    // Cleanup after all tests are done
    await request.dispose();
});

Given('I send a GET request to the {string} endpoint', async function (endpoint: string) {
    // Replace placeholder with the actual URL from config file
    const url = `${apiUrl}?page=2`;
    response = await request.get(url);
});

Then('the response status should be {int}', function (expectedStatus: number) {
    expect(response.status()).toBe(expectedStatus);
});

Given('I send a POST request to the {string} endpoint with valid user data', async function (endpoint: string) {
    const url = apiUrl;
    const userData = config.create_user_data;

    response = await request.post(url, {
        data: userData,
        headers: { "Accept": "application/json" },
    });

    const res = await response.json();
    userid = res.id; // Save user ID for future steps
});

Then('I should save the user ID', function () {
    // Make sure the user ID was saved
    expect(userid).toBeDefined(); // This ensures that the user ID has been saved after POST
});

Given('I send a PUT request to the {string} endpoint with valid user data and a valid user ID', async function (endpoint: string) {
    if (!userid) {
        throw new Error('User ID is not defined');
    }

    const url = `${apiUrl}/${userid}`;
    const updatedData = { name: "kumari_update", job: "training_update" };

    response = await request.put(url, {
        data: updatedData,
        headers: { "Accept": "application/json" },
    });
});

Given('I send a DELETE request to the {string} endpoint with a valid user ID', async function (endpoint: string) {
    if (!userid) {
        throw new Error('User ID is not defined');
    }

    const url = `${apiUrl}/${userid}`;
    response = await request.delete(url);
});
