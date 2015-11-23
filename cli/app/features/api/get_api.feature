Feature: Create API

  As Administration
  I want to get an API from Gateway

  Background:
    Given API Gateway Admin is available

  Scenario Outline: Successful Get API
    When I call to get <name>
    Then I receive an api with <name>

    Examples:
      | name     |
      | google |
