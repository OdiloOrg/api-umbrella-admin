Feature: Get API

  As Administration
  I want to get an API from API Gateway

  Background:
    Given API Gateway Admin is available

  Scenario: Successful Get API
    Given It exists an API with name "google"
    When I call to get it
    Then I receive it
