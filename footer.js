var myFooterPrototype = Object.create(HTMLElement.prototype);

myFooterPrototype.createdCallback = function() {
    let t = document.querySelector('my-footer');
    
    t.innerHTML = `
        <hr>
        Thank you for using the EMDR Treatment app. Please remember this app is not a replacement for actual medical treatment - if you think you would benefit from further treatment, please pursue it. <br>
    `;
};

addLoadEvent(function() {
    var myHeader = document.registerElement('my-footer', {prototype: myFooterPrototype});
});