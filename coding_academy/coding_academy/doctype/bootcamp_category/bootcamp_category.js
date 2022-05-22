// Copyright (c) 2022, Rowad ERP Team and contributors
// For license information, please see license.txt

frappe.ui.form.on('Bootcamp Category', {
	 refresh: function(frm) {
		 frm.get_field('trainers_and_trainer_supports').grid.cannot_add_rows = true;
	 },
		project_template: function(frm) {
		if (frm.doc.project_template) {
			frappe.call({
				method: 'coding_academy.api.get_program_project_template_tasks',
				args: {
					project_template: frm.doc.project_template
				},
				callback: function(r) {
					if (r.message) {
						frappe.model.clear_table(frm.doc, 'tasks');
						$.each(r.message, function(i, d) {
							var row = frm.add_child('tasks');
							row.task = d.task;
							row.subject = d.subject;
						});
						frm.refresh_field('tasks');
					}
				}
			});
		}
	},
});