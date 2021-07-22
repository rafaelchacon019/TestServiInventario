# Generated by Django 3.2.5 on 2021-07-22 18:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Categorias', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Productos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=250)),
                ('detalle', models.CharField(max_length=250)),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Categorias.categorias')),
            ],
        ),
    ]