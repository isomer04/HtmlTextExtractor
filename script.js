var resultCounter = 1; // Counter to keep track of the result number

function textExtract() {
  // Get the user input text
  var userInput = document.getElementById("input-text").value;

  // Strip all HTML, CSS, and JS code
  var extractedText = userInput
    .replace(/<style([\s\S]*?)<\/style>/gi, "")
    .replace(/<script([\s\S]*?)<\/script>/gi, "")
    .replace(/<\/?(?:html|head|body|meta|link)[^>]*>/gi, "")
    .replace(/(<\/?(?:p|h\d|div)[^>]*>)|(<br>)/gi, "\n$&")
    .replace(/(<([^>]+)>|&nbsp;)/gi, "");

  // Collapse consecutive newlines into a single newline
  extractedText = extractedText.replace(/\n{2,}/g, "\n\n");

  // Display the extracted text on the page
  // Display the extracted text on the page
  var extractedTextDiv = document.getElementById("extractedText");

  // Create a new list item for the extracted text
  var listItem = document.createElement("li");

  // Create a "Copy to Clipboard" button
  var copyButton = document.createElement("button");
  copyButton.innerText = "Copy to Clipboard";
  copyButton.addEventListener("click", function () {
    copyTextToClipboard(extractedText);
  });

  // Append the "Copy to Clipboard" button to the list item
  listItem.appendChild(copyButton);

  // Create a new element to display the extracted text
  var extractedTextElement = document.createElement("span");
  extractedTextElement.innerText = extractedText;

  // Append the extracted text element to the list item
  listItem.appendChild(extractedTextElement);

  // Check if there are existing results
  var existingResults = extractedTextDiv.getElementsByTagName("li");
  if (existingResults.length > 0) {
    // Insert the new list item before the first existing result
    extractedTextDiv.insertBefore(listItem, existingResults[0]);
  } else {
    // Append the new list item to the existing results
    extractedTextDiv.appendChild(listItem);
  }

  // Increment the result counter for the next result
  resultCounter++;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function copyTextToClipboard(text) {
  var tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
