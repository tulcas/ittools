/*const copyToClipboard = (elementId) => {
    var temp = document.createElement("div");
    temp.setAttribute("contentEditable", true);
    temp.innerHTML = document.getElementById(elementId).innerHTML;
    temp.setAttribute("onfocus", "document.execCommand('selectAll',false,null)");
    document.body.appendChild(temp);
    temp.focus();
    document.execCommand("copy");
    document.body.removeChild(temp);
  };*/

  const copyToClipboard = (elementId) => {
    const text = document.getElementById(elementId).innerHTML;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log(`"${text}" was copied to clipboard.`);
      })
      .catch((err) => {
        console.error(`Error copying text to clipboard: ${err}`);
      });
  };
  