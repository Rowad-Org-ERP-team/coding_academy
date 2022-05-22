// Copyright (c) 2022, Rowad ERP Team and contributors
// For license information, please see license.txt

frappe.ui.form.on('Lesson', {
	 refresh: function(frm) {
		  frm.set_query('course', function(){
			return {
				filters: {
					bootcamp: frm.doc.bootcamp
				}
			}

			
		});

	 }

});



