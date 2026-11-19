# Student Complaint Management System

A web-based Student Complaint Management System developed for **UiTM
Kelantan**. The project provides an interface for students to submit and
view complaints, while staff can review and manage complaints.

## Project Overview

This project is built using front-end web technologies:

-   **HTML** -- structures the website pages.
-   **CSS** -- styles the layout and user interface.
-   **JavaScript** -- handles client-side interactions and system
    functions.

> **Note:** This version uses HTML, CSS and JavaScript only. It does not
> use a PHP server or a MySQL database.

## Main Pages and Features

The project contains pages and scripts for:

-   Student and staff login
-   Student dashboard
-   Complaint submission
-   Viewing personal complaints
-   Viewing complaint details
-   Staff dashboard
-   Managing complaints

The exact behaviour of each feature depends on the JavaScript
implementation.

## Project Structure

``` text
Student Complaint System/
│
├── css/
│   └── style.css
│
├── images/
│   ├── logo_aduan.png
│   └── uitmck-campus.jpg
│
├── js/
│   ├── auth.js
│   ├── complaint-details.js
│   ├── db.js
│   ├── manage-complaints.js
│   ├── my-complaints.js
│   ├── staff.js
│   ├── student-dashboard.js
│   ├── student.js
│   └── submit-complaints.js
│
├── complaint-details.html
├── index.html
├── login.html
├── manage-complaints.html
├── my-complaints.html
└── staff-dashboard.html
```

## How to Run the Website Locally

1.  Download or clone this repository to your computer.
2.  Open the project folder in Visual Studio Code.
3.  Keep the `css`, `images`, and `js` folders in the same structure
    shown above.
4.  Open `index.html` in a web browser.

For easier local testing, you can use the **Live Server** extension in
Visual Studio Code:

1.  Open `index.html`.
2.  Right-click inside the editor.
3.  Select **Open with Live Server**.

## Publish with GitHub Pages

1.  Open this repository on GitHub.
2.  Go to **Settings** → **Pages**.
3.  Under **Build and deployment**, choose **Deploy from a branch**.
4.  Select the `main` branch and `/ (root)` folder.
5.  Click **Save**.
6.  Wait for GitHub Pages to publish the website. The website URL will
    appear in the Pages section.

Make sure `index.html` is in the repository root so GitHub Pages can use
it as the entry page.

## Important Notes

-   Keep file and folder names unchanged unless you also update their
    paths in the HTML, CSS, or JavaScript files.
-   Check that image paths and stylesheet/script links use the correct
    relative paths.
-   GitHub Pages hosts front-end websites. It does not run PHP or
    provide a MySQL database.
-   Do not upload passwords, private information, or real student
    complaint details to a public repository.

## Project Purpose

The project aims to provide a convenient web interface for students to
submit college-related complaints and for staff to review and manage
those complaints.
