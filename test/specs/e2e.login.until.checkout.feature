Feature: End-to-End Testing of Login and Checkout Flow

  Scenario: Successful Login and Checkout
    Given the user opens the application
    When the user enters the username "standard_user"
    And the user enters the password "secret_sauce"
    And the user clicks on the login button
    Then the user should be logged in successfully
    When the user selects a product
    And the user adds the product to the cart
    And the user proceeds to the checkout
    Then the user should complete the checkout successfully
