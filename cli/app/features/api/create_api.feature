Feature: Create API

  As Administration
  I want to add an API to Gateway

  Background:
    Given API Gateway Admin is available

  Scenario Outline: Successful Create API
    Given I want to add <name>
    And with protocol <protocol> with frontendHost <frontendHost> with backendHost <backendHost>
    When I call to create an API
    Then I check that it has been added

    Examples:
      | name     | protocol | frontendHost   | backendHost   |
      | 'google' | 'http'   | '/google' | 'backendHost' |
