from django.contrib.auth.models import User
from django.db import models


class PrequizResults(models.Model):
    """
    Prequiz Result Model
    """
    # Data Structures
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    dynamic_arrays_conf = models.CharField(max_length=100)
    linked_list_conf = models.CharField(max_length=100)
    stacks_queues_conf = models.CharField(max_length=100)
    hash_tables_conf = models.CharField(max_length=100)
    bst_conf = models.CharField(max_length=100)
    binary_heap_priority_queue_conf = \
        models.CharField(max_length=100)
    graphs_conf = models.CharField(max_length=100)
    trie_conf = models.CharField(max_length=100)

    # Algorithms
    bit_manipulation_conf = models.CharField(max_length=100)
    stability_sorting_conf = models.CharField(max_length=100)
    mergesort_conf = models.CharField(max_length=100)
    quicksort_conf = models.CharField(max_length=100)
    heapsort_conf = models.CharField(max_length=100)
    binary_search_conf = models.CharField(max_length=100)
    selections_conf = models.CharField(max_length=100)
    permutations_conf = models.CharField(max_length=100)
    subsets_conf = models.CharField(max_length=100)
    bfs_graph_conf = models.CharField(max_length=100)
    dfs_graph_conf = models.CharField(max_length=100)
    dijkstras_algo_conf = models.CharField(max_length=100)
    tree_traversal_conf = models.CharField(max_length=100)
