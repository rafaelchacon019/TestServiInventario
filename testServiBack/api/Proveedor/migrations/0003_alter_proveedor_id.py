# Generated by Django 3.2.5 on 2021-07-26 03:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Proveedor', '0002_auto_20210724_1647'),
    ]

    operations = [
        migrations.AlterField(
            model_name='proveedor',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
