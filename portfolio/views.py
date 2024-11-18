from django.shortcuts import render
from django.views.generic import TemplateView
from django.core.mail import send_mail
from django.contrib import messages
from django.shortcuts import redirect
from django.conf import settings
from .models import Project, Skill, About, Experience

# Create your views here.
def home(request):
    return render(request, 'portfolio/home.html')

class HomeView(TemplateView):
    template_name = "portfolio/home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['about'] = About.objects.first()
        context['projects'] = Project.objects.all()
        context['skills'] = Skill.objects.all()
        context['experiences'] = Experience.objects.all()
        return context

    def post(self, request, *args, **kwargs):
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        # Prepare email content
        email_subject = f"Portfolio Contact: {subject}"
        email_message = f"""
        New message from your portfolio website:
        
        Name: {name}
        Email: {email}
        Subject: {subject}
        
        Message:
        {message}
        """

        try:
            # Send email
            send_mail(
                email_subject,
                email_message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.DEFAULT_FROM_EMAIL],  # Send to yourself
                fail_silently=False,
            )
            messages.success(request, "Thank you! Your message has been sent successfully.")
        except Exception as e:
            messages.error(request, "Sorry, there was an error sending your message. Please try again later.")

        return redirect('portfolio:home')