# Generated by Django 2.1.7 on 2019-05-14 21:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('photos', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='image_file_ref_path',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
