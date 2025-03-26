# Webflow Import Guide

This guide provides detailed instructions for importing components from our pre-built component library into Webflow.

## Prerequisites

1. Access to the BlinkPay Webflow project
2. Exported components from the component library
3. Basic understanding of HTML and CSS
4. Understanding of Webflow's UI and custom code blocks

## Import Process

### 1. Prepare the Component

Before importing to Webflow, make sure the component has been exported:

```bash
npm run export component-name
```

This will create an optimized version of the component in the `exported/component-name/` directory.

### 2. Create a Custom Code Block in Webflow

1. Open your Webflow project
2. Navigate to the page where you want to add the component
3. Add a new element to the page
4. Select "Embed" from the elements panel
5. Click on the new embed element and select "Custom Code" from the settings panel

### 3. Paste the Component HTML

1. Open the exported component file (`exported/component-name/index.html`)
2. Copy the entire contents of the file
3. Paste it into the Webflow custom code block
4. Save your changes

### 4. Import Assets

For any images or other assets used in the component:

1. Go to the Webflow Asset Manager (in the left sidebar)
2. Upload the required assets
3. After upload, click on each asset to get its Webflow CDN URL
4. Update the asset paths in your custom code block to use these CDN URLs

For example, change:
```html
<img src="../../assets/images/hero-image.jpg" alt="Description">
```

To:
```html
<img src="https://uploads-ssl.webflow.com/[your-project-id]/[asset-id]/hero-image.jpg" alt="Description">
```

### 5. Add Global Styles

If the component relies on global styles:

1. Go to Project Settings > Custom Code
2. Add your CSS variables and global styles in the Head Code section
3. Alternatively, include these styles inline in your component

### 6. Test the Component

1. Preview the page to ensure the component displays correctly
2. Test on multiple device sizes to verify responsive behavior
3. Check for any console errors or layout issues

### 7. Publish Changes

Once you're satisfied with the component's appearance and functionality:

1. Save your changes
2. Publish the site to make the changes live

## Troubleshooting Common Issues

### Component Styling Is Broken

**Possible causes:**
- Missing CSS variables
- Webflow's styles overriding component styles
- Assets not properly imported

**Solutions:**
- Add the required CSS variables to Webflow's Custom Code section
- Increase specificity of component selectors
- Verify asset paths are using Webflow CDN URLs

### Component Not Responsive

**Possible causes:**
- Missing viewport meta tag
- CSS media queries not working
- Webflow's responsive settings conflicting

**Solutions:**
- Ensure viewport meta tag is included
- Check media queries in the component CSS
- Adjust Webflow's container settings

### JavaScript Not Working

**Possible causes:**
- JavaScript errors in browser console
- Conflicts with Webflow's built-in scripts
- Missing dependencies

**Solutions:**
- Check browser console for errors
- Place scripts at the end of the body
- Add required libraries to Webflow's custom code

## Best Practices

1. **Keep components modular** - Each component should be self-contained with minimal dependencies
2. **Test thoroughly before publishing** - Verify on multiple devices and browsers
3. **Document any customizations** - Note any changes made during the import process
4. **Maintain version control** - Keep track of component versions
5. **Use Webflow classes for fine-tuning** - Make small adjustments using Webflow's UI rather than modifying the code

## Examples

### Basic Text Component

```html
<div class="text-component">
  <h2 class="text-component__heading">Heading Text</h2>
  <p class="text-component__body">Body text goes here...</p>
</div>
```

### Component with Assets

```html
<div class="feature-card">
  <img src="https://uploads-ssl.webflow.com/[project-id]/[asset-id]/feature-icon.svg" alt="Feature" class="feature-card__icon">
  <h3 class="feature-card__title">Feature Title</h3>
  <p class="feature-card__description">Feature description text...</p>
</div>
```

## Further Resources

- [Webflow University - Custom Code Guide](https://university.webflow.com/lesson/custom-code-in-webflow)
- [Webflow Forums](https://forum.webflow.com/)
- [PRD.md](./PRD.md) - Project Requirements Document 