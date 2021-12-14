# Generated by Django 3.2.7 on 2021-12-06 19:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_aboutus'),
    ]

    operations = [
        migrations.CreateModel(
            name='Club',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('club_name', models.CharField(max_length=100)),
                ('club_logo', models.ImageField(upload_to='clubLogo')),
                ('about_club', models.TextField(max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='College',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('college_name', models.CharField(max_length=100)),
                ('college_code', models.CharField(max_length=100)),
                ('college_address', models.TextField(max_length=120)),
            ],
        ),
        migrations.CreateModel(
            name='SessionRecord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('session_name', models.CharField(max_length=100)),
                ('session_image', models.ImageField(upload_to='sessions')),
                ('session_speaker', models.CharField(max_length=100)),
                ('session_topic', models.TextField(max_length=100)),
                ('session_time', models.DateTimeField(auto_now_add=True)),
                ('session_material', models.FileField(blank=True, upload_to='sessionMaterial')),
                ('club_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.club')),
            ],
        ),
        migrations.AddField(
            model_name='club',
            name='college',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.college'),
        ),
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('usn', models.CharField(max_length=15)),
                ('feedback', models.TextField(max_length=256)),
                ('attendance_time', models.DateTimeField(auto_now_add=True)),
                ('club_session', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.sessionrecord')),
            ],
        ),
    ]