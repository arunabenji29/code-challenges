// You are given a list of jobs IDs of jobs that must be completed, along with an array of dependencies where each dependency is a 2-element array that specifies that the first job is a prerequisite for the second job. Design an algorithm that finds an ordering of when the jobs may be completed. Note that there may be multiple correct orderings for a job list, or there may be none.

// For example, given this list of jobs:

// [9, 4, 10, 13, 3, 5]
// and this list of dependencies:

// [[10, 3], [10, 4], [3, 9]]
// One valid job ordering would be [10, 13, 5, 3, 4, 9].


// from collections import deque
// ​
// def task_scheduler(tasks, deps):
//   # use a directed graph to model the order of the dependencies 
//   # start off by throwing every job that isn't in the list of dependencies into
//   # the result array, then construct a directed from the remaining jobs and then 
//   # use that to figure out a valid ordering 
  
//   # once the graph is generated, use a breadth first traversal to walk the graph 
//   # and add the jobs to the result array in a valid order 
//   # just also add the jobs that don't appear in the dependency list to the graph as 
//   # unconnected vertices 
// ​
//   # start traversing the graph from a node that has no dependencies, then use bfs 
//   # to walk the graph, in order to find a valid ordering 
// ​
//   ordering = []
// ​
//   # construct our empty graph 
//   graph = {i: [] for i in tasks}
//   # construct our degrees dict 
//   degrees = {i: 0 for i in tasks}
// ​
//   # populate the graph with connections 
//   # loop through the dependencies array 
//   # also popuate our degrees dict 
//   for d in deps:
//     prereq, dependent = d[0], d[1]
//     # add the dependent to the prereq's list of connections 
//     graph[prereq].append(dependent)
//     degrees[dependent] += 1
// ​
//   # in order to figure out which graphs nodes to start from, check each 
//   # connections list and determine which tasks do not appear as connections 
//   # those nodes don't depend on any other node 
// ​
//   # now with knowing the degree of each node, we know which nodes to start from 
//   # since we're traversing in BFS manner, we need to use a queue to keep track 
//   # of our nodes as we're traversing 
//   queue = deque()
//   # add all nodes with degrees of 0 to the queue 
//   for key, val in degrees.items():
//     if val == 0:
//       queue.append(key)
// ​
//   # so long as our queue has elements inside 
//   # remove an element from the queue
//   # add it to our ordering list 
//   # find its dependents in the graph 
//   # decrement a degree from its dependents 
//   while len(queue) > 0:
//     node = queue.popleft() 
//     ordering.append(node) 
//     # loop through the node's connections 
//     for c in graph[node]:
//       # decrement the connection's degree 
//       degrees[c] -= 1
//       # check if the connection's degree is 0 now 
//       if degrees[c] == 0:
//         # add it to our queue 
//         queue.append(c)
// ​
//   # edge case: if there is a cycle in the dependencies 
//   if len(ordering) != len(tasks):
//     # there was a cycle in the dependencies 
//     return []
// ​
//   return ordering
// ​
// ​
// jobs = [9, 4, 10, 5, 3, 13]
// deps = [[10, 3], [10, 4], [3, 9], [5, 10], [4, 3]]
// ​
// print(task_scheduler(jobs, deps))