export default (formElement) => { 
    let formItems = {}; 
    
    for (let i = 0; i < formElement.elements.length; i++) { 
        if (formElement.elements[i].name) { 
            formItems[formElement.elements[i].name] = formElement.elements[i].value !== 'on' 
                ? formElement.elements[i].value 
                : formElement.elements[i].checked ? 1 : 0; 
        } 
    } 

    return formItems; 
}
