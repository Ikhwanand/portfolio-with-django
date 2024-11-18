from django.contrib import admin
from .models import Project, Skill, About, Experience

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'technologies', 'order', 'created_at')
    list_editable = ('order',)
    search_fields = ('title', 'description', 'technologies')
    list_filter = ('created_at',)

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'proficiency', 'order')
    list_editable = ('order', 'proficiency')
    list_filter = ('category',)
    search_fields = ('name',)

@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ('headline', 'email')

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('position', 'company', 'start_date', 'end_date', 'is_current', 'order')
    list_editable = ('order', 'is_current')
    list_filter = ('is_current',)
    search_fields = ('company', 'position', 'description')
