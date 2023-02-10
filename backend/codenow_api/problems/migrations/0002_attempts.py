# Generated by Django 4.1.5 on 2023-02-09 03:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('problems', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Attempts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField()),
                ('problem_id', models.IntegerField()),
                ('category_id', models.IntegerField()),
                ('date', models.DateField()),
                ('perceived_difficulty', models.IntegerField()),
                ('time', models.IntegerField()),
                ('completed', models.BooleanField(default=False)),
            ],
        ),
    ]
