# PSF'27 Investor Relations — Final GitHub Deployment

Upload these files to the ROOT of the GitHub repository:

- index.html
- style.css
- script.js
- psf27-logo.png
- Code.gs (Apps Script source/reference)
- README.md

The correct PSF'27 logo is included.

### Form
- Full Name
- Organisation / Venture / Fund Name
- Contact Number
- Preferred Day: 30 Jan / 31 Jan / Both Days
- Optional requirements / queries
- Mandatory attendance confirmation

No Designation, LinkedIn Profile, or Email field.

### Google Apps Script
The backend uses the `PSF27 Confirmations` sheet tab with columns:
Timestamp, Full Name, Organisation / Venture / Fund, Contact Number, Preferred Attendance Day, Confirmed, Queries, Source.

After updating Code.gs, deploy the Apps Script as a Web App:
Execute as: Me
Who has access: Anyone

The current Web App URL is already configured in script.js.

### GitHub Pages
Settings → Pages → Deploy from branch → main → / (root).

Make sure `style.css` and `psf27-logo.png` are in the same root folder as `index.html`.
