# Lab 8 - Starter
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
Within a Github action that runs whenever code is pushed. This is because this is the only testing method that is clearly automated out of the 3 options (the second option is manual and it is implied that running all the tests after development (3rd option) is completed is also a manual task as well)

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
No. That's what unit testing is for. E2E Testing is for emulating user interactions with the webpage

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No. The message feature likely interacts with multiple components on an application level (writing, sending, receiving, etc.) so a unit test would not be appropriate for this.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes. "max length feature" sounds like a small feature that doesn't have very many moving parts (i.e. it doesn't interact with much) so a unit test would be appropriate for it.