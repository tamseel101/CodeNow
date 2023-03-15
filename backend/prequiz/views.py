from django.shortcuts import redirect
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import PrequizResults
from .serializers import SubmitPrequizViewSerializer


class SubmitPrequizView(APIView):
    """
    Prequiz form endpoint
    """
    serializer_class = SubmitPrequizViewSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request):
        """
        Populates the database with the prequiz results
        """
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            dynamic_arrays_conf = serializer.validated_data.get('dynamic_arrays_conf')
            linked_list_conf = serializer.validated_data.get('linked_list_conf')
            stacks_queues_conf = serializer.validated_data.get('stacks_queues_conf')
            hash_tables_conf = serializer.validated_data.get('hash_tables_conf')
            bst_conf = serializer.validated_data.get('bst_conf')
            binary_heap_priority_queue_conf = \
                serializer.validated_data.get('binary_heap_priority_queue_conf')
            graphs_conf = serializer.validated_data.get('graphs_conf')
            trie_conf = serializer.validated_data.get('trie_conf')
            # Algorithms
            bit_manipulation_conf = serializer.validated_data.get('bit_manipulation_conf')
            stability_sorting_conf = serializer.validated_data.get('stability_sorting_conf')
            mergesort_conf = serializer.validated_data.get('mergesort_conf')
            quicksort_conf = serializer.validated_data.get('quicksort_conf')
            heapsort_conf = serializer.validated_data.get('heapsort_conf')
            binary_search_conf = serializer.validated_data.get('binary_search_conf')
            selections_conf = serializer.validated_data.get('selections_conf')
            permutations_conf = serializer.validated_data.get('permutations_conf')
            subsets_conf = serializer.validated_data.get('subsets_conf')
            bfs_graph_conf = serializer.validated_data.get('bfs_graph_conf')
            dfs_graph_conf = serializer.validated_data.get('dfs_graph_conf')
            dijkstras_algo_conf = serializer.validated_data.get('dijkstras_algo_conf')
            tree_traversal_conf = serializer.validated_data.get('tree_traversal_conf')
            confidences = [dynamic_arrays_conf, linked_list_conf, stacks_queues_conf,
                           hash_tables_conf, bst_conf, binary_heap_priority_queue_conf, graphs_conf,
                           trie_conf, bit_manipulation_conf, stability_sorting_conf, mergesort_conf,
                           quicksort_conf, heapsort_conf, binary_search_conf, selections_conf,
                           permutations_conf, subsets_conf, bfs_graph_conf, dfs_graph_conf,
                           dijkstras_algo_conf, tree_traversal_conf]
            for confidence in confidences:
                if confidence not in ["0", "1", "2", "3", "4", "5"] and confidence != "I don't know":
                    return Response(
                        status=status.HTTP_400_BAD_REQUEST
                    )
            prequiz_result = PrequizResults.objects.create(
                user_id=request.user,
                dynamic_arrays_conf=dynamic_arrays_conf,
                linked_list_conf=linked_list_conf,
                stacks_queues_conf=stacks_queues_conf,
                hash_tables_conf=hash_tables_conf,
                bst_conf=bst_conf,
                binary_heap_priority_queue_conf=binary_heap_priority_queue_conf,
                graphs_conf=graphs_conf,
                trie_conf=trie_conf,
                bit_manipulation_conf=bit_manipulation_conf,
                stability_sorting_conf=stability_sorting_conf,
                mergesort_conf=mergesort_conf,
                quicksort_conf=quicksort_conf,
                heapsort_conf=heapsort_conf,
                binary_search_conf=binary_search_conf,
                selections_conf=selections_conf,
                permutations_conf=permutations_conf,
                subsets_conf=subsets_conf,
                bfs_graph_conf=bfs_graph_conf,
                dfs_graph_conf=dfs_graph_conf,
                dijkstras_algo_conf=dijkstras_algo_conf,
                tree_traversal_conf=tree_traversal_conf
            )
            prequiz_result.save()
            return redirect('google.ca', status=302)

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )
