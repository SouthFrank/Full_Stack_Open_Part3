# Part 3: Programming a Server with NodeJS and Express
- This section was added to its own dedicated git repository, with source code right at the root of the repository, to avoid future complications with later stages of Part 3.

## Exercise 3.1
- Implement a Node application that returns a hardcoded list of phonebook entries from the address http://localhost:3001/api/persons.

Status: *completed*

## Exercise 3.2
- Implement a page at the address http://localhost:3001/info that looks roughly like the presented image.
- The page has to show the time that request was received and how many entries are in the phonebook at the time of processing the request.
- There can only be one response.send() statement in an Express app route. Once you send a response to the client using response.send(), the request-response cycle is complete and not further can be sent.
- To include a line space in the output, use <br/> tag, or wrap the statements in <p> tags.

Status: *completed*

## Exercise 3.3
- Implement the functionality for displaying the information for a single phonebook entry. The url for getting the data for a person with the id 5 should be http://localhost:3001/api/persons/5
- If an entry for the given id is not found, the server has to respond with the appropriate status code.

Status: *completed*

## Exercise 3.4
- Implement functionality that makes it possible to delete a single phonebook entry by making an HTTP DELETE request to the unique URL of that phonebook entry.
- Test that your functionality works with either Postman or the VS Code REST client.

Status: *completed*

## Exercise 3.5
- Expand the backend so that new phonebook entries can be added by making HTTP POST request to the address http://localhost:3001/api/persons
- Generate a new id for the phonebook entry with the Math.random function. Use a big enough range for your random values so that the likelihood of creating duplicate ids is small

Status: *completed*

## Exercise 3.6
- Implement error handling for creating new entries. The request is not allowed to succeed, if:
    - The name or number is missing
    - The name already exists in the phonebook
- Respond to requests like these with the appropriate status code, and also send back information that explains the reason for the error.

Status: *completed*
