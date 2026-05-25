const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else if(file.endsWith('.jsx')) { 
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Convert accent colors to primary
    content = content.replace(/text-accent/g, 'text-primary');
    content = content.replace(/bg-accent/g, 'bg-primary');
    content = content.replace(/border-accent/g, 'border-primary');
    content = content.replace(/shadow-accent/g, 'shadow-primary');
    
    // Convert text-primary-dark to text-white (for buttons)
    content = content.replace(/text-primary-dark/g, 'text-white');
    
    // Hover states for CTAs
    content = content.replace(/hover:bg-accent(-\w+)?/g, 'hover:bg-secondary');
    content = content.replace(/hover:text-accent(-\w+)?/g, 'hover:text-secondary');
    content = content.replace(/hover:border-accent(-\w+)?/g, 'hover:border-secondary');

    // Replace the secondary CTA button in Home.jsx from bg-secondary to outline or similar if both are primary
    // We'll manually adjust Home.jsx later if needed.

    fs.writeFileSync(file, content, 'utf8');
});
console.log('Colors replaced successfully.');
