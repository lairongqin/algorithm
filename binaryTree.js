function Node (data,left,right) {
	this.data = data;
	this.right = right;
	this.left = left;
	this.show = show;
}

function show () {
	return this.data;
}

function BST() {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
}

function insert(data){
	var n = new Node(data,null,null);

	if (this.root == null ){
		this.root = n;
	} else {
		var current = this.root;
		var parent;

		while (true) {
			parent = current;
			if(data < current.data) {
				current = current.left;
				if(current == null) {
					parent.left = n;
					break;
				}
			} else {
				current = current.right;
				if(current == null) {
					parent.right = n ;
					break;
				}
			}
		}
	}
}


function inOrder(node) {
	if(!(node == null)) {
		inOrder(node.left);
		console.log(node.show() + " ");
		inOrder(node.right);
	}
}

function preOrder(node) {
	if(!(node == null)) {
		console.log(node.show()+ " ");
		preOrder(node.left);
		preOrder(node.right);
	}
}

function postOrder(node) {
	if(!(node == null)) {
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show() + " ");
	}
}