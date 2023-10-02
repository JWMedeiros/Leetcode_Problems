function invertBinaryTree (currentNode) {
    if (!(currentNode?.left && currentNode?.right)) {
        return currentNode;
    }
    [currentNode.left, currentNode.right] = [invertBinaryTree(currentNode.left), invertBinaryTree(currentNode.right)]
}

invertBinaryTree(rootNode)