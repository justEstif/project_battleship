- model

  - board size: based on the picture
  - number of ships: can we use the length of ships instead
  - the length of each ship (number of cells)
  - number of ships sunk = 0 initally
  - ships[]:

    - three ships and their inital positions

  - fire(guess)

    - for loop
      - go through the ships array
      - check if any ship has a location that match the guess
        - if match found:
          - if cell has already been hit: write message return
          - else: display message and image
          - return true
        - else:
          - display miss image and message
          - return false

  - isSunk(ship)
    - if all the cells have been hit, return true
  - generateShip()
    - returns a random ship object
  - collision()
    - checks if there is a ship at that location
  - generateShipLocations
    - returns an array of randomly placed ships that have been vetted with collision function

- view

  - displayMessage(msg); shows message on message area
  - displayHit(location): adds hit class
  - displayMiss(location) :adds miss class

- parseGuess(guess)
  - if guess is legal: return true
  - else: alert
- controller

  - guesses
  - process guess(guess)
    - parseGuess(guess)
      - if true: guess++ and fire(guess)

- handleFireButton()

  - get input -> uppercase -> clear input
  - pass input to processGuess(input.value)

- handleKeyPress()

  - idk

- init()
  - get fire buttion and add onClick function
  - run generateShipLocations
