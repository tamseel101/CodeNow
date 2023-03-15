# Generated by Django 4.1.5 on 2023-03-08 20:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='PrequizResults',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dynamic_arrays_conf', models.CharField(max_length=100)),
                ('linked_list_conf', models.CharField(max_length=100)),
                ('stacks_queues_conf', models.CharField(max_length=100)),
                ('hash_tables_conf', models.CharField(max_length=100)),
                ('bst_conf', models.CharField(max_length=100)),
                ('binary_heap_priority_queue_conf', models.CharField(max_length=100)),
                ('graphs_conf', models.CharField(max_length=100)),
                ('trie_conf', models.CharField(max_length=100)),
                ('bit_manipulation_conf', models.CharField(max_length=100)),
                ('stability_sorting_conf', models.CharField(max_length=100)),
                ('mergesort_conf', models.CharField(max_length=100)),
                ('quicksort_conf', models.CharField(max_length=100)),
                ('heapsort_conf', models.CharField(max_length=100)),
                ('binary_search_conf', models.CharField(max_length=100)),
                ('selections_conf', models.CharField(max_length=100)),
                ('permutations_conf', models.CharField(max_length=100)),
                ('subsets_conf', models.CharField(max_length=100)),
                ('bfs_graph_conf', models.CharField(max_length=100)),
                ('dfs_graph_conf', models.CharField(max_length=100)),
                ('dijkstras_algo_conf', models.CharField(max_length=100)),
                ('tree_traversal_conf', models.CharField(max_length=100)),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]