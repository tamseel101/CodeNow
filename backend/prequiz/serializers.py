from rest_framework import serializers


class SubmitPrequizViewSerializer(serializers.Serializer):
    """
    Serializer for submitting a prequiz form
    """
    # Data Structures
    dynamic_arrays_conf = serializers.CharField(max_length=100)
    linked_list_conf = serializers.CharField(max_length=100)
    stacks_queues_conf = serializers.CharField(max_length=100)
    hash_tables_conf = serializers.CharField(max_length=100)
    bst_conf = serializers.CharField(max_length=100)
    binary_heap_priority_queue_conf = \
        serializers.CharField(max_length=100)
    graphs_conf = serializers.CharField(max_length=100)
    trie_conf = serializers.CharField(max_length=100)

    # Algorithms
    bit_manipulation_conf = serializers.CharField(max_length=100)
    stability_sorting_conf = serializers.CharField(max_length=100)
    mergesort_conf = serializers.CharField(max_length=100)
    quicksort_conf = serializers.CharField(max_length=100)
    heapsort_conf = serializers.CharField(max_length=100)
    binary_search_conf = serializers.CharField(max_length=100)
    selections_conf = serializers.CharField(max_length=100)
    permutations_conf = serializers.CharField(max_length=100)
    subsets_conf = serializers.CharField(max_length=100)
    bfs_graph_conf = serializers.CharField(max_length=100)
    dfs_graph_conf = serializers.CharField(max_length=100)
    dijkstras_algo_conf = serializers.CharField(max_length=100)
    tree_traversal_conf = serializers.CharField(max_length=100)
