# Copyright (c) 2022, Rowad ERP Team and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class Bootcamp(Document):
	def get_gov_list(self):
		bootcamp_gov_list = self.governments
		gov_list = [frappe.get_doc("Government", bootcamp_gov.government) for bootcamp_gov in bootcamp_gov_list]
		return gov_list

