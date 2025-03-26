# Modern Hero Component - Webflow Export

This file contains the exported Modern Hero component ready for Webflow import.

## Webflow Import Instructions

1. In your Webflow project, go to the page where you want to add the component
2. Add a new "Embed" element where you want the component to appear
3. Copy the entire contents of `index.html` in this folder
4. Paste the code into the Embed element's code editor
5. Save and publish your changes

## GSAP Animations

This component includes GSAP animations that provide a more engaging user experience:

### Entry Animations
- Text elements fade in from below with a staggered sequence
- Hero image slides in from the right
- Badges scale in with a bouncy effect

### Interactive Animations
- Buttons scale up slightly on hover
- Arrow in the secondary button moves right on hover

### GSAP Requirements
- This component requires the GSAP library
- The component includes the GSAP CDN link
- For better performance in Webflow, you can:
  - Add the GSAP script globally in your project settings
  - Remove the script tag from this component when using globally

## Webflow Compatibility Notes

### Fonts
- The component uses **Inter** font (400, 600, 700 weights)
- Make sure to add this font to your Webflow project before importing:
  - Go to Project Settings > Fonts
  - Add Inter font with required weights
  - Or use the font link provided in the component code

### Images
- The component currently uses a placeholder image
- Replace the image URL in the code with your actual image from Webflow's Assets
- Update the `src` attribute of the `<img>` tag with your Webflow CDN URL

### Responsiveness
- Responsive styles are included in the component
- Test across different device sizes in Webflow's preview mode
- Make additional adjustments if needed within Webflow's editor

### Classes
- All component elements have descriptive class names
- You can target these classes with Webflow's style editor if needed
- Avoid removing the inline styles as they're essential for the component

## Customization in Webflow

You can easily customize this component in Webflow by:

1. Changing text content directly in the embed code
2. Updating colors by modifying the inline style values
3. Replacing placeholder content with your own
4. Adjusting responsive breakpoints in the style section if needed
5. Modifying animation parameters in the GSAP script section

## Troubleshooting

- If the component doesn't render correctly, verify the Inter font is available
- Check that no CSS conflicts exist with your existing Webflow styles
- Ensure all paths and URLs are updated to use Webflow's CDN
- If animations don't work, verify that the GSAP script is loading correctly

## Support

If you encounter any issues with this component, please refer to the main project documentation or contact the development team. 