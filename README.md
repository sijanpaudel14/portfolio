# 🚀 Sijan Paudel - Developer Portfolio

A stunning, interactive, and fully-responsive portfolio website built with **Next.js 14 App Router**, **Tailwind CSS**, **Framer Motion**, and more. Designed to reflect professionalism, creativity, and modern frontend excellence.

## 🌟 Features

### ✨ Interactive Elements

- **Custom Mouse Cursor**: Floating circle cursor that expands on hover
- **Loader Animation**: "SIJANPAUDEL" text with animated gradient on startup
- **Smooth Scroll Animations**: Framer Motion powered scroll-based animations
- **3D Project Cards**: Tilt effects and glow borders on project cards
- **Floating Buttons**: Subtle animations and hover effects

### 🎨 Design & UX

- **Dark/Light Mode**: Toggle with animated icon, stored in localStorage
- **Gradient Text**: Animated gradient text effects throughout
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional design with glass morphism effects
- **Smooth Transitions**: Fluid animations and page transitions

### 📱 Sections

- **Hero Section**: Typing animation with gradient text and profile image
- **About Section**: Education, work experience, and skills overview
- **Projects Section**: Filterable project cards with 3D effects
- **Skills Section**: Animated skill cards with progress bars and tooltips
- **Contact Section**: Functional contact form with validation
- **Footer**: Social links and back-to-top functionality

## 🛠 Tech Stack

| Technology          | Purpose                              |
| ------------------- | ------------------------------------ |
| **Next.js 14**      | Framework & App Router               |
| **TypeScript**      | Type safety & development experience |
| **Tailwind CSS**    | Styling & responsive design          |
| **Framer Motion**   | Animations & interactions            |
| **React Hook Form** | Form validation & handling           |
| **Lucide Icons**    | Beautiful icon library               |
| **next-themes**     | Dark/light mode management           |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── sijan.png              # Profile image
│   └── Sijan_Paudel_Resume.pdf # Resume file
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles & animations
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   └── page.tsx           # Main page component
│   └── components/
│       ├── loader.tsx         # Startup loader animation
│       ├── navbar.tsx         # Navigation with theme toggle
│       ├── hero.tsx           # Hero section with typing animation
│       ├── about.tsx          # About section
│       ├── projects.tsx       # Projects with filters
│       ├── skills.tsx         # Skills with animations
│       ├── contact.tsx        # Contact form
│       ├── footer.tsx         # Footer with social links
│       ├── custom-cursor.tsx  # Custom mouse cursor
│       └── theme-provider.tsx # Theme management
└── README.md
```

## 🎯 Customization

### Personal Information

Update the following files with your information:

- `src/components/hero.tsx` - Hero text and social links
- `src/components/about.tsx` - Education and work experience
- `src/components/projects.tsx` - Project details and links
- `src/components/skills.tsx` - Skills and proficiency levels
- `src/components/contact.tsx` - Contact information

### Styling

- Modify `src/app/globals.css` for custom animations and styles
- Update color schemes in Tailwind classes throughout components
- Customize gradient colors in CSS variables

### Images

- Replace `public/sijan.png` with your profile photo
- Update `public/Sijan_Paudel_Resume.pdf` with your resume
- Add project images to the projects section

## 📧 Contact Form Setup

The contact form is currently set up with a simulation. To enable real email functionality:

1. **Set up EmailJS** (recommended):

   ```bash
   npm install @emailjs/browser
   ```

2. **Configure EmailJS** in `src/components/contact.tsx`:

   ```typescript
   import emailjs from '@emailjs/browser'

   // Replace with your EmailJS credentials
   const templateParams = {
     from_name: data.name,
     from_email: data.email,
     subject: data.subject,
     message: data.message,
   }
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     templateParams,
     'YOUR_PUBLIC_KEY'
   )
   ```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **GitHub Pages**: Use `next export` for static deployment

## 🎨 Design Features

### Animations

- **Gradient Animations**: Flowing gradient effects on text and backgrounds
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive elements with smooth transitions
- **Loading States**: Smooth loading animations and transitions

### Accessibility

- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators
- **Color Contrast**: High contrast ratios for readability

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Responsive design best practices

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: pas078bct037@wrc.edu.np
- **LinkedIn**: [sijanpaudel14](https://linkedin.com/in/sijanpaudel14)
- **GitHub**: [sijanpaudel14](https://github.com/sijanpaudel14)

---

Built with ❤️ by Sijan Paudel using Next.js, Tailwind CSS, and Framer Motion.
