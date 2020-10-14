��# notesApp

The  Note app project teaches the very basics of how to work with  is a  where you can use the five known command : Read -Write -List -Delete and Edit <br/>
it is an project build on node.js  <br/>
it is based on getting data from user using command line <br/>
in order to run this project you should install nodejs on your machine from its  [official site](https://nodejs.org/en/) <br/>
### using the app<br>
1. install node js 
2. clone the project 
3. start playing with the project from terminal 
### using the commands 
1. The normal command to add note to the existing note :<br>
node index.js add --title="your Note title" --body="your note body " <br> 
after hitting enter you will get the list of all notes and a notification that new note added<br>
keep in mind you can't add two notes with the same title other wise you will get a message tell you " the note title taken "
2. To list all notes use<br> node index.js list 
3. To read a specific note you should write the title of that node :<br>  use node index.js read --title="your desired note" 
4. To delete a specific note you should write the title of that node: <br> use node index.js remove --title="your desired note" 
5. To edit a specific note you should write the title of that node and the new body of it : <br> use node index.js edit --title="your Note title" --body="your new note body " <br> 
 #### Used Package 
 1. [yargs](https://www.npmjs.com/package/yargs) - Command-line parser that automatically generates an elegant user-interface.<br>
 2.[chalk](https://www.npmjs.com/package/chalk) - for style the output in the terminal and  make it easier to understand
