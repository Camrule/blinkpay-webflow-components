# Hero Component

## Description
The Hero component is the main banner that appears at the top of the homepage. It includes a headline, subtitle, call-to-action buttons, and an image.

## Usage
```html
<section class="hero">
  <div class="container">
    <div class="hero__content">
      <h1 class="hero__title">Fast, Secure Payments for Your Business</h1>
      <p class="hero__subtitle">BlinkPay helps businesses process payments quickly and securely, with low fees and instant settlements.</p>
      <div class="hero__buttons">
        <a href="#" class="hero__button hero__button--primary">Get Started</a>
        <a href="#" class="hero__button hero__button--secondary">Learn More</a>
      </div>
    </div>
    <div class="hero__image">
      <img src="path/to/image.jpg" alt="Description" class="hero__img">
    </div>
  </div>
</section>
```

## Customization
- Change the title text by modifying the content of the `.hero__title` element
- Change the subtitle text by modifying the content of the `.hero__subtitle` element
- Adjust button text and links as needed
- Replace the image source with your own image

## Webflow Import Notes
When importing this component to Webflow:
1. Create a custom code block
2. Paste the exported HTML (from `/exported/hero/index.html`)
3. Upload the hero image to Webflow's Asset Manager
4. Update the image path in the HTML to use Webflow's CDN URL

## CSS Variables Used
This component uses the following CSS variables:
- `--space-xxl`, `--space-xl`, `--space-lg`, `--space-md`, `--space-sm`
- `--font-size-xxxxl`, `--font-size-lg`, `--font-size-md`
- `--font-weight-bold`, `--font-weight-medium`
- `--color-text`, `--color-text-light`, `--color-primary`, `--color-primary-dark`
- `--radius-md`, `--radius-lg`
- `--shadow-lg`
- `--transition-normal`

Make sure these variables are defined in Webflow's custom code if you're not including the global styles. 