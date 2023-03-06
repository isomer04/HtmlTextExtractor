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
  var extractedTextDiv = document.getElementById("extractedText");
  extractedTextDiv.innerHTML = extractedText.replace(/\n/g, "<br>");
}
