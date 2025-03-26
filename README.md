# BlinkPay Webflow Component Library

This repository contains pre-built HTML and CSS components for the BlinkPay website, designed to be imported into Webflow.

## Project Structure

```
blink-webflow-components/
├── components/           # Individual reusable components
│   ├── navigation/
│   ├── hero/
│   ├── features/
│   ├── testimonials/
│   ├── pricing/
│   ├── contact/
│   └── footer/
├── styles/               # Global styles and variables
│   ├── global.css       
│   ├── variables.css     # Colors, spacing, typography variables
│   └── utilities.css     # Utility classes
├── assets/               # Images, icons, and other assets
│   ├── images/
│   ├── icons/
│   └── fonts/
├── pages/                # Full page assemblies for testing
│   ├── index.html        # Homepage
│   └── other-pages/
├── exported/             # Export-ready components for Webflow
├── scripts/              # Build scripts and utilities
│   └── export.js         # Script to prepare components for Webflow
└── docs/                 # Documentation
    ├── PRD.md            # Project requirements document
    └── component-docs/   # Documentation for specific components
```

## Setup Instructions

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

This will open the component preview page in your browser.

## Development Workflow

### Creating a New Component

1. Create a new directory in the `components` folder:

```bash
mkdir -p components/new-component
```

2. Add the following files to the component directory:
   - `index.html` - Component markup
   - `styles.css` - Component-specific styles
   - `README.md` - Component documentation

3. Follow the [BEM naming convention](http://getbem.com/naming/) for CSS classes:
   - `.block` - Component name (e.g., `.card`)
   - `.block__element` - Child of component (e.g., `.card__title`)
   - `.block--modifier` - Variation of component (e.g., `.card--featured`)

4. Import the component into the preview page by adding it to `pages/index.html`

### Exporting a Component for Webflow

Use the export script to prepare a component for Webflow import:

```bash
npm run export component-name
```

For example, to export the hero component:

```bash
npm run export hero
```

To export all components:

```bash
npm run export:all
```

The exported components will be in the `exported` directory, ready for import into Webflow.

## Importing to Webflow

1. In your Webflow project, create a new Custom Code block
2. Copy the contents of the exported component HTML file (`exported/component-name/index.html`)
3. Paste into the Custom Code block
4. Upload any required assets to Webflow's Asset Manager
5. Update asset paths in the code to use Webflow's CDN URLs

## Code Standards

Please follow these standards when creating components:

- Use semantic HTML5 elements where appropriate
- Follow BEM naming convention for CSS
- Keep HTML structure clean with proper indentation
- Use CSS variables for consistent styling
- Test components for responsiveness across all breakpoints
- Document component usage in a README.md file

For more detailed guidelines, see the [PRD.md](docs/PRD.md) file.

## License

This project is proprietary and confidential. Unauthorized copying or distribution is prohibited. 