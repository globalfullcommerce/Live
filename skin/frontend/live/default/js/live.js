/*WebFontConfig = {
    google: { families: [ 'PT+Sans:400,700:latin' ] }
    //google: { families: [ 'Noto+Sans:400,700:latin' ] }
    
  };
(function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();*/

/*
 * JS to products
*/
decorateGeneric($$('#product-options-wrapper dl'), ['last']);
// Tags
var addTagFormJs = new VarienForm('addTagForm');
function submitTagForm(){
    if(addTagFormJs.validator.validate()) {
	addTagFormJs.form.submit();
    }
}
// Cart
decorateTable('shopping-cart-table');



/** Cart's page only **/
var discountForm = new VarienForm('discount-coupon-form');
discountForm.submit = function (isRemove) {
    if (isRemove) {
        $('coupon_code').removeClassName('required-entry');
        $('remove-coupone').value = "1";
    } else {
        $('coupon_code').addClassName('required-entry');
        $('remove-coupone').value = "0";
    }
    return VarienForm.prototype.submit.bind(discountForm)();
}