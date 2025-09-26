# Silavind Extended

A minimalist single-page Hugo theme customized for portfolio and blog websites. Features responsive design, multi-language support, and integrated comment.

Built upon the foundation of [Silavind](https://github.com/khitezza/silavind).

> [!NOTE]
> This is a customized repository, not the core Silavind Extended Theme.
>
> - **Core theme**: [Silavind](https://github.com/khitezza/silavind)
> - **Extended theme**: [Silavind Extended](https://github.com/thnhan1/silavind)

## 🌐 Live Demo

Check out the live demo: **[Demo Blog](https://nhanab.xyz)**

<img width="640" height="468" alt="Silavind Extended Theme Preview" src="https://github.com/user-attachments/assets/ba05346d-d8a2-485d-b18b-9922fc4914ae" />

---

## ✨ Features & Enhancements

| Feature | Type|Description | Date | Status |
|---------|--|-------------|------|--------|
| **Comment System Localization** |Fix| Fix Language In Comment Section | 2025-09-26 | ✅ Complete |
| **Giscus Integration** |Feat| GitHub-based comment system via [Giscus](https://giscus.app) | 2025-08-09 | ✅ Complete |
| **Responsive Navigation** |Feat| Mobile-optimized menu with smooth animations | 2025-08-20 | ✅ Complete |
| **Enhance Multi-Language Support** |Feat| Internationalization (i18n) capabilities | 2025-08-20 | 🔄 In Progress |
| **Code Copy Functionality** |Feat| One-click copy button for code blocks | 2025-08-20 | 🔄 In Progress |
| **Hugo Compatibility** |Feat| Updated for Hugo v0.124.0+ parameter structure | 2025-08-19 | ✅ Complete |

---

## � Quick Start

### Prerequisites

Ensure you have the following installed:

- **[Git](https://git-scm.com/)** - Version control system
- **[Hugo Extended](https://github.com/gohugoio/hugo/releases)** - Static site generator (v0.124.0+)

> 💡 **Note for Windows users:** Download Hugo Extended (not the standard version) from the [official releases page](https://github.com/gohugoio/hugo/releases).

---

### Installation

#### 1. Create New Hugo Site

```bash
# Create a new Hugo site
hugo new site my-blog
cd my-blog

# Initialize Git repository
git init
```

#### 2. Add Silavind Theme

Install as a Git submodule (recommended):

```bash
# Add theme as submodule
git submodule add https://github.com/thnhan1/silavind themes/silavind
git submodule init
```

#### 3. Update Theme

Keep your theme up-to-date:

```bash
# Update to latest version
git submodule update --remote --merge
```

---

## 📝 Content Management

### Creating New Posts

#### Simple Article
```bash
# Create a new blog post
hugo new content/writings/2025-01-01-my-first-post.md
```

#### Article with Images (Page Bundle)
```bash
# Create post with dedicated folder for assets
hugo new content/writings/2025-01-01-my-first-post/index.md

# Add images to the same folder
cp ~/images/featured.webp content/writings/2025-01-01-my-first-post/
```

### Content Structure
```
content/
├── writings/
│   ├── 2025-01-01/post-one.md # single language
│   └── 2025-01-02/ # multi post, multi language
│       ├── post-1.md
│       └── post-2.md
├── about/
│   └── index.md
└── projects/
    └── index.md
```

---

## 🌐 Deployment Options

### GitHub Pages with Actions

> ⚠️ **Important**: GitHub Pages disables inline scripts due to Content Security Policy (CSP).

1. **Set up workflow**: Use this [workflow example](https://github.com/ertzizart/silavind/blob/pages/.github/workflows/gh-pages.yml)

2. **Deploy to GitHub**:

> ![warning] This theme using script so that it can not using GitHub page to deploy because GitHub CSP Policy.

### Netlify Deployment (Recommend)

Create `netlify.toml` in your project root:

```toml
[build]
  publish = "public"
  command = "hugo --gc --minify"

[context.production.environment]
  HUGO_VERSION = "0.148.2"
  HUGO_ENV = "production"
  HUGO_ENABLEGITINFO = "true"
```

Then connect your GitHub repository to Netlify for automatic deployments.

---

## 🔧 Configuration

### Basic Setup

Update your `hugo.toml`:

```toml
title = "Your Blog Title"
theme = "silavind"
languageCode = "en"

[params]
  author = "Your Name"
  intro = "Your tagline or introduction"
  
[params.social]
  [[params.social.links]]
    name = "GitHub"
    url = "https://github.com/username"
```

### Advanced Features

- **💬 Comments**: Integrated via [Giscus](https://giscus.app)
- **📱 Responsive Design**: Mobile-optimized navigation
- **🌍 Multi-Language**: i18n support for international sites
- **📋 Code Copying**: One-click copy functionality for code blocks

---

## 📄 License

This project is licensed under the [GNU General Public License v3.0](https://github.com/ertzizart/silavind/blob/trunk/LICENSE).

## 🤝 Contributing

We welcome contributions! Here's how you can help:

- **🐛 Found a bug?** → [Open an Issue](https://github.com/thnhan1/silavind/issues)
- **💡 Have a feature idea?** → Create an issue with the `enhancement` label
- **🔧 Want to contribute code?** → Fork the repo and submit a pull request

---

## 📞 Support

- **Documentation**: Check out the [wiki](https://github.com/thnhan1/silavind/wiki) for detailed guides
- **Community**: Join discussions in [GitHub Discussions](https://github.com/thnhan1/silavind/discussions)
- **Issues**: Report bugs or request features in [Issues](https://github.com/thnhan1/silavind/issues)
