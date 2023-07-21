'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.right = null;
   this.left = null;
}

BinarySearchTree.prototype.size = function(){
   if(!this.rigth && !this.left) return 1;
   if(!this.left) return 1 + this.right.size();
   if(!this.right) return 1 + this.left.size();
   if(this.left && this.right) return 1 + this.left.size() + this.right.size();
}

BinarySearchTree.prototype.insert = function(value){
   let nBst = new BinarySearchTree(value);
   if (value <= this.value){
      if(this.left){
         this.left.insert(value);
      }else{this.left = nBst}
   }else{
      if(this.right){
         this.right.insert(value);
      }else{this.right = nBst}
   }
}

BinarySearchTree.prototype.contains = function(value){
   if(this.value === value){
		return true;
	}
	if(value <= this.value){
      if(!this.left)return false;
      return this.left.contains(value);
		}
   if(value > this.value){
      if(!this.right)return false;
      return this.right.contains(value);
      }
}

BinarySearchTree.prototype.depthFirstForEach = function(cb,tipoRecorrido){
   if(tipoRecorrido === "post-order"){
      if(this.left) this.left.depthFirstForEach(cb, tipoRecorrido);
      if(this.right) this.right.depthFirstForEach(cb, tipoRecorrido);
      cb(this.value);}
   else if(tipoRecorrido === "pre-order"){
      cb(this.value);
      if(this.left) this.left.depthFirstForEach(cb, tipoRecorrido);
      if(this.right) this.right.depthFirstForEach(cb, tipoRecorrido);}
   else{
      if(this.left) this.left.depthFirstForEach(cb, tipoRecorrido);
      cb(this.value);
      if(this.right) this.right.depthFirstForEach(cb, tipoRecorrido);}
   }

BinarySearchTree.prototype.breadthFirstForEach = function(cb,bFF = []){
   cb(this.value);
   if(this.left) bFF.push(this.left);
   if(this.right) bFF.push(this.right);
   if(bFF.length > 0){
   bFF.shift().breadthFirstForEach(cb, bFF);}
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
