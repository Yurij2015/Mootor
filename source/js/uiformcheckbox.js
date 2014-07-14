/**
* UIFormCheckbox is a checkbox input of a form
*
* @class UIFormCheckbox
* @extends UI
* @constructor
* @module UI
* @author Emilio Mariscal (emi420 [at] gmail.com)
*/

(function ($, Mootor) {
    
    "use strict";

    var UIFormCheckbox,
        UIForm,
        UI;

    // Dependences

    UI = Mootor.UI,
    UIForm = Mootor.UIForm;
    
    // Private constructors

    UIFormCheckbox = function() {
        // code here
    };

    // Prototypal inheritance
    $.extend(UIFormCheckbox.prototype, UI.prototype);

    // Private static methods and properties

    $.extend(UIFormCheckbox, {
        _init: function(uiview) {
            
            var inputs;
                
            inputs = uiview.$el.find(".m-checkbox");
            inputs.each(function(index,element) {
                var $element = $(element);
                
                /*jshint multistr: true */
                var coverHTML = '<div class="m-checkbox m-checkbox-cover">\
                    <span class="m-checkbox-icon m-icon-ok-small m-hidden"></span>\
                </div>';


                var $cover = element.$cover = $(coverHTML).insertBefore(element);
                
                var $label = $("label[for=" + element.id + "]");
                var $icon = $cover.find(".m-checkbox-icon");
                $cover[0].appendChild($label[0]);
                
                $element.removeClass("m-checkbox")
                $element.addClass("m-checkbox-hidden");

                updateValue();
                $element.on("change", updateValue);
                $cover.on("tap", function() {
                    if (element.getAttribute("checked")) {
                        element.removeAttribute("checked");
                    } else {
                        element.setAttribute("checked", "checked");                      
                    }
                    updateValue();
                });
                
                function updateValue() {
                    var checked = element.getAttribute("checked");
                    if (checked) {
                        $icon.removeClass("m-hidden");
                    } else {
                        $icon.addClass("m-hidden");
                    }
                }
            });
        }   
    });

    // Public methods and properties

    $.extend(UIFormCheckbox.prototype, {
    });        

    UIForm.registerControl(UIFormCheckbox);  

}(window.$, window.Mootor));