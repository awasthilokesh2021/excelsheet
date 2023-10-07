let activeCellElement = document.getElementById("active-cell");

let activeCell = null;

let activeOptionsState;

function cellFocus(e) {
  //console.log(e.target.id)
  activeCell = e.target;
  activeCellElement.innerText = e.target.id;

  const computeStyle = getComputedStyle(activeCell)

  activeOptionsState = {
    fontFamily: computeStyle.fontFamily ,
    isBoldSelected: computeStyle.fontWeight === "600",
    isItalicSelected: computeStyle.fontWeight === "italic",
    isUnderLineSelected: computeStyle.textDecoration === "underline",
    textAlign: computeStyle.textAlign,
    backgroundColor:computeStyle.color,
    fontSize: computeStyle.fontSize,
  };
}

function onClickBold(boldButton) {
  boldButton.classList.toggle("active-option");
  if (activeCell) {
    activeOptionsState;

    if (activeOptionsState.isBoldSelected === false) {
      activeCell.style.fontWeight = "800";
    } else {
      activeCell.style.fontWeight = "400";
    }
    activeOptionsState.isBoldSelected = !activeOptionsState.isBoldSelected;
  }
}

function onClickItelic(itelicBold) {
  itelicBold.classList.toggle("active-option");

  if (activeCell) {
    if (activeOptionsState.isItalicSelected) {
      activeCell.style.fontStyle = "normal";
    } else {
      activeCell.style.fontStyle = "italic";
    }
    activeOptionsState.isItalicSelected = !activeOptionsState.isItalicSelected;
  }
}

function onClickUnderLine(underLine) {
  underLine.classList.toggle("active-option");

  if (activeCell) {
    if (activeOptionsState.isUnderLineSelected) {
      activeCell.style.textDecoration = "none";
    } else {
      activeCell.style.textDecoration = "underline";
    }
    activeOptionsState.isUnderLineSelected =
      !activeOptionsState.isUnderLineSelected;
  }
}

function textHeightLight(textAlignValue){
    // heilight the button left
    // height the button right
    // helight the button the cenmtere 
    
    let textElements  = document.getElementsByClassName("text-align")
    
    for(let i=0;i<textElements.length;i++){
        if(textElements[i].getAttribute("data-value") == textAlignValue){
            textElements[i].classList.add("action-option")
        }
        else{
            textElements[i].classList.remove("action-option")
        }
    }
}


function onClicktextAlign(textAlignButton){
      
  let selectedvalue = textAlignButton.getAttribute("data-value")
  textHeightLight(selectedvalue)

  if(activeCell){
    activeCell.style.textAlign = selectedvalue;
    activeOptionsState.textAlign = selectedvalue
}
}


function onChangeTextColor(textColor){
    let textValue = textColor.value

    if(activeCell){
        activeCell.style.color = textValue;
        activeOptionsState.color = textValue
    }
}

function onChangeBackGroundColor(textBackGroundColor){
    let textBackgroundValue = textBackGroundColor.value

    if(activeCell){
        activeCell.style.backgroundColor = textBackgroundValue;
        activeOptionsState.backgroundColor = textBackgroundValue;
    }
}
