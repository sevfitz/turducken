# turducken

## Team Name: Chums


## Team Members:
* Haley
* Cynthia
* Mark
* Stephanie


## Pitch:
Turducken is an app that allows users to view three forms of their social media posts from one place. Users can create posts from Turducken and see them in their Turducken Dashboard as well as push these posts into their associated social media sites. 


## Domain Modeling ~ Objects:
* User
  * Name - first: string
  * Name - last: string
  * User ID: string  // Stretch
  * Username: string (for turducken account)
  * Email: string   // Stretch
  * Password: string
  * Image: string(url)
  * SM Accounts: [strings]
  * Impaired Mode: boolean // Stretch: lock out of accounts by pre  *set time

* Accounts
  * Social Media Site: string
  * Username (for each social media account): string
  * Password: string

* Posts
  * Time Stamp: string
  * Content: string  // Stretch: array to allow both imgs and text
  * Author
  * Associated Social Media accounts
  * isImpairedOn ~ function () {check if impaired mode is on}


## Pages for 201 project purposes
* Login
* Dashboard
* Fake Social Media posting/receiving page
* Turducken User Profile page // Stretch
