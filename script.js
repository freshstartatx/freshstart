
Black Lives Matter. Read our official statement here.


group-project01012

Show
script.js

var submitButton = $('.submitbutton');
​
submitButton.on('click',storeInput);
​
function storeInput()
 var userInput = $('.userInput').val();
 var commentContainer = $('.displayUserInput');
 commentContainer.append(userInput);
}
