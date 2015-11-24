Feature: Delete API

  As Administration
  I want to delete an API to Gateway

  Background:
    Given API Gateway Admin is available

  Scenario Outline: Successful Get API
    When I call to delete an API whose id is <id>
    Then I receive that it has been removed
    And I could not get it

    Examples:
      | id   |
      | c1df544a-e12e-4d04-b772-7e32e0023ee5 |
