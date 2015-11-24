Feature: Create API

  As Administration
  I want to add an API to Gateway

  Background:
    Given API Gateway Admin is available

  Scenario: Successful Create API
    When I call to create an API from file "create_api_document.json"
    Then I receive that it has been created
    And I could read it
