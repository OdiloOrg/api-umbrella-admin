Feature: Read a resource

  As Administration
  I want to read a resource from API Gateway

  Background:
    Given API Gateway CLI is available

  Scenario Outline: Successful read a resource
    Given It exists a resource "" n API with name "google"
    When I call to get "resource_type"
    Then I receive it

   Examples:
    |resource_type|resource_id|
