# turducken

1. Team Name: Chums
2. Team Members:
* Haley
* Cynthia
* Mark
* Stephanie
3. Pitch:

4. Domain Modeling ~ Objects:
* User
- Name - first: string
- Name - last: string
- User ID: string  // Stretch
- Username: string (for turducken account)
- Email: string   // Stretch
** Password: string
** Image: string(url)
** SM Accounts: [strings]
** Impaired Mode: boolean // Stretch: lock out of accounts by pre-set time

* Accounts
** Social Media Site: string
** Username (for each social media account): string
** Password: string

* Posts
** Time Stamp: string
** Content: string  // Stretch: array to allow both imgs and text
** Author
** Associated Social Media accounts
** isImpairedOn ~ function () {check if impaired mode is on}

