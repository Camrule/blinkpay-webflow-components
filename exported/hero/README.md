# Hero Component

## Description
This component was exported from the BlinkPay component library. It represents the main banner that appears at the top of the homepage.

## Webflow Import Instructions

### 1. Create Custom Code Block
In your Webflow project, add a new Embed element and select "Custom Code" from the settings panel.

### 2. Copy HTML
Copy the entire contents of the `index.html` file in this directory and paste it into the Custom Code block in Webflow.

### 3. Upload Assets
Upload your hero image to Webflow's Asset Manager:
1. Go to the Assets panel in Webflow
2. Upload your hero image
3. After upload, click on the image to get its Webflow CDN URL
4. In the pasted code, replace `REPLACE_WITH_WEBFLOW_CDN_URL/hero-image.jpg` with the actual CDN URL from Webflow

### 4. Test & Adjust
1. Preview the page to ensure the component displays correctly
2. Test on multiple device sizes to verify responsive behavior
3. Make any necessary adjustments to text content or styling

## Customization Options

### Modifying Text Content
- Change the title by editing the text within the `.hero__title` element
- Change the subtitle by editing the text within the `.hero__subtitle` element
- Modify button text as needed

### Changing Colors
The component uses CSS variables for colors. You can either:
1. Keep the variables and update them in the `:root` section at the top of the styles
2. Replace the variable references with direct color values

For example, change:
```css
background-color: var(--color-primary);
```

To:
```css
background-color: #0066FF;
```

### Button Links
Update the `href` attributes on the button links to point to the appropriate pages:

```html
<a href="/your-target-page" class="hero__button hero__button--primary">Get Started</a>
```

## Troubleshooting

### Image Not Displaying
- Verify the image path points to a valid Webflow CDN URL
- Ensure the image has been uploaded to Webflow's Asset Manager
- Check for any console errors in the browser developer tools

### Layout Issues
- Make sure the CSS variables are defined
- Test on multiple devices to ensure responsive behavior
- Check for any conflicting styles from other parts of your Webflow project 