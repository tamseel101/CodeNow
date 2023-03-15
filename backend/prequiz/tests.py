from rest_framework import status
from django.core.management import call_command
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient, APITestCase
from prequiz.models import PrequizResults


class AddRatingViewTest(APITestCase):

    def setUp(self):
        self.client = APIClient()
        self.user = get_user_model().objects.create_user(
            'testuser',
            'testpass'
        )
        self.client.force_authenticate(self.user)

    def test_invalid_user(self):
        """
        Tests an invalid user trying to do the quiz
        """
        self.client.logout()
        res = self.client.post("http://127.0.0.1:8000/prequiz/submit_quiz")
        self.assertEqual(res.status_code, status.HTTP_403_FORBIDDEN)

    def test_submit_quiz(self):
        """
        Tests an invalid user trying to do the quiz
        """
        data = {
            "dynamic_arrays_conf": "1",
            "linked_list_conf": "2",
            "stacks_queues_conf": "3",
            "hash_tables_conf": "2",
            "bst_conf": "4",
            "binary_heap_priority_queue_conf": "3",
            "graphs_conf": "3",
            "trie_conf": "4",
            "bit_manipulation_conf": "5",
            "stability_sorting_conf": "5",
            "mergesort_conf": "4",
            "quicksort_conf": "2",
            "heapsort_conf": "1",
            "binary_search_conf": "3",
            "selections_conf": "4",
            "permutations_conf": "5",
            "subsets_conf": "3",
            "bfs_graph_conf": "2",
            "dfs_graph_conf": "5",
            "dijkstras_algo_conf": "4",
            "tree_traversal_conf": "4",
        }
        res = self.client.post("http://127.0.0.1:8000/prequiz/submit_quiz", data=data)
        self.assertEqual(res.status_code, 302)
        prequiz_results = PrequizResults.objects.get(user_id=self.user.id)
        self.assertEqual(prequiz_results.dynamic_arrays_conf, "1")
        self.assertEqual(prequiz_results.linked_list_conf, "2")
        self.assertEqual(prequiz_results.stacks_queues_conf, "3")
        self.assertEqual(prequiz_results.hash_tables_conf, "2")
        self.assertEqual(prequiz_results.bst_conf, "4")
        self.assertEqual(prequiz_results.binary_heap_priority_queue_conf, "3")
        self.assertEqual(prequiz_results.graphs_conf, "3")
        self.assertEqual(prequiz_results.trie_conf, "4")
        self.assertEqual(prequiz_results.bit_manipulation_conf, "5")
        self.assertEqual(prequiz_results.stability_sorting_conf, "5")
        self.assertEqual(prequiz_results.mergesort_conf, "4")
        self.assertEqual(prequiz_results.quicksort_conf, "2")
        self.assertEqual(prequiz_results.heapsort_conf, "1")
        self.assertEqual(prequiz_results.binary_search_conf, "3")
        self.assertEqual(prequiz_results.selections_conf, "4")
        self.assertEqual(prequiz_results.permutations_conf, "5")
        self.assertEqual(prequiz_results.subsets_conf, "3")
        self.assertEqual(prequiz_results.bfs_graph_conf, "2")
        self.assertEqual(prequiz_results.dfs_graph_conf, "5")
        self.assertEqual(prequiz_results.dijkstras_algo_conf, "4")
        self.assertEqual(prequiz_results.tree_traversal_conf, "4")

    def test_idk_submit(self):
        """
        Tests for when the user submits "I don't know" as an option
        """
        data = {
            "dynamic_arrays_conf": "1",
            "linked_list_conf": "2",
            "stacks_queues_conf": "3",
            "hash_tables_conf": "I don't know",
            "bst_conf": "4",
            "binary_heap_priority_queue_conf": "3",
            "graphs_conf": "3",
            "trie_conf": "4",
            "bit_manipulation_conf": "5",
            "stability_sorting_conf": "5",
            "mergesort_conf": "4",
            "quicksort_conf": "2",
            "heapsort_conf": "I don't know",
            "binary_search_conf": "3",
            "selections_conf": "4",
            "permutations_conf": "5",
            "subsets_conf": "3",
            "bfs_graph_conf": "I don't know",
            "dfs_graph_conf": "5",
            "dijkstras_algo_conf": "4",
            "tree_traversal_conf": "4",
        }
        res = self.client.post("http://127.0.0.1:8000/prequiz/submit_quiz", data=data)
        self.assertEqual(res.status_code, 302)
        prequiz_results = PrequizResults.objects.get(user_id=self.user.id)
        self.assertEqual(prequiz_results.dynamic_arrays_conf, "1")
        self.assertEqual(prequiz_results.linked_list_conf, "2")
        self.assertEqual(prequiz_results.stacks_queues_conf, "3")
        self.assertEqual(prequiz_results.hash_tables_conf, "I don't know")
        self.assertEqual(prequiz_results.bst_conf, "4")
        self.assertEqual(prequiz_results.binary_heap_priority_queue_conf, "3")
        self.assertEqual(prequiz_results.graphs_conf, "3")
        self.assertEqual(prequiz_results.trie_conf, "4")
        self.assertEqual(prequiz_results.bit_manipulation_conf, "5")
        self.assertEqual(prequiz_results.stability_sorting_conf, "5")
        self.assertEqual(prequiz_results.mergesort_conf, "4")
        self.assertEqual(prequiz_results.quicksort_conf, "2")
        self.assertEqual(prequiz_results.heapsort_conf, "I don't know")
        self.assertEqual(prequiz_results.binary_search_conf, "3")
        self.assertEqual(prequiz_results.selections_conf, "4")
        self.assertEqual(prequiz_results.permutations_conf, "5")
        self.assertEqual(prequiz_results.subsets_conf, "3")
        self.assertEqual(prequiz_results.bfs_graph_conf, "I don't know")
        self.assertEqual(prequiz_results.dfs_graph_conf, "5")
        self.assertEqual(prequiz_results.dijkstras_algo_conf, "4")
        self.assertEqual(prequiz_results.tree_traversal_conf, "4")

    def test_invalid_input(self):
        """
        Tests invalid input
        """
        data = {
            "dynamic_arrays_conf": "1",
            "linked_list_conf": "e",
            "stacks_queues_conf": "3",
            "hash_tables_conf": "I don't know",
            "bst_conf": "4",
            "binary_heap_priority_queue_conf": "3",
            "graphs_conf": "3",
            "trie_conf": "4",
            "bit_manipulation_conf": "5",
            "stability_sorting_conf": "5",
            "mergesort_conf": "4",
            "quicksort_conf": "2",
            "heapsort_conf": "I don't know",
            "binary_search_conf": "3",
            "selections_conf": "4",
            "permutations_conf": "5",
            "subsets_conf": "3",
            "bfs_graph_conf": "I don't know",
            "dfs_graph_conf": "5",
            "dijkstras_algo_conf": "f",
            "tree_traversal_conf": "4",
        }
        res = self.client.post("http://127.0.0.1:8000/prequiz/submit_quiz", data=data)
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)

    def test_break_fields(self):
        """
        Tests when users submit without a field
        """
        data = {
            "dynamic_arrays_conf": "1",
            "linked_list_conf": "2",
            "stacks_queues_conf": "3",
            "hash_tables_conf": "I don't know",
            "bst_conf": "4",
            "binary_heap_priority_queue_conf": "3",
            "graphs_conf": "3",
            "trie_conf": "4",
            "bit_manipulation_conf": "5",
            "stability_sorting_conf": "5",
            "mergesort_conf": "4",
            "quicksort_conf": "2",
            "heapsort_conf": "I don't know",
            "binary_search_conf": "3",
            "selections_conf": "4",
            "permutations_conf": "5"
        }
        res = self.client.post("http://127.0.0.1:8000/prequiz/submit_quiz", data=data)
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)

    def test_redirection(self):
        """
        Tests redirection
        """
        data = {
            "dynamic_arrays_conf": "1",
            "linked_list_conf": "2",
            "stacks_queues_conf": "3",
            "hash_tables_conf": "2",
            "bst_conf": "4",
            "binary_heap_priority_queue_conf": "3",
            "graphs_conf": "3",
            "trie_conf": "4",
            "bit_manipulation_conf": "5",
            "stability_sorting_conf": "5",
            "mergesort_conf": "4",
            "quicksort_conf": "2",
            "heapsort_conf": "1",
            "binary_search_conf": "3",
            "selections_conf": "4",
            "permutations_conf": "5",
            "subsets_conf": "3",
            "bfs_graph_conf": "2",
            "dfs_graph_conf": "5",
            "dijkstras_algo_conf": "4",
            "tree_traversal_conf": "4",
        }
        res = self.client.post("http://127.0.0.1:8000/prequiz/submit_quiz", data=data)
        self.assertEqual(res.status_code, 302)
        prequiz_results = PrequizResults.objects.get(user_id=self.user.id)
        self.assertEqual(prequiz_results.dynamic_arrays_conf, "1")
        self.assertEqual(prequiz_results.linked_list_conf, "2")
        self.assertEqual(prequiz_results.stacks_queues_conf, "3")
        self.assertEqual(prequiz_results.hash_tables_conf, "2")
        self.assertEqual(prequiz_results.bst_conf, "4")
        self.assertEqual(prequiz_results.binary_heap_priority_queue_conf, "3")
        self.assertEqual(prequiz_results.graphs_conf, "3")
        self.assertEqual(prequiz_results.trie_conf, "4")
        self.assertEqual(prequiz_results.bit_manipulation_conf, "5")
        self.assertEqual(prequiz_results.stability_sorting_conf, "5")
        self.assertEqual(prequiz_results.mergesort_conf, "4")
        self.assertEqual(prequiz_results.quicksort_conf, "2")
        self.assertEqual(prequiz_results.heapsort_conf, "1")
        self.assertEqual(prequiz_results.binary_search_conf, "3")
        self.assertEqual(prequiz_results.selections_conf, "4")
        self.assertEqual(prequiz_results.permutations_conf, "5")
        self.assertEqual(prequiz_results.subsets_conf, "3")
        self.assertEqual(prequiz_results.bfs_graph_conf, "2")
        self.assertEqual(prequiz_results.dfs_graph_conf, "5")
        self.assertEqual(prequiz_results.dijkstras_algo_conf, "4")
        self.assertEqual(prequiz_results.tree_traversal_conf, "4")

    def test_foreign_key(self):
        """
        Tests redirection
        """
        data = {
            "dynamic_arrays_conf": "1",
            "linked_list_conf": "2",
            "stacks_queues_conf": "3",
            "hash_tables_conf": "2",
            "bst_conf": "4",
            "binary_heap_priority_queue_conf": "3",
            "graphs_conf": "3",
            "trie_conf": "4",
            "bit_manipulation_conf": "5",
            "stability_sorting_conf": "5",
            "mergesort_conf": "4",
            "quicksort_conf": "2",
            "heapsort_conf": "1",
            "binary_search_conf": "3",
            "selections_conf": "4",
            "permutations_conf": "5",
            "subsets_conf": "3",
            "bfs_graph_conf": "2",
            "dfs_graph_conf": "5",
            "dijkstras_algo_conf": "4",
            "tree_traversal_conf": "4",
        }
        res = self.client.post("http://127.0.0.1:8000/prequiz/submit_quiz", data=data)
        self.assertEqual(res.status_code, 302)
        self.assertTrue(PrequizResults.objects.get(user_id=self.user.id))

    def tearDown(self) -> None:
        super().tearDown()
        call_command('flush', verbosity=0, interactive=False)
