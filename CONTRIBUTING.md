# Contributing to Tibica Website Templates

Thank you for your interest in contributing to the Tibica Website Templates project! We welcome contributions from the community to help improve and expand our collection of modern web development templates.

## 🤝 Ways to Contribute

### 1. **New Template Submissions**
- Add templates for popular frameworks or emerging technologies
- Create specialized templates (e.g., e-commerce, portfolio, blog variants)
- Improve existing templates with modern practices

### 2. **Template Improvements**
- Update dependencies to latest stable versions
- Enhance performance and optimization
- Add accessibility improvements
- Improve documentation within templates

### 3. **Documentation**
- Improve README files for individual templates
- Add setup instructions and troubleshooting guides
- Create tutorial content or examples

### 4. **Bug Reports & Issues**
- Report template-specific bugs or issues
- Suggest improvements to existing templates
- Report documentation gaps or errors

## 📋 Contribution Guidelines

### Template Standards

All templates must meet these requirements:

#### **Technical Requirements**
- ✅ **Production-ready**: Include optimized build configurations
- ✅ **Modern practices**: Use current framework versions and best practices
- ✅ **Performance**: Implement code splitting, lazy loading where appropriate
- ✅ **Accessibility**: Follow WCAG 2.1 guidelines
- ✅ **Mobile-responsive**: Work across all device sizes
- ✅ **Browser support**: Support modern browsers (last 2 versions)

#### **Code Quality**
- ✅ **TypeScript support**: Provide TypeScript variants when applicable
- ✅ **Linting**: Include ESLint/Prettier configurations
- ✅ **Testing setup**: Include basic testing framework setup
- ✅ **Build optimization**: Minimize bundle sizes
- ✅ **Security**: Follow security best practices, no hardcoded secrets

#### **Documentation**
- ✅ **README.md**: Include setup, development, and build instructions
- ✅ **Package.json**: Proper scripts for dev, build, test, lint
- ✅ **Comments**: Document complex logic and configurations
- ✅ **Dependencies**: Keep dependencies minimal and well-justified

### File Structure

Each template should follow this structure:

```
template-name/
├── README.md                 # Template-specific documentation
├── package.json             # Dependencies and scripts
├── .gitignore              # Appropriate ignore patterns
├── src/                    # Source code
├── public/                 # Static assets (if applicable)
├── dist/ or build/         # Build output (gitignored)
└── [framework-specific files]
```

## 🚀 Getting Started

### 1. **Fork & Clone**
```bash
git fork https://github.com/tibica-io/tibica-webpages-templates
git clone https://github.com/YOUR_USERNAME/tibica-webpages-templates.git
cd tibica-webpages-templates
```

### 2. **Create New Template**
```bash
# Create new template directory
mkdir my-new-template
cd my-new-template

# Initialize your template
npm init -y
# ... add your template code
```

### 3. **Test Your Template**
```bash
# Ensure your template works
npm install
npm run dev
npm run build
npm run lint
```

### 4. **Update Documentation**
- Add template to main README.md
- Create template-specific README.md
- Update any relevant documentation

## 📝 Pull Request Process

### Before Submitting
- [ ] Template builds successfully
- [ ] All scripts work (dev, build, lint, test)
- [ ] Documentation is complete and accurate
- [ ] Template follows our coding standards
- [ ] No security vulnerabilities in dependencies

### PR Requirements
1. **Clear title**: `feat: add [framework] template with [key features]`
2. **Description**: Explain what the template does and why it's useful
3. **Template category**: Specify which category it belongs to
4. **Dependencies**: List major dependencies and rationale
5. **Testing**: Describe how you tested the template

### PR Template Example
```markdown
## Template Description
Brief description of the template and its use case.

## Framework/Technology
- Framework: React 18
- Build tool: Vite
- Language: TypeScript
- UI Library: Tailwind CSS

## Key Features
- [ ] Responsive design
- [ ] Dark mode support
- [ ] TypeScript support
- [ ] Optimized builds

## Testing Checklist
- [ ] Template installs successfully
- [ ] Development server runs
- [ ] Production build works
- [ ] No console errors
- [ ] Mobile responsive
```

## 🐛 Reporting Issues

### Template Issues
Use our issue template for template-specific problems:
- **Template name**: Which template has the issue
- **Environment**: Node version, OS, browser
- **Steps to reproduce**: Clear reproduction steps
- **Expected vs actual behavior**
- **Screenshots/logs**: If applicable

### Feature Requests
For new template suggestions:
- **Framework/technology**: What should the template use
- **Use case**: Who would use this template and why
- **Key features**: What functionality should it include
- **Similar templates**: How it differs from existing options

## 🔧 Development Environment

### Prerequisites
- **Node.js**: 18+ (check individual templates for specific requirements)
- **npm/yarn**: Latest stable version
- **Git**: For version control

### Recommended Tools
- **VS Code**: With recommended extensions for each framework
- **ESLint**: For code quality
- **Prettier**: For code formatting

## 📚 Resources

### Framework Documentation
- [React](https://react.dev/) | [Vue](https://vuejs.org/) | [Angular](https://angular.io/)
- [Svelte](https://svelte.dev/) | [Astro](https://astro.build/) | [Preact](https://preactjs.com/)

### Build Tools
- [Vite](https://vitejs.dev/) | [Webpack](https://webpack.js.org/) | [Parcel](https://parceljs.org/)

### Tibica Platform
- [Tibica Docs](https://docs.tibica.io/)
- [Getting Started Guide](https://docs.tibica.io/getting-started/step-2-install-and-create/)

## 🌟 Recognition

Contributors will be:
- Listed in our Contributors section
- Credited in template README files
- Recognized in release notes
- Invited to our contributor Slack channel

## 📞 Questions?

- **Community**: [Tibica Slack Community](https://join.slack.com/t/tibica-community/shared_invite/zt-3djc8oep1-Ghsgkt3bAJJ6A4Kd7M6HPg)
- **Email**: [help@tibica.io](mailto:help@tibica.io)
- **Issues**: [GitHub Issues](https://github.com/tibica-io/tibica-webpages-templates/issues)

---

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

Thank you for helping make web development more accessible! 🚀