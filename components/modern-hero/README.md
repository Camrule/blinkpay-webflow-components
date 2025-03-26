# Modern Hero Component

A modern hero section created based on Figma design for the BlinkPay website. This component features:

- Clean, modern design with gradient accents
- Primary and secondary call-to-action buttons
- Key statistics display
- Badge overlays for highlighting key benefits
- Fully responsive design

## Usage

```html
<section class="modern-hero">
  <div class="container">
    <!-- Content in left column -->
    <div class="modern-hero__content">
      <!-- Tag label -->
      <div class="modern-hero__tag">
        <span>Revolutionary Payment</span>
      </div>
      
      <!-- Heading and description -->
      <h1 class="modern-hero__title">A Better Way to Make Digital Payments</h1>
      <p class="modern-hero__subtitle">Tired of high merchant service fees or clunky payment systems? BlinkPay offers a simple, secure bank payment solution built for Kiwi businesses.</p>
      
      <!-- CTA buttons -->
      <div class="modern-hero__buttons">
        <a href="#" class="modern-hero__button modern-hero__button--primary">Get Started</a>
        <a href="#" class="modern-hero__button modern-hero__button--secondary">
          <span>Talk to our team</span>
          <svg class="modern-hero__arrow"><!-- Arrow SVG --></svg>
        </a>
      </div>
      
      <!-- Statistics -->
      <div class="modern-hero__stats">
        <div class="modern-hero__stat">
          <div class="modern-hero__stat-value">$100M+</div>
          <div class="modern-hero__stat-label">Payments Processed</div>
        </div>
        <!-- Additional stats... -->
      </div>
    </div>
    
    <!-- Image and badges in right column -->
    <div class="modern-hero__image">
      <img src="..." alt="..." class="modern-hero__img">
      <!-- Badges overlaying the image -->
      <div class="modern-hero__badge modern-hero__badge--fees">
        <!-- Badge content... -->
      </div>
      <div class="modern-hero__badge modern-hero__badge--integration">
        <!-- Badge content... -->
      </div>
    </div>
  </div>
</section>
```

## Customization

- Update the heading, description and stats with your own content
- Replace the placeholder image with your actual image
- Adjust badge positions and content as needed
- Modify colors in the CSS to match your brand

## Dependencies

- Requires Inter font from Google Fonts
- Uses global CSS variables from the project

## Webflow Export Notes

When exporting to Webflow:

1. Make sure to include the Inter font in your Webflow project
2. Update image paths to use Webflow CDN
3. Check positioning of badges in the Webflow editor, as they may need adjustment 