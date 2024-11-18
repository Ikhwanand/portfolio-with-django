from django.db import models
from django.core.validators import URLValidator

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    technologies = models.CharField(max_length=200, help_text="Comma-separated list of technologies used")
    image = models.ImageField(upload_to='projects/')
    project_url = models.URLField(blank=True, validators=[URLValidator()])
    github_url = models.URLField(blank=True, validators=[URLValidator()])
    order = models.IntegerField(default=0, help_text="Order in which to display the project")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.title

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('frontend', 'Frontend'),
        ('backend', 'Backend'),
        ('database', 'Database'),
        ('devops', 'DevOps'),
        ('other', 'Other'),
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    icon = models.CharField(max_length=50, help_text="Font Awesome icon class")
    proficiency = models.IntegerField(default=80, help_text="Proficiency level (0-100)")
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['category', 'order']

    def __str__(self):
        return f"{self.name} ({self.category})"

class About(models.Model):
    headline = models.CharField(max_length=200)
    bio = models.TextField()
    profile_image = models.ImageField(upload_to='about/')
    resume = models.FileField(upload_to='documents/', blank=True)
    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    email = models.EmailField()

    def __str__(self):
        return self.headline

    class Meta:
        verbose_name_plural = "About"

class Experience(models.Model):
    company = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    is_current = models.BooleanField(default=False)
    company_url = models.URLField(blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['-start_date']
        verbose_name_plural = "Experiences"

    def __str__(self):
        return f"{self.position} at {self.company}"
