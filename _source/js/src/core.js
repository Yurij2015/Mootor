/* 
 *  Mootor Core (coded by emi420@gmail.com)
 */
 

// Main function, re-defines itself
var Mootor = (function(){  

	// Return new Mootor instance
	Mootor = function(query) {
		return new Mootor.fn(query);	
	}
	
	// All reusable functions must be in
	// the prototype
	Mootor.prototype = {
		
		// On element ready
        ready: function(callback) {
            Mootor.ready(callback, this.el);
        },

	}

	// On element ready
	Mootor.ready = function(fn, el) {
        if(el === window || el === window.document ) { 
            var ready = false;
            
            // Handler to check if the dom is full loaded
            handler = function(e) {                
                if (ready) {return;}
                if (e.type === "readystatechange" && window.document.readyState !== "complete") {return;}
                    fn.call(window.document);
                    ready = true;                        
            };
    
            // Add listeners for all common load events
            if (el.addEventListener) {
                el.addEventListener("DOM-ContentLoaded", handler, false);
                el.addEventListener("readystatechange", handler, false);
                el.addEventListener("load", handler, false);                            
            } // IE8 needs attachEvent() support
        } else {
            el.onload = fn;        
        }	
	}

	// Main constructor
    Mootor.fn = function(query) {
					
	        var q_type = typeof query;                    
	
	        if( q_type === "string" || q_type === "object" ) {
	        
	            var el; 
	            
	            // Get object from query
	                
	            switch(q_type) {
	    
	            case "string":
	
	                //console.log("FIXME CHECK: Query to the Dom *** EXPENSIVE")
	
	                if( query.indexOf('#') > -1 ) {
	                    query = query.replace("#","");
	                    el = document.getElementById(query);                
	                } else if( query.indexOf(".") > -1) {
	                    query = query.replace(".","");
	                    el = document.getElementsByClassName(query);   
	                }
	                break;
	    
	            case "object":
	                el = query;
	                break;
	            }             
	        }

			// Private element & query properties

			this.el = (function() { 
				return el 
			}()) ;

			this.query = (function() { 
				return query 
			}()) ;


			return this;		

		}	
	
	// Inheritance by copying properties
	Mootor.extend = function(obj) {
		for( i in obj ) {
			if( obj.hasOwnProperty(i) ) {
				Mootor.prototype[i] = obj[i];				
			}			
		}
	}
	
	// Prototypal inheritance	
	Mootor.fn.prototype = Mootor.prototype;
		
	return Mootor
	
}());



