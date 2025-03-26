/**
 * Component Export Script for Webflow
 * 
 * This script prepares components built in our local development
 * environment for import into Webflow by:
 * 
 * 1. Reading the component HTML
 * 2. Inlining necessary CSS
 * 3. Optimizing the HTML
 * 4. Writing to the export directory
 * 
 * Usage: node export.js [component-name]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  componentsDir: path.join(__dirname, '../components'),
  exportDir: path.join(__dirname, '../exported'),
  globalStyles: [
    path.join(__dirname, '../styles/variables.css'),
    path.join(__dirname, '../styles/global.css')
  ]
};

/**
 * Read a file and return its contents
 */
function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    console.error(`Error reading file ${filePath}:`, err);
    return null;
  }
}

/**
 * Write content to a file
 */
function writeFile(filePath, content) {
  try {
    // Create directory if it doesn't exist
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`File written: ${filePath}`);
    return true;
  } catch (err) {
    console.error(`Error writing file ${filePath}:`, err);
    return false;
  }
}

/**
 * Extract CSS from component and global styles
 */
function extractStyles(componentPath) {
  const componentStylePath = path.join(componentPath, 'styles.css');
  let styles = '';
  
  // Add global styles
  CONFIG.globalStyles.forEach(stylePath => {
    const globalStyle = readFile(stylePath);
    if (globalStyle) {
      styles += globalStyle + '\n';
    }
  });
  
  // Add component-specific styles
  const componentStyle = readFile(componentStylePath);
  if (componentStyle) {
    styles += componentStyle;
  }
  
  return styles;
}

/**
 * Inline CSS into the HTML
 */
function inlineCSS(html, css) {
  // A very basic implementation - in a real project you might
  // want to use a proper CSS inliner library
  return html.replace('</head>', `<style>${css}</style></head>`);
}

/**
 * Process a component for export
 */
function processComponent(componentName) {
  console.log(`Processing component: ${componentName}`);
  
  // Validate component exists
  const componentPath = path.join(CONFIG.componentsDir, componentName);
  if (!fs.existsSync(componentPath)) {
    console.error(`Component ${componentName} not found`);
    return false;
  }
  
  // Read the component HTML
  const htmlPath = path.join(componentPath, 'index.html');
  const html = readFile(htmlPath);
  if (!html) {
    console.error(`HTML file not found for component ${componentName}`);
    return false;
  }
  
  // Extract CSS
  const css = extractStyles(componentPath);
  
  // Inline CSS into HTML
  const processedHTML = inlineCSS(html, css);
  
  // Create export directory if it doesn't exist
  const exportPath = path.join(CONFIG.exportDir, componentName);
  if (!fs.existsSync(exportPath)) {
    fs.mkdirSync(exportPath, { recursive: true });
  }
  
  // Write processed HTML to export directory
  const exportFilePath = path.join(exportPath, 'index.html');
  writeFile(exportFilePath, processedHTML);
  
  // Copy assets if they exist
  const assetsPath = path.join(componentPath, 'assets');
  const exportAssetsPath = path.join(exportPath, 'assets');
  if (fs.existsSync(assetsPath)) {
    if (!fs.existsSync(exportAssetsPath)) {
      fs.mkdirSync(exportAssetsPath, { recursive: true });
    }
    
    try {
      execSync(`cp -R ${assetsPath}/* ${exportAssetsPath}`);
      console.log(`Assets copied to ${exportAssetsPath}`);
    } catch (err) {
      console.error('Error copying assets:', err);
    }
  }
  
  // Generate documentation
  generateComponentDoc(componentName, componentPath, exportPath);
  
  console.log(`Component ${componentName} exported to ${exportPath}`);
  return true;
}

/**
 * Generate documentation for the component
 */
function generateComponentDoc(componentName, componentPath, exportPath) {
  const readmePath = path.join(componentPath, 'README.md');
  
  // If README exists, copy it to export directory
  if (fs.existsSync(readmePath)) {
    const exportReadmePath = path.join(exportPath, 'README.md');
    fs.copyFileSync(readmePath, exportReadmePath);
    console.log(`Documentation copied to ${exportReadmePath}`);
    return;
  }
  
  // Otherwise generate basic documentation
  const docContent = `# ${componentName.charAt(0).toUpperCase() + componentName.slice(1)} Component

## Description
This component was exported from the BlinkPay component library.

## Webflow Import Instructions
1. Create a Custom Code block in Webflow
2. Paste the contents of index.html into the code block
3. Upload any assets to the Webflow Asset Manager
4. Update asset paths in the HTML to use Webflow CDN URLs
`;
  
  const exportDocPath = path.join(exportPath, 'README.md');
  writeFile(exportDocPath, docContent);
}

/**
 * Main function
 */
function main() {
  // Get component name from command line arguments
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error('Please provide a component name');
    console.log('Usage: node export.js [component-name]');
    process.exit(1);
  }
  
  const componentName = args[0];
  
  // Process the component
  const success = processComponent(componentName);
  
  if (success) {
    console.log(`
=============================================
Component exported successfully!
=============================================

To import into Webflow:
1. Open your Webflow project
2. Create a Custom Code block
3. Copy the contents of exported/${componentName}/index.html
4. Paste into the Custom Code block
5. Upload any assets to Webflow and update paths

For detailed instructions, see exported/${componentName}/README.md
    `);
  } else {
    console.error('Export failed.');
    process.exit(1);
  }
}

// Run the script
main(); 