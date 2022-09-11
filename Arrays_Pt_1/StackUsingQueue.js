/**
 * Implement Stack using two queues
 * The idea here is to make push operation expensive
 * use two queue q1 and q2, when new element added, it will always be on top in q1.
 * we will use q2 to make this possible
 */


class Stack{
    constructor(){
        this.q1 = []
        this.q2 = []
        this.push = this.push.bind(this)
        this.pop = this.pop.bind(this)
        this.top = this.top.bind(this)
    }


    push(x){
        this.q2.push(x)
        while(this.q1.length > 0){

            this.q2.push(this.q1.shift())
        }

        let q3 = this.q1
        this.q1 = this.q2
        this.q2 = q3
    }


    pop(){
        if(this.q1.length > 0){
            return this.q1.shift()
        }
        return null
    }

    top(){
        return this.q1[0]
    }
}

let newStack = new Stack()

newStack.push(3)
newStack.push(4)
newStack.push(5)

console.log('stack here ', newStack.q1)
let p1 = newStack.pop()
console.log('stack after pop ', newStack.q1)

newStack.push(6)
newStack.push(7)
console.log('stack here ', newStack)
let p2 = newStack.pop()
console.log('stack after pop ', newStack.q1)
