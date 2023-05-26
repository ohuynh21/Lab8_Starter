# Lab 8 - Starter
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
Within a Github action that runs whenever code is pushed. This is because this is the only testing method that is clearly automated out of the 3 options (the second option is manual and it is implied that running all the tests after development (3rd option) is completed is also a manual task as well)

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
No. That's what unit testing is for. E2E Testing is for emulating user interactions with the webpage