import { IComparable } from "../../Interface/common/IComparable";

/**
 * @BinarySearchTree
 */

class TreeNode<T> {

    public node: T;
    public left: TreeNode<T>;
    public right: TreeNode<T>;

    constructor(node: T) {
        this.node = node;
    }

}

/**
 * *搜索: 时间复杂度： Average-> O(lgn), WorstCase->O(n)*
 */
export class BinarySearchTree<T extends IComparable> {

    private _root: TreeNode<T>;

    get root(): TreeNode<T> {
        return this._root;
    }

    insert(node: T): this {
        this._root = this._insertByRecursion(this._root, node);
        return this;
    }

    contains(node: T): boolean {

        return false;
    }

    findPath(node: T): number[] {
        let pathArr: number[] = [];
        let temp = this._root;
        if (!temp) return [-1];

        do {
            if (temp.node.isLessThan(node.value)) {
                pathArr.push(1);
                temp = temp.right;
            } else if (temp.node.isGreaterThan(node.value)) {
                pathArr.push(0);
                temp = temp.left;
            } else {
                return pathArr;
            }
        } while (temp.left || temp.right)

        if(temp.node.isEqualTo(node.value)) {
            return pathArr;
        }

        return [-1];
    }

    private _findPathByRecursion(treeNode: TreeNode<T>, node: T): number {
        return -1;
    }

    private _findPathByIteration(treeNode: TreeNode<T>, node: T): number {
        return -1;
    }

    remove(node: T): this {
        this._root = this._removeByRecursion(this._root, node);
        return this;
    }

    getMax(): TreeNode<T> {
        return this._getMaxByRecursion(this._root);
    }

    getMin(): TreeNode<T> {
        return this._getMinByRecursion(this._root);
    }

    private _insertByRecursion(treeNode: TreeNode<T>, node: T): TreeNode<T> {
        if (!treeNode) {
            return new TreeNode<T>(node);
        }

        if (treeNode.node.isEqualTo(node.value)) return;

        if (treeNode.node.isLessThan(node.value)) {
            treeNode.right = this._insertByRecursion(treeNode.right, node);
        } else {
            treeNode.left = this._insertByRecursion(treeNode.left, node);
        }

        return treeNode;
    }

    private _insertByIteraton(treeNode: TreeNode<T>, node: T): TreeNode<T> {
        return treeNode;
    }

    /// replace the deleted node (D_node) with the GetMax() of D_node.left;
    private _removeByRecursion(treeNode: TreeNode<T>, node: T): TreeNode<T> {
        if (!treeNode) return;

        if (treeNode.node.isLessThan(node.value)) {
            treeNode.right = this._removeByRecursion(treeNode.right, node);
        } else if (treeNode.node.isGreaterThan(node.value)) {
            treeNode.left = this._removeByRecursion(treeNode.left, node);
        } else {
            if (!treeNode.left) {
                treeNode = treeNode.right;
            } else if (!treeNode.right) {
                treeNode = treeNode.left
            } else {
                treeNode.node = this._getMaxByRecursion(treeNode.left).node;
                treeNode.left = this._removeByRecursion(treeNode.left, treeNode.node);
            }
        }

        return treeNode;
    }

    private _removeByIteration(treeNode: TreeNode<T>, node: T): TreeNode<T> {
        return treeNode;
    }

    private _getMaxByRecursion(treeNode: TreeNode<T>): TreeNode<T> {
        if (!treeNode.right) return treeNode;

        return this._getMaxByRecursion(treeNode.right);
    }

    private _getMaxByIteration(treeNode: TreeNode<T>): TreeNode<T> {

        while (treeNode.right) {
            treeNode = treeNode.right;
        }
        return treeNode;
    }

    private _getMinByRecursion(treeNode: TreeNode<T>): TreeNode<T> {
        if (!treeNode.left) return treeNode;

        return this._getMaxByRecursion(treeNode.left);
    }

    private _getMinByIteration(treeNode: TreeNode<T>): TreeNode<T> {

        while (treeNode.left) {
            treeNode = treeNode.left;
        }
        return treeNode;
    }

}

