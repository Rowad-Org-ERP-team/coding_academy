// Copyright (c) 2022, Rowad ERP Team and contributors
// For license information, please see license.txt

frappe.ui.form.on('Bootcamp Course', {
 refresh: function(frm) {
		 frm.get_field('trainers_and_trainer_supports').grid.cannot_add_rows = true;
		 refresh_field('trainers_and_trainer_supports');
		


	 },
	bootcamp: function(frm) {
		if (frm.doc.bootcamp) {
			frappe.call({
				method: 'coding_academy.api.get_bootcamp_govs',
				args: {
					bootcamp: frm.doc.bootcamp
				},
				callback: function(r) {
					if (r.message) {
						frappe.model.clear_table(frm.doc, 'trainers_and_trainer_supports');
						$.each(r.message, function(i, d) {
							var row = frm.add_child('trainers_and_trainer_supports');
							row.government = d.government;
						});
						frm.refresh_field('trainers_and_trainer_supports');
					}
				}
			});
		}
	},

});
