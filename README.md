## Overview
This project automation using `webdriver.io` with a `BDD` framework. The project consists of 1 scenarios:
1. E2e from login until checkout

## Setup Instructions

### Prerequisites
1. Node.js installed
2. WebdriverIO installed
3. A web browser Chrome.
4. Run 
   ```
   npm install
   ```

### Running
Execute the following command to running automation:
1. Running entire file under folder test `without` generate and open Allure-Report automatically
   ```
   npm run wdio
   ```
3. Step to execute Allure-Report manually
    - Clear directory `allure-results` (to clean all allure-results file)
      ```
      npm run clean:allure
      ```
    - Generate new `allure-results`
      ```
      npm run allure:generate
      ```
    - Open `allure-reports`
      ```
      npm run allure:open
      ```
4. Running entire file under folder test generate and open Allure-Report automatically
   ```
   npm run prepare:allure
   ```