Feature: Get API

  As Administration
  I want to get an API from API Gateway

  Background:
    Given API Gateway Admin is available

  Scenario Outline: Successful Get API
    When I call to get an API whose id is <id>
    Then I receive an api with <id> and <name>

    Examples:
      | id                                   | name |
      | 7a5f0d8e-9d92-4e92-82fa-7ef8b352d3bc | Test |
