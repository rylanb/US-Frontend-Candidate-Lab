## CP+B Candidate Lab

Hello and thank you for taking the time to work on this lab!

This lab is an opportunity for us to have a conversation about practices, conventions, and workflow.
It will also help us better understand you as a developer.
Please use this as a way to communicate through your craft.


# Setup

1. Fork this repo and clone to your computer
2. Setup the project in your preferred IDE
3. View index.html in the browser (/www)
4. Open the psd file in /psd (/psd)


# Development

* Improve semantic structure and content of the HTML
* Incorporate missing design elements (per psd)

* Create an RSVP message onClick of 'Yes' or 'No':
  ** Provide feedback to the user with confirmation of their choice
  ** Design, behavior, and messaging are up to you
  ** Plug-ins, libraries, and frameworks are permitted

* Modify anything and everything you think should be different/improved. Document the reasoning for your changes in the Notes section.


# Workflow

Please make atomic commits (commit often) as you progress.
Be sure to provide useful commit messages to illustrate milestones and workflow.
Submit a pull request when you are finished and satisfied with your work.

# Notes

Use this area to communicate any thought processes, ideas, or challenges you encountered.

* I altered the height/width/margins of the invitation div to match the comp more closely than it did originally. I had to alter the background image to be taller to fit still.
* The pebble-y background of the invitation div in the comp extends out over the boot image, I'm not sure if that was intentional, but I left it off in the html
* Position fixed does some interesting things for the two extra polaroids when you scroll right/left if the window is < 888px wide.
* I'm pretty sure this is supposed to be left-aligned as a design, but not 100% on that.
* Adding roles to the document, added main-content to add the ARIA 'main' role.
* Added role banner to the header images for accessibility
* Added title for SEO purposes. Updated alt tags to be more SEO friendly.
* Checked in Safari, Chrome, Firefox on a Mac. If other browsers are required, please let me know and I'll check for issues and fix
