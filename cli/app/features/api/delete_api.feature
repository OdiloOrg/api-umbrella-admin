Feature: Create API

  As Administration
  I want to delete an API to Gateway

  Background:
    Given API Gateway Admin is available

  Scenario Outline: Successful Get API
    When I call to delete <name>
    Then I receive that <name> has been removed

    Examples:
      | name   |
      | google |
