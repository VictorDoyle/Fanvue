# Generated by Django 3.2 on 2021-04-13 23:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Artist',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_of_artist', models.CharField(max_length=40)),
                ('bio', models.TextField(max_length=300)),
                ('artist_image', models.CharField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=20)),
                ('description', models.TextField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='Album',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('album_image', models.CharField(max_length=250)),
                ('artist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main_app.artist')),
                ('genre', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main_app.genre')),
            ],
        ),
    ]