# Generated by Django 4.1.5 on 2023-03-17 05:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('problems', '0003_behaviorproblem'),
    ]

    operations = [
        migrations.AlterField(
            model_name='problemcategory',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]
