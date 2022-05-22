// Copyright (c) 2022, Rowad ERP Team and contributors
// For license information, please see license.txt

frappe.ui.form.on('Trainee Admission', {
    bootcamp: function(frm) {
		if(frm.doc.bootcamp) {
			frm.trigger('set_governments');
		}
	},
    set_governments: function(frm) {
		frappe.call({
			method: "coding_academy.coding_academy.doctype.trainee_admission.trainee_admission.get_bootcamp_governments",
			args: {
				bootcamp: frm.doc.bootcamp
			},
			callback: function(r, rt) {
				if(r.message) {
					frm.set_value('governments', r.message);
				}
			}
		})
	}
});