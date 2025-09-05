News Homepage

A responsive news homepage layout featuring a sidebar navigation, hero section, news highlights, and article cards. Designed with a clean, modern style and optimized for multiple screen sizes including mobile, tablets, and desktop.

Features

Responsive navigation sidebar with open/close toggles

Hero section with image and text content

News highlights with article listings

Article cards with images and descriptive text

Custom color palette and typography using SCSS variables

Responsive design with special fix for iPad Mini screen size

Technologies Used

HTML5

SCSS (Sass) for styling

JavaScript for sidebar toggle (optional)

Google Fonts (Inter)

Installation

Clone the repository:

git clone https://github.com/yourusername/news-homepage.git


Navigate to the project folder:

cd news-homepage


Open index.html in your browser or serve the project using a local server.

Usage

On small screens, use the hamburger menu to open/close the sidebar.

The layout adapts to different screen sizes for an optimal reading experience.

The article cards align properly on devices including iPad Mini due to a custom media query fix.

iPad Mini Fix

To ensure proper alignment of article cards on the iPad Mini (around 768px width), the following media query has been added:

@media screen and (max-width: 768px) and (min-width: 700px) {
  .card-container {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
  }

  .card {
    flex: 0 1 calc(48% - 1rem);
    min-width: 300px;
    margin-bottom: 1rem;
  }
}


This helps wrap the cards and keeps them aligned without layout issues on that device.

Folder Structure
/assets
  /images
    logo.svg
    icon-menu.svg
    icon-menu-close.svg
    image-web-3-desktop.jpg
    image-web-3-mobile.jpg
    image-retro-pcs.jpg
    image-top-laptops.jpg
    image-gaming-growth.jpg
index.html
main.scss
script.js
README.md

License

MIT License © 2025 Bot-bot