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
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.css')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace py- classes
    content = content.replace(/\bpy-(12|16|20|24|32|40|48|64)\b/g, 'py-10');
    content = content.replace(/\bmd:py-(12|16|20|24|32|40|48|64)\b/g, 'md:py-10');
    content = content.replace(/\blg:py-(12|16|20|24|32|40|48|64)\b/g, 'lg:py-10');

    // Replace my- classes
    content = content.replace(/\bmy-(12|16|20|24|32|40|48|64)\b/g, 'my-10');
    content = content.replace(/\bmd:my-(12|16|20|24|32|40|48|64)\b/g, 'md:my-10');
    content = content.replace(/\blg:my-(12|16|20|24|32|40|48|64)\b/g, 'lg:my-10');
    
    // Replace gap classes (internal spacing)
    content = content.replace(/\bgap-(12|16|20|24|32|40)\b/g, 'gap-10');
    content = content.replace(/\bmd:gap-(12|16|20|24|32|40)\b/g, 'md:gap-10');
    
    // Replace margin bottom classes (internal spacing)
    content = content.replace(/\bmb-(12|16|20|24|32|40)\b/g, 'mb-10');
    content = content.replace(/\bmd:mb-(12|16|20|24|32|40)\b/g, 'md:mb-10');

    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
});
