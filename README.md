# Modern Portfolio Website with Django

A modern, animated portfolio website built with Django, Tailwind CSS, and DaisyUI. Features a futuristic design, smooth animations, and an easy-to-use admin panel for content management.

## 🌟 Features

- 🎨 Modern, responsive design with dark theme
- ✨ Smooth animations and transitions
- 📱 Mobile-first approach
- 🔄 Dynamic content management via Django admin
- 📧 Contact form with email integration
- 🎯 Interactive project showcase
- 📊 Animated skill bars
- 🔍 Project filtering system
- 🎬 Typing animation effect
- 📜 Progress bar and smooth scrolling

## 🛠️ Tech Stack

- **Backend**: Django 5.1
- **Frontend**: 
  - Tailwind CSS
  - DaisyUI
  - Custom JavaScript
- **Database**: SQLite (default)
- **Animations**: Custom Rombo animations
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Space Grotesk, JetBrains Mono

## 🚀 Getting Started

### Prerequisites

- Python 3.x
- Node.js and npm
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ikhwanand/portfolio-with-django.git
   cd portfolio-with-django
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Install Node.js dependencies:
   ```bash
   npm install
   ```

5. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your settings

6. Run migrations:
   ```bash
   python manage.py migrate
   ```

7. Create a superuser:
   ```bash
   python manage.py createsuperuser
   ```

8. Start the development server:
   ```bash
   python manage.py runserver
   ```

9. In a separate terminal, start Tailwind CSS:
   ```bash
   python manage.py tailwind start
   ```

## 📝 Configuration

### Email Settings

To enable the contact form, configure your email settings in `.env`:

```env
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
```

For Gmail, you'll need to:
1. Enable 2-Factor Authentication
2. Generate an App Password
3. Use the App Password in your settings

## 🎨 Customization

### Content Management

1. Access the admin panel at `/admin`
2. Add/edit:
   - Projects
   - Skills
   - About information
   - Work experience

### Theme Customization

1. Colors: Edit `tailwind.config.js`
2. Animations: Modify `main.js`
3. Layout: Update templates in `portfolio/templates`

## 📱 Features

### Projects Section
- Filter projects by category
- Animated project cards
- Hover effects
- Project details overlay

### Skills Section
- Animated progress bars
- Category organization
- Visual skill representation

### Contact Form
- Real-time validation
- Email integration
- Success/error messages
- Loading states

## 🔧 Development

### Adding New Features

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes
3. Test thoroughly
4. Create a pull request

### Running Tests

```bash
python manage.py test
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio-with-django](https://github.com/ikhwanand/portfolio-with-django)
