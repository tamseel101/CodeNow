# Generated by Django 4.1.7 on 2023-03-29 02:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('achievements', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='achievementmodel',
            old_name='achievement_name',
            new_name='name',
        ),
    ]
