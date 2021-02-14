let myObject;
let gridCssMarkerClass = "";
let isInitialized = false;
function preparePage(instance, cssClass) {
    if (isInitialized)
        return;
    isInitialized = true;
    myObject = instance;
    gridCssMarkerClass = cssClass;
    document.body.addEventListener("keydown", (e) => {
        if (e.key === "F2" && currentEditedInputs) {
            let index = getIndexOfEditedInputs(document.activeElement);
            if (index != -1) {
                invokeBlazorChangeEvent(currentEditedInputs[index]);
            }
        }
        if (e.key === "F2" || e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Escape") {
            myObject.invokeMethodAsync("CommandButtonClicked", e.key);
        }
    });
    document.body.addEventListener("mousedown", (e) => {
        if (!isDescendant(document.querySelector("." + gridCssMarkerClass + " .card table tbody"), e.target)) {
            myObject.invokeMethodAsync("ClickOutsideContentTable");
        }
    });
}
let currentEditedInputs;
function addNavigationHandler() {
    currentEditedInputs = document.querySelectorAll("." + gridCssMarkerClass + " .table-active input");
    for (let i = 0; i < currentEditedInputs.length; i++) {
        currentEditedInputs[i].addEventListener("keydown", (e) => {
            if (e.key === "Tab" || e.key == "Enter") {
                let index = getIndexOfEditedInputs(e.target);
                if (index == -1) return;
                if (e.shiftKey) {
                    if (index == 0) {
                        //firstInput
                        invokeBlazorChangeEvent(currentEditedInputs[index]);
                        myObject.invokeMethodAsync("MovePrevRow");
                    }
                    else {
                        currentEditedInputs[index - 1].focus();
                    }
                }
                else {
                    if (index == currentEditedInputs.length - 1) {
                        //lastInput
                        invokeBlazorChangeEvent(currentEditedInputs[index]);
                        myObject.invokeMethodAsync("MoveNextRow");
                    }
                    else {
                        currentEditedInputs[index + 1].focus();
                    }
                }
                event.preventDefault();
            }
        });
    }
    currentEditedInputs[0].focus();
}
function getIndexOfEditedInputs(el) {
    let index = -1;
    for (let i = 0; i < currentEditedInputs.length; i++) {
        if (el == currentEditedInputs[i]) {
            index = i;
        }
    }
    return index;
}
function invokeBlazorChangeEvent(element) { //For DateEdit field
    let changeEvent = new Event('change');
    element.dispatchEvent(changeEvent);
}
function isDescendant(parentElem, childElem) {
    let node = childElem;
    while (node != null) {
        if (node == parentElem) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}