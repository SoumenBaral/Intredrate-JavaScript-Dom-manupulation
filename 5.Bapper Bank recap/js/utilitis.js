function InputFieldTotal (InputField){
    const Input = document.getElementById(InputField);
    const InputConversion  = parseFloat(Input.value);
    Input.value = '';
    return InputConversion;
}

function GetElementValue(elementValue) {
    const FindElement = document.getElementById(elementValue);
    const FindElementConvert = parseFloat(FindElement.innerText) ;
    return FindElementConvert;
}

function setElementInnerText(elementId,newValue){
    const element= document.getElementById(elementId);
    element.innerText =newValue;

}