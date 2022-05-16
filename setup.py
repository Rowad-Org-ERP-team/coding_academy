from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in coding_academy/__init__.py
from coding_academy import __version__ as version

setup(
	name="coding_academy",
	version=version,
	description="This App is for Coding Academy Project",
	author="Rowad ERP Team",
	author_email="rowadfoundation@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
