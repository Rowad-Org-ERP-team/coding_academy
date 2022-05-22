# Copyright (c) 2015, Frappe Technologies and contributors
# For license information, please see license.txt


import json

import frappe
from frappe import _
from frappe.model.mapper import get_mapped_doc
from frappe.utils import cstr, flt, getdate

@frappe.whitelist()
def get_program_project_template_tasks(project_template):
	return frappe.get_all("Project Template Task",
		fields=["task", "subject", "docstatus"], filters={"parent":project_template}, order_by= "idx")
@frappe.whitelist()
def get_bootcamp_govs(bootcamp):
	return frappe.get_all("Bootcamp Governments Table",
		fields=["government","docstatus"], filters={"parent":bootcamp}, order_by= "idx")




