# Generated by Django 2.1.7 on 2019-04-02 17:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='custom_field',
            field=models.CharField(default='some', max_length=255),
            preserve_default=False,
        ),
    ]
