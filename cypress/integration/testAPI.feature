Feature: CRUD API Testing

    Feature This is feature in for the CRUD API Testing

    Scenario Outline: Create new author
        When User sends the HTTP POST request
        Then User receives the valid HTTP response <code> for <alias>
        Then User receives the newly created author data
        Examples:
            | code |  | alias           |
            | 201  |  | "@CreateAuthor" |
    Scenario Outline: Get all the author list
        When User sends the HTTP GET request
        Then User receives the valid HTTP response <code> for <alias>
        Then Get the list of authors
        Examples:
            | code |  | alias     |
            | 200  |  | "@Author" |
    Scenario Outline: Get author by id
        When User sends the HTTP GET request with id
        Then User receives the valid HTTP response <code> for <alias>
        Then User receives the data of author based on the given id
        Examples:
            | code |  | alias     |
            | 200  |  | "@Author" |
    Scenario Outline: Update the author data
        When User sends the HTTP PUT request
        Then User receives the valid HTTP response <code> for <alias>
        Then User receives the newly updated author data
        Examples:
            | code |  | alias           |
            | 200  |  | "@UpdateAuthor" |
    Scenario Outline: delete the author
        When User sends the HTTP DELETE request
        Then User receives the valid HTTP response <code> for <alias>
        Then User receives the true in response
        Examples:
            | code |  | alias           |
            | 200  |  | "@DeleteAuthor" |