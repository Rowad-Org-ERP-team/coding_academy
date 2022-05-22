# Copyright (c) 2022, Rowad ERP Team and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class AgeGroup(Document):
	def before_save(self):
		if self.minimum_age > self.maximum_age:
			frappe.throw("Minimum Age must be less than Maximum Age")
		else:
   	     		self.name = f'{self.name1} ( {str(self.minimum_age)} - {str(self.maximum_age)} )'

	
