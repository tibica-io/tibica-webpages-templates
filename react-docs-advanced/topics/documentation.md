# Building your Documentation with t.Site Documentation Template

## Introduction
The t.Site documentation template provides a simple way to edit and publish your documentation. This guide will walk you through the process of creating and managing your documentation using the t.Site app.

[![Tibica](https://i.postimg.cc/FHbHtJqb/Group-182.png)](https://postimg.cc/sMXr7131)

## Getting Started
After creating your site from a template, you can begin editing your documentation.

### Managing your .md files
To ensure your files appear on the website, upload your documentation `.md` files. You may organize them into different folders. For example, we use the `topics` folder.

### Adding your .md files to the website
Next, modify the `mdConfig.json` file located at the root of the project. 

```json
[
    {
        "url": "documentation-page-url",
        "menuName": "Documentation URL",
        "file": "./topics/documentation.md",
        "lastDateUpdated": "2024-02-15T18:44:25.088Z"
    }
]
```

Each object in `mdConfig.json` represents a documentation page and includes the following fields:

* `url`: The slug of your documentation page, which will appear in the URL.
* `menuName`: The name of the page as it will appear in the navigation menu.
* `file`: The path to your `.md` file.
* `lastDateUpdated`: The date when the `.md` file was last updated, displayed on the page.

### Deploying your documentation website
After uploading your `.md` files and modifying the `mdConfig.json` file, deploy your website as you normally would. The t.Site app will automatically generate the documentation HTML pages based on the `mdConfig.json` file.

Voilà! Your documentation is now live on the web.
