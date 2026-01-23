import java.util.*;

public class KnightTravails {

    static int[] dx = {2, 2, -2, -2, 1, 1, -1, -1};
    static int[] dy = {1, -1, 1, -1, 2, -2, 2, -2};

    static class Node {
        int x, y;
        Node parent;

        Node(int x, int y, Node parent) {
            this.x = x;
            this.y = y;
            this.parent = parent;
        }
    }

    public static void main(String[] args) {
        int size = 8;
        int startX = 0, startY = 0;
        int endX = 7, endY = 7;

        boolean[][] visited = new boolean[size][size];
        Queue<Node> queue = new LinkedList<>();

        queue.add(new Node(startX, startY, null));
        visited[startX][startY] = true;

        Node destination = null;

        while (!queue.isEmpty()) {
            Node current = queue.poll();

            if (current.x == endX && current.y == endY) {
                destination = current;
                break;
            }

            for (int i = 0; i < 8; i++) {
                int nx = current.x + dx[i];
                int ny = current.y + dy[i];

                if (nx >= 0 && ny >= 0 && nx < size && ny < size && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.add(new Node(nx, ny, current));
                }
            }
        }

        printPath(destination);
    }

    static void printPath(Node node) {
        List<Node> path = new ArrayList<>();

        while (node != null) {
            path.add(node);
            node = node.parent;
        }

        Collections.reverse(path);

        System.out.println("Minimum Moves Required: " + (path.size() - 1));
        System.out.println("Path:");

        for (Node n : path) {
            System.out.println("(" + n.x + ", " + n.y + ")");
        }
    }
}
