# Copyright (c) 2022, Rowad ERP Team and contributors
# For license information, please see license.txt

import frappe
import json
import math
from frappe.website.website_generator import WebsiteGenerator

class TraineeAdmission(WebsiteGenerator):
    pass

@frappe.whitelist()
def get_bootcamp_governments(bootcamp):
    bootcamp_doc = frappe.get_doc('Bootcamp', bootcamp)
    govs = []
    for d in bootcamp_doc.governments:
        govs.append({
            'government': d.government,
	    'seats': 
	     d.seats,
            'address':
	     d.address
        })

    return govs