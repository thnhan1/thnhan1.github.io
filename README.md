# Silavind Extended

A minimalist single-page Hugo theme, customized for portfolio websites.
Supports responsive design, multi-language, code enhancements, and comment integration.
Extends From [Silavind](https://github.com/khitezza/silavind)

> [!note]
> This is custom repo not core Sivalid Extended Theme.
> - Core silavind theme: [Silavind](https://github.com/khitezza/silavind)
> - Core silavind theme extended: [Silavind Ext](https://github.com/thnhan1/silavind)

## Demo website

👉[Demo blog 🌐](https://nhanab.xyz)

<img width="640" height="468" alt="image" src="https://github.com/user-attachments/assets/ba05346d-d8a2-485d-b18b-9922fc4914ae" />


---

## 🚀 Features & Change Log

| No. | Change                  | Description                                            | Date       | Status     |
| --- | ----------------------- | ------------------------------------------------------ | ---------- | ---------- |
| 5   | **Add Comment Support** | Comment system via [Giscus](https://giscus.app)        | 2025-08-09 | ✅ Finished |
| 4   | **Responsive Menu**     | Mobile-friendly navigation                             | 2025-08-20 | ✅ Finished |
| 3   | **Multi-Language**      | Multi-language site support                            | 2025-08-20 | 🔄 Preview |
| 2   | **Copy Code Block**     | Copy button with custom CSS/JS                         | 2025-08-20 | 🔄 Preview |
| 1   | **Author Param Update** | `.Site.Author` → `.Site.Params.Author` (`>= v0.124.0`) | 2025-08-19 | ✅ Finished |

---

## 📦 Getting Started

### 1. Requirements

* [Git](https://git-scm.com/)
* [Hugo Extended](https://github.com/gohugoio/hugo/releases)

> 💡 **Windows users:** Download and install **Hugo Extended** from the [release page](https://github.com/gohugoio/hugo/releases).

---

### 2. Create New Site

```bash
# Create new site
hugo new site Website
cd Website

# Initialize Git
git init
```

---

### 3. Add Theme

Add as a submodule:

```bash
git submodule add https://github.com/thnhan1/silavind themes/silavind
git submodule init
```

Update theme to latest:

```bash
git submodule update --remote --merge
```

---

## ✍️ Content Management

### Add New Article

```bash
hugo new content writings/20xx-xx-xx-Title.md
```

### Add Article With Image Bundle

```bash
hugo new content writings/20xx-xx-xx-Title/index.md
cp ~/images/cover.webp content/writings/20xx-xx-xx-Title/cover.webp
```

---

## 🚀 Deployment

### Using **GitHub Pages** with Actions:
👉 [Workflow Example](https://github.com/ertzizart/silavind/blob/pages/.github/workflows/gh-pages.yml)

**💥 (GitHub Pages disbale inline script by their Content CSP Policy).**

```bash
# Add custom domain (if any)
echo "yourdomain.com" >> CNAME

# Push to GitHub
git add .
git commit -m "first commit"
git branch -M trunk
git remote add origin https://github.com/your-name/repo-name.git
git push -u origin trunk
```

Then configure DNS records for your domain.

### Using Netlify

Create `netlify.toml`. Deploy using GitHub Repo in netlify. It will public netlify domain if you not have own domain. Example [yourblog.netlify.app](yourblog.netlify.app).

```toml
[build]
  publish = "public"
  command = "hugo --gc --minify"

[context.production.environment]
  HUGO_VERSION = "0.148.2"
  HUGO_ENV = "production"
  HUGO_ENABLEGITINFO = "true"
```

---

## ⚙️ Additional Features

* **Comments**: Integrated via [Giscus](https://giscus.app)
* **Responsive Menu**: Optimized for mobile
* **Multi-Language**: i18n support (preview)
* **Copy Code Block**: Easy one-click copy for code snippets (preview)

---

## 📄 License

Licensed under [GNU GPL v3](https://github.com/ertzizart/silavind/blob/trunk/LICENSE)

## 🔧 Feature Requests & Issues

- Found a bug? → [Open an Issue](https://github.com/thnhan1/silavind/issues)  
- Want a new feature? → create an Issue with the `enhancement` label 
