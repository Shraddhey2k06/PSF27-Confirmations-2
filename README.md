# PSF'27 Investor Relations — Fresh Deployment

## Website files

Upload these four files to the ROOT of the GitHub repository:

- index.html
- style.css
- script.js
- psf27-logo.png

`Code.gs` is the Google Apps Script backend source.

## Form fields

The portal asks only for:

1. Full Name
2. Organisation / Venture / Fund Name
3. Contact Number
4. Preferred Day of Attendance — 30 January, 31 January, or Both Days
5. Optional requirements / queries
6. Mandatory confirmation of attendance

There is NO Designation, LinkedIn Profile, or Email field.

## Google Sheet

The backend creates a new tab named:

PSF27 Confirmations

Columns:

Timestamp | Full Name | Organisation / Venture / Fund | Contact Number | Preferred Attendance Day | Confirmed | Queries | Source

The previous `Investor Confirmations` tab is not modified or deleted.

## Apps Script deployment

1. Open the Apps Script project.
2. Replace `Code.gs` with the included `Code.gs`.
3. Save.
4. Deploy → Manage deployments.
5. Edit the Web app deployment.
6. Execute as: Me.
7. Who has access: Anyone.
8. Deploy/Update.
9. Keep the resulting `/exec` URL in `script.js`.

The current `script.js` contains the previously supplied Web App URL.

## GitHub Pages

1. Create/open the GitHub repository.
2. Upload the four website files to the repository ROOT.
3. Commit changes.
4. Settings → Pages.
5. Source: Deploy from a branch.
6. Branch: main.
7. Folder: / (root).
8. Save.
9. Open the GitHub Pages URL.

If the page appears as plain unstyled HTML, make sure `style.css` is in the same root folder as `index.html`, then press Ctrl+F5.

## Important

Keep the Google Sheet private to the Investor Relations team. Do not publish passwords, API keys, or private Google credentials.
